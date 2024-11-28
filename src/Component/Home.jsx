import React from 'react';
import profileImage from '../assert/Profile.jpeg';

const Homepage = () => {
  return (
    <section id="homepage" className="w-screen h-screen bg-white text-black overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between h-full border-b border-gray-300">
        {/* Text Content */}
        <div className="flex flex-col justify-center items-start lg:items-start px-6 lg:px-24 space-y-4 lg:space-y-6 lg:w-2/3">
          <h2 className="text-4xl lg:text-5xl font-bold animate-fade">Hello,</h2>
          <h2 className="text-4xl lg:text-5xl font-bold animate-fade-right">
            I am <span className="text-blue-500">Misham</span>
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold animate-fade-right">Software Developer</h2>
          <p className="mt-4 text-lg lg:text-xl opacity-0 animate-fade-up">
            Let's build something amazing together
          </p>
        </div>

        {/* Image Content */}
        <div className="flex justify-center items-center lg:w-1/3 px-6 lg:px-24">
          <img
            src={profileImage}
            alt="Profile"
            className="h-40 w-40 md:h-56 md:w-56 lg:h-72 lg:w-72 rounded-lg lg:rounded-md shadow-lg animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default Homepage;
