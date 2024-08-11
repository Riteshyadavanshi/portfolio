import React from 'react';

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center   p-8 md:p-10">
       
       

      
      <div className="w-full md:w-2/3 ">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-600 text-lg mb-4">
          Hi! I&apos;m <strong>Ritesh Yadav</strong>, a passionate and dedicated third-year B.Sc IT student specializing in Next.js and React.js development. With a strong foundation in HTML5, CSS3, JavaScript, TypeScript, and Tailwind CSS, I create modern and responsive web applications.
        </p>
        <p className="text-gray-600 text-lg mb-4">
          I&apos;m currently honing my skills as a full-stack developer at pawfriend.in, where I contribute to building seamless and user-friendly experiences. I thrive on solving complex problems and turning innovative ideas into functional digital solutions.
        </p>
        <p className="text-gray-600 text-lg">
          When I&apos;m not coding, you&apos;ll find me exploring the latest tech trends, contributing to open-source projects, or enjoying a good book.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
