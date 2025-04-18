
import React from 'react';

const BloodTransfusionHeader: React.FC = () => {
  return (
    <div className="text-center mb-8 animate-fade-in">
      <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
        Blood Type Conversion Checker
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Check if one blood type can be safely converted to another and view the conversion process.
      </p>
    </div>
  );
};

export default BloodTransfusionHeader;
