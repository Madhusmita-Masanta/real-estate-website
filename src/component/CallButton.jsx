import React from 'react';

const CallButton = () => {
  return (
    <div>
      {/* Phone Call Link */}
      <a
        href="tel:+919000914614"
        className="fixed bottom-[240px] right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Phone_icon.png"
          alt="Call"
          className="w-7 h-7"
        />
      </a>
    </div>
  );
};

export default CallButton;


