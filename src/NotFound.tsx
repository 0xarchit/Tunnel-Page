import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
      <h1 className="text-[clamp(2rem,5vw,4rem)] text-center font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text leading-loose px-4">
        Currently tunneling <br /> is off
      </h1>
    </div>
  );
};

export default NotFound;
