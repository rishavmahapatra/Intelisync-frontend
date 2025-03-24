import { useEffect } from "react";

const Modal = ({ isOpen, onClose, title, content, message, messageType }) => {
  if (!isOpen) return null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4 sm:px-6 z-50"
      onClick={onClose} // Close modal on background click
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl transform transition-all duration-300 scale-95 sm:scale-100"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
          onClick={onClose}
        >
          ✖
        </button>

        <h2 className="text-xl sm:text-2xl font-semibold">{title}</h2>
        <p className="mt-2 text-sm sm:text-base">{content}</p>

        {/* Message Section (Success/Error) */}
        {message && (
          <div
            className={`mt-4 p-3 rounded-md text-sm sm:text-base ${
              messageType === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}

        {/* Modal Footer */}
        <div className="mt-4 flex justify-end">
          <button
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
