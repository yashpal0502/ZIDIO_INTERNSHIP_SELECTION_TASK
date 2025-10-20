import React from "react";

const Title = ({ title, description }) => {
  return (
    <div className="text-center mt-12 px-4 sm:px-6 md:px-0">
      {/* Decorative underline */}
      <h2 className="relative inline-block text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
        {title}
        <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
      </h2>

      {/* Description */}
      <p className="mt-6 max-w-2xl mx-auto text-gray-500 text-base sm:text-lg leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default Title;
