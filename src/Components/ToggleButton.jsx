import React, { useState } from 'react';

function ToggleButton() {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="flex items-center absolute">
      <button
        className={`w-12 h-6 flex items-center justify-center rounded-full ${
          isActive ? 'bg-blue-500' : 'bg-gray-300'
        }`}
        onClick={toggleButton}
      >
        <div
          className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${
            isActive ? 'translate-x-full' : ''
          }`}
        ></div>
      </button>
      <span className="ml-2">{isActive ? 'On' : 'Off'}</span>
    </div>
  );
}

export default ToggleButton;
