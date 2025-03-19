'use client';

import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { TextField } from '@mui/material';
import {baseUrl} from '../../utils/Api_BaseUrl'
const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: value ? '' : 'This field is required' }));
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

    try {
      const response = await fetch(`${baseUrl}/contact/contactUs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.firstname,
          lastName: formData.lastname,
          email: formData.email,
          contactNumber: '+' + formData.phone,
        }),
      });
      setShowSuccessPopup(true);
      setFormData({ firstname: "", lastname: "", email: "", phone: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-28 py-12 bg-[rgba(30,34,40,1)]">
      <div className="md:w-1/2 mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
          Ready to take your marketing <br /> to the next level?
        </h2>
        <p className="text-lg text-gray-300 mb-6">Book a demo and discovery call to get a look at:</p>
        <ul className="space-y-4 text-gray-300">
          {["How Intelisync works", "How you can do marketing at scale better, faster, and cheaper", "How we’re different from agencies, freelancers, and in-house marketing teams", "The most suitable subscription plan for your needs"].map((text, index) => (
            <li key={index} className="flex items-center space-x-3">
              <DoneOutlineIcon />
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>

      <section className="flex flex-col items-center justify-center text-gray-600 font-poppins px-4 lg:px-10 py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-semibold text-center text-gray-900">Contact Us</h2>
          <p className="text-gray-600 text-center mt-2">Empowering your business with Blockchain, Web3, and AI solutions.</p>

          <form className="mt-6 space-y-6 flex flex-col items-center" onSubmit={handleSubmit}>
            <TextField label="First Name*" name="firstname" variant="standard" value={formData.firstname} onChange={handleInputChange} fullWidth />
            {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname}</p>}
            <TextField label="Last Name*" name="lastname" variant="standard" value={formData.lastname} onChange={handleInputChange} fullWidth />
            {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname}</p>}
            <TextField label="Email*" name="email" variant="standard" value={formData.email} onChange={handleInputChange} fullWidth />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <div className="w-full">
              <PhoneInput country={'in'} value={formData.phone} onChange={(phone) => setFormData((prev) => ({ ...prev, phone }))} inputProps={{ name: 'phone' }} containerStyle={{ width: '100%' }} inputStyle={{ width: '100%', borderBottom: '0.2px solid #000' }} />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <button type="submit" className={`w-[200px] h-[50px] flex justify-center items-center text-white font-semibold rounded-[30px] bg-gradient-to-r from-[#008BB2] to-[#009E97] hover:opacity-80 transition-all duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={loading}>
              {loading ? 'Submitting...' : 'Book a demo'}
            </button>
          </form>
          <p className="text-xs text-gray-500 text-center mt-4">By clicking next, you agree to our Privacy Policy.</p>
        </div>
      </section>

      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center modal z-50">
          <div className="bg-white p-6 rounded-[20px] shadow-lg text-center">
            <h3 className="text-2xl font-bold text-green-600">Success!</h3>
            <p className="mt-4 text-gray-700">contact form filled sucessfully.</p>
            <button onClick={() => setShowSuccessPopup(false)} className="mt-6 px-6 py-2 bg-teal-500 text-white rounded-[10px] hover:bg-teal-600">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;