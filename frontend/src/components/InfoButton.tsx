// src/components/InfoButton.tsx
import React, { useState } from "react";

interface InfoButtonProps {
  infoText: string; // Explanation text for the focus objective
}

const InfoButton: React.FC<InfoButtonProps> = ({ infoText }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleMouseEnter = () => {
    setShowInfo(true);
  };

  const handleMouseLeave = () => {
    setShowInfo(false);
  };

  return (
    <div className="relative inline-block overflow-visible">
      {/* 'i' button */}
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="info-button w-4 h-4 bg-gray-1 rounded-full text-white italic border border-white flex items-center justify-center"
        style={{ fontSize: '10px' }}
      >
        i
      </button>

      {/* Hover info box */}
      {showInfo && (
        <div className="absolute left-0 mt-1 w-48 p-1 bg-white border rounded shadow-lg text-xs"
        style={{ zIndex: 1 }}>
          {infoText}
        </div>
      )}
    </div>
  );
};

export default InfoButton;
