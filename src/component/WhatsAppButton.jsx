import React from 'react';

const WhatsAppButton = () => {
  return (
    <div>
      {/* WhatsApp Link */}
      <a
        href="https://wa.me/+919000914614?text=Hello want to know more about property!"
        className="whatsapp_float fixed bottom-[300px] right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
          alt="WhatsApp"
          className="whatsapp_icon w-7 h-7"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;

