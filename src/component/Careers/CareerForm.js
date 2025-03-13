"use client";

import { useState } from "react";

const inputFields = ["Full Name", "Email", "Phone Number"];
const linkFields = ["Link your CV", "Link your portfolio"];
const otherFields = [
  "What are your salary expectations?",
  "How soon can you start working in Intellisync?",
];

export default function ApplicationForm() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    [...inputFields, ...linkFields, ...otherFields].forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Form Data: ", formData);
    alert("Form submitted successfully!");

    setFormData({});
  };

  return (
    <div className="flex items-end bg-white w-full justify-center min-h-screen ">
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
                value={formData[field] || ""}
                onChange={(e) => handleChange(field, e.target.value)}
                className="w-full p-1.5 border border-gray-300 rounded-md bg-blue-50"
              />
              {errors[field] && <span className="text-red-500 mt-1">{errors[field]}</span>}
            </div>
          ))}

          {/* Link Fields (Two-Column Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {linkFields.map((field) => (
              <div key={field} className="flex flex-col items-start">
                <label className="mb-2 text-[15px]">{field}<span className="text-red-500">*</span></label>
                <input
                  type="text"
                  value={formData[field] || ""}
                  onChange={(e) => handleChange(field, e.target.value)}
                  className="w-full p-1.5 border border-gray-300 rounded-md bg-blue-50"
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
                value={formData[field] || ""}
                onChange={(e) => handleChange(field, e.target.value)}
                className="w-full p-1.5 border border-gray-300 rounded-md bg-blue-50"
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
    </div>
  );
}