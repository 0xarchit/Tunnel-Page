import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
      <h1 className="text-[clamp(2rem,5vw,4rem)] text-center font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text leading-loose px-4">
        Currently tunneling <br /> is off
      </h1>
      <Link
        to="/"
        className="mt-4 inline-block border border-blue-500 text-blue-500 hover:border-blue-400 hover:text-blue-400 font-bold py-2 px-4 rounded transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
