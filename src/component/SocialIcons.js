"use client";

// components/SocialIcons.jsx
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import dynamic from "next/dynamic";
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const SocialIcons = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const DeepChat = dynamic(
  //   () => import("deep-chat-react").then((mod) => mod.DeepChat),
  //   { ssr: false }
  // );



  return (
    <div className="fixed bottom-7 left-5 z-500 flex flex-col space-y-4">
      {/* Telegram Icon */}
      <a
        href="https://t.me/token2049insiderchat"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join Telegram"
        className="bg-[#229ED9] p-3 md:p-4 rounded-full shadow-xl hover:scale-110 transition-transform"
      >
        <FaTelegramPlane className="text-white text-4xl sm:text-3xl md:text-2xl lg:text-4xl" />
      </a>

      {/* WhatsApp Icon */}
      <a
        href="https://chat.whatsapp.com/BUhJx4EUA6nFMxOjVHORhd"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="bg-[#25D366] p-4 rounded-full shadow-xl hover:scale-110 transition-transform flex justify-center"
      >
        <FaWhatsapp className="text-white text-3xl md:text-2xl lg:text-4xl" />
      </a>

      {/* <>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed bottom-5 right-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-full shadow-lg z-50 hover:scale-105 transition-transform"
        >
          <MessageCircle size={24} />
        </button>
        {isOpen && (
          <div className="fixed bottom-20 right-5 z-50 w-[350px] max-w-full">
            <DeepChat
              request={{
                url: 'https://api.openai.com/v1/chat/completions',
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
                },
                body: {
                  model: 'gpt-3.5-turbo',
                  messages: [
                    { role: 'system', content: 'You are a helpful assistant.' },
                  ],
                },
              }}
            />
          </div>
        )}
      </> */}
    </div>
  );
};

export default SocialIcons;
