"use client";
import React, { useState } from "react";
import { MdDoneOutline } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: value ? "" : "This field is required" }));
  };

  // ✅ Fix: Define handlePhoneChange
  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
    setErrors((prev) => ({ ...prev, phone: value ? "" : "Phone number is required" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.firstname.trim()) newErrors.firstname = "First name is required";
    if (!formData.lastname.trim()) newErrors.lastname = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    setTimeout(() => {
      setShowSuccessPopup(true);
      setLoading(false);
      setFormData({ firstname: "", lastname: "", email: "", phone: "" });
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-start justify-center px-6 md:px-28 py-12 bg-[rgba(30,34,40,1)]">
      {/* Left Section */}
      <div className="md:w-1/2 mt-20">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
          Ready to take your marketing <br /> to the next level?
        </h2>
        <p className="text-lg text-gray-300 mb-6">Book a demo and discovery call to get a look at:</p>
        <ul className="space-y-4 text-gray-300">
          {[
            "How Intelisync works",
            "How you can do marketing at scale better, faster, and cheaper",
            "How we’re different from agencies, freelancers, and in-house marketing teams",
            "The most suitable subscription plan for your needs",
          ].map((text, index) => (
            <li key={index} className="flex items-center space-x-3">
              <MdDoneOutline className="text-2xl text-white-400" /> <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section (Contact Form) */}
      <section className="flex flex-col items-center justify-start text-gray-600 font-poppins px-4 lg:px-10 py-1 mt-20">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-semibold text-center text-gray-900">Contact Us</h2>
          <p className="text-gray-600 text-center mt-2">Empowering your business with Blockchain, Web3, and AI solutions.</p>

          {/* Form */}
          <form className="mt-6 space-y-6 flex flex-col items-center" onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstname"
              placeholder="First Name*"
              className="w-full border-b-2 py-2 outline-none focus:border-teal-500"
              value={formData.firstname}
              onChange={handleInputChange}
            />
            {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname}</p>}

            <input
              type="text"
              name="lastname"
              placeholder="Last Name*"
              className="w-full border-b-2 py-2 outline-none focus:border-teal-500"
              value={formData.lastname}
              onChange={handleInputChange}
            />
            {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname}</p>}

            <input
              type="email"
              name="email"
              placeholder="Email*"
              className="w-full border-b-2 py-2 outline-none focus:border-teal-500"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            {/* Phone Input with Country Code */}
            <PhoneInput
              country={"us"}
              value={formData.phone}
              onChange={handlePhoneChange} // ✅ Now defined
              inputClass="!w-full !bg-transparent !border-0 !border-b-2 !border-gray-500 !py-2 !outline-none focus:!border-teal-500 placeholder-gray-400"
              containerClass="w-full !border-0"
              buttonClass="hidden"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

            <button
              type="submit"
              className={`w-[200px] h-[50px] flex justify-center items-center text-white font-semibold rounded-[30px] bg-gradient-to-r from-[#008BB2] to-[#009E97] hover:opacity-80 transition-all duration-300 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Book a demo"}
            </button>
          </form>
          <p className="text-xs text-gray-500 text-center mt-4">By clicking next, you agree to our Privacy Policy.</p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
