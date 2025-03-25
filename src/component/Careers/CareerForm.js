"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import default styles
import { baseUrl } from "@/utils/Api_BaseUrl";

const inputFields = ["Full Name", "Email"];
const linkFields = ["Link your CV", "Link your portfolio"];
const otherFields = ["What are your salary expectations", "How soon can you start working in Intellisync"];

export default function ApplicationForm() {
  const [formData, setFormData] = useState({ phone: "" });
  const [errors, setErrors] = useState({});

  // Mapping long field labels to API-compatible short keys
  const fieldMappings = {
    "Full Name": "name",
    Email: "email",
    "Phone Number": "phone",
    "Link your CV": "cv",
    "Link your portfolio": "portfolio",
    "What are your salary expectations": "salary",
    "How soon can you start working in Intellisync": "joining",
  };

  const handleChange = (field, value) => {
    const key = fieldMappings[field];
    setFormData({ ...formData, [key]: value });
    setErrors({ ...errors, [field]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    [...inputFields, ...linkFields, ...otherFields, "Phone Number"].forEach((field) => {
      const key = fieldMappings[field];
      if (!formData[key]) {
        newErrors[field] = `${field} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch(`${baseUrl}/contact/join`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phoneNumber: `+${formData.phone}`, // Ensuring country code
          cv: formData.cv,
          portfolio: formData.portfolio,
          salary: formData.salary,
          joining: formData.joining
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Form submitted successfully!");
        setFormData({ phone: "" });
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
          {/* Input Fields */}
          {inputFields.map((field) => (
            <div key={field} className="flex flex-col items-start">
              <label className="mb-2 text-[15px]">{field}<span className="text-red-500">*</span></label>
              <input
                type="text"
                value={formData[fieldMappings[field]] || ""}
                onChange={(e) => handleChange(field, e.target.value)}
                className="w-full p-1.5 border border-gray-300 rounded-md"
              />
              {errors[field] && <span className="text-red-500 mt-1">{errors[field]}</span>}
            </div>
          ))}

          {/* Phone Number Field */}
          <div className="flex flex-col items-start">
            <label className="mb-2 text-[15px]">Phone Number<span className="text-red-500">*</span></label>
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
                paddingLeft:'45px'
              }}
            />
            {errors["Phone Number"] && <span className="text-red-500 mt-1">{errors["Phone Number"]}</span>}
          </div>

          {/* Link Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {linkFields.map((field) => (
              <div key={field} className="flex flex-col items-start">
                <label className="mb-2 text-[15px]">{field}<span className="text-red-500">*</span></label>
                <input
                  type="text"
                  value={formData[fieldMappings[field]] || ""}
                  onChange={(e) => handleChange(field, e.target.value)}
                  className="w-full p-1.5 border border-gray-300 rounded-md"
                />
                {errors[field] && <span className="text-red-500 mt-1">{errors[field]}</span>}
              </div>
            ))}
          </div>

          {/* Other Fields */}
          {otherFields.map((field) => (
            <div key={field} className="flex flex-col items-start">
              <label className="mb-2 text-[15px]">{field}<span className="text-red-500">*</span></label>
              <input
                type="text"
                value={formData[fieldMappings[field]] || ""}
                onChange={(e) => handleChange(field, e.target.value)}
                className="w-full p-1.5 border border-gray-300 rounded-md"
              />
              {errors[field] && <span className="text-red-500 mt-1">{errors[field]}</span>}
            </div>
          ))}

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
