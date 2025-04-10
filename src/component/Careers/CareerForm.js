"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { baseUrl } from "@/utils/Api_BaseUrl";

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    salary: "",
    joining: "",
  });
  const [cvFile, setCvFile] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleFileChange = (file) => {
    if (file && file.type !== "application/pdf") {
      toast.error("Only PDF files are allowed.");
      return;
    }
    setCvFile(file);
    setErrors((prev) => ({ ...prev, cv: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const newErrors = {};
    if (!formData.name) newErrors.name = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone Number is required";
    if (!cvFile) newErrors.cv = "CV is required";
    if (!formData.designation) newErrors.designation = "Designation is required";
    if (!formData.salary) newErrors.salary = "Salary expectation is required";
    if (!formData.joining) newErrors.joining = "Joining time is required";
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  
    try {
      const formPayload = new FormData();
      formPayload.append("fullName", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("phoneNumber", `+${formData.phone}`);
      formPayload.append("role", formData.designation);
      formPayload.append("salary", formData.salary);
      formPayload.append("joining", formData.joining);
      formPayload.append("cv", cvFile); 
  
      const response = await fetch(`${baseUrl}/contact/join`, {
        method: "POST",
        body: formPayload, 
      });
  
      const result = await response.json();
  
      if (response.ok) {
        toast.success("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          designation: "",
          salary: "",
          joining: "",
        });
        setCvFile(null);
      } else {
        toast.error(result?.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error(error?.message || "Failed to submit form.");
    }
  };
  

  return (
    <div className="flex items-end bg-white w-full justify-center min-h-screen">
      <div className="p-8">
        <h2 className="text-xl font-semibold mb-6">
          Join Intellisync and be part of a dynamic team shaping the future of blockchain and digital transformation.
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
          {/* Full Name */}
          <div className="flex flex-col items-start">
            <label className="mb-2 text-[15px]">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-1.5 border border-gray-300 rounded-md"
            />
            {errors.name && <span className="text-red-500 mt-1">{errors.name}</span>}
          </div>

          {/* Email */}
          <div className="flex flex-col items-start">
            <label className="mb-2 text-[15px]">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-1.5 border border-gray-300 rounded-md"
            />
            {errors.email && <span className="text-red-500 mt-1">{errors.email}</span>}
          </div>

          {/* Phone Number */}
          <div className="flex flex-col items-start">
            <label className="mb-2 text-[15px]">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <PhoneInput
              country={"in"}
              value={formData.phone}
              onChange={(phone) => setFormData((prev) => ({ ...prev, phone }))}
              inputProps={{ name: "phone" }}
              containerStyle={{ width: "100%" }}
              inputStyle={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                paddingLeft: "45px",
              }}
            />
            {errors.phone && <span className="text-red-500 mt-1">{errors.phone}</span>}
          </div>

          {/* Upload CV */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-start w-full">
              <label className="mb-2 text-[15px]">
                Upload your CV <span className="text-red-500">*</span>
              </label>
              <div className="flex w-full items-center space-x-3">
                <input
                  id="cv-upload"
                  type="file"
                  accept=".pdf"
                  onChange={(e) => handleFileChange(e.target.files[0])}
                  className="hidden"
                />
                <label
                  htmlFor="cv-upload"
                  className="bg-[#0097AE] text-white px-4 py-2 rounded-md cursor-pointer"
                >
                  Choose File
                </label>
                <input
                  type="text"
                  value={cvFile?.name || ""}
                  readOnly
                  placeholder="No file chosen"
                  className="flex-1 p-1.5 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
                />
              </div>
              {errors.cv && <span className="text-red-500 mt-1">{errors.cv}</span>}
            </div>

            {/* Designation */}
            <div className="flex flex-col items-start">
              <label className="mb-2 text-[15px]">
                Designation apply for <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="w-full p-1.5 border border-gray-300 rounded-md"
              />
              {errors.designation && <span className="text-red-500 mt-1">{errors.designation}</span>}
            </div>
          </div>

          {/* Salary Expectations */}
          <div className="flex flex-col items-start">
            <label className="mb-2 text-[15px]">
              What are your salary expectations <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className="w-full p-1.5 border border-gray-300 rounded-md"
            />
            {errors.salary && <span className="text-red-500 mt-1">{errors.salary}</span>}
          </div>

          {/* Joining Time */}
          <div className="flex flex-col items-start">
            <label className="mb-2 text-[15px]">
              How soon can you start working in Intellisync <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="joining"
              value={formData.joining}
              onChange={handleChange}
              className="w-full p-1.5 border border-gray-300 rounded-md"
            />
            {errors.joining && <span className="text-red-500 mt-1">{errors.joining}</span>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="self-start bg-[#0097AE] text-white px-6 py-3 my-3 rounded-md hover:bg-teal-600"
          >
            Send application
          </button>
        </form>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        toastStyle={{ fontSize: "15px", fontWeight: "500" }}
      />
    </div>
  );
}
