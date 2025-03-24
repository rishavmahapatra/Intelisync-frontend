'use client';

import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { TextField } from '@mui/material';
import { baseUrl } from '../../utils/Api_BaseUrl'
import Modal from '../Model/Model';
const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const getInputProps = (customStyles = {}) => ({
    sx: {
      '&:before': {
        borderBottom: '0.5px solid #000000C7',
      },
      '&:hover:before': {
        borderBottom: '0.5px solid #000000C7 !important',
      },
      '&:after': {
        borderBottom: '0.5px solid #000000C7',
      },
      sx: { color: '#000000CC' },
      ...customStyles,
    },
  });
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
    if (!formData.message.trim()) newErrors.message = "Message is required";
    const messageWordCount = formData.message.trim().split(/\s+/).length;
    if (messageWordCount > 300) newErrors.message = "Message cannot exceed 300 words";

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
          contactNumber: "+" + formData.phone,
          message: formData.message,
        }),
      });

      const data = await response.json(); // Extract JSON response

      // Handle API response correctly
      if (data?.success && data?.message.includes("already exists")) {
        setMessage(data?.message);
        setMessageType("error");
        setIsOpen(true);
      } else {
        setShowSuccessPopup(true);
        setMessage(data?.message || "Form submitted successfully!");
        setMessageType("success");
        setIsOpen(true);
        setFormData({ firstname: "", lastname: "", email: "", phone: "", message: "" }); // Reset fields
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage(error?.message);
      setMessageType("error");
      setIsOpen(true);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-28 py-12 bg-[#1E2228]">
      <div className="md:w-1/2 mb-16">
        <h2 className="font-[500] mb-6 text-white text-[30px] md:text-[33px] leading-[38px] tracking-[-0.01em]">
          Ready to take your marketing <br /> to the next level?
        </h2>
        <p className="text-lg text-gray-300 mb-6 text-[18px] leading-[30px]">Book a demo and discovery call to get a look at:</p>
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
            <TextField label="First Name*" name="firstname" variant="standard" value={formData.firstname} onChange={handleInputChange} fullWidth
              InputProps={getInputProps()} InputLabelProps={{
                sx: { color: '#000000CC' },
              }} />
            {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname}</p>}
            <TextField label="Last Name*" name="lastname" variant="standard" value={formData.lastname} onChange={handleInputChange} fullWidth
              InputProps={getInputProps()} InputLabelProps={{
                sx: { color: '#000000CC' },
              }} />
            {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname}</p>}
            <TextField label="Email*" name="email" variant="standard" value={formData.email} onChange={handleInputChange} fullWidth InputProps={getInputProps()} InputLabelProps={{
              sx: { color: '#000000CC' },
            }} />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <div className="w-full mt-5">
              <PhoneInput country={'in'} value={formData.phone} onChange={(phone) => setFormData((prev) => ({ ...prev, phone }))} inputProps={{ name: 'phone' }} containerStyle={{ width: '100%' }} inputStyle={{ width: '100%', borderBottom: '0.2px solid #000' }} />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
            <TextField placeholder="Let us know how we can assist you!*" name="message" variant="standard" value={formData.message} onChange={handleInputChange} fullWidth InputProps={getInputProps()} InputLabelProps={{
              sx: { color: '#000000CC', marginTop: '2px' },
            }} />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            <button type="submit" className={`mt-4 w-[200px] text-[18px] leading-[26px] font-[500] h-[50px] flex justify-center items-center text-white rounded-[30px] bg-gradient-to-r from-[#008BB2] to-[#009E97] hover:opacity-80 transition-all duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={loading}>
              {loading ? 'Submitting...' : 'Book a demo'}
            </button>
          </form>
          <p className="text-[12px] leading-[140%] text-gray-500 text-center mt-4">By clicking next, you agree to receive communications from Intelisync in accordance with our Privacy Policy.</p>
        </div>
      </section>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Notification"
        message={message}
        messageType={messageType}
      />
    </div>
  );
};

export default ContactUs;