// import React, { useState, useEffect } from 'react';

// const Hero = () => {
//   const [displayText, setDisplayText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const fullText = "Final Year B.Tech IT Student | Aspiring Software Developer";

//   useEffect(() => {
//     if (currentIndex < fullText.length) {
//       const timeout = setTimeout(() => {
//         setDisplayText(prev => prev + fullText[currentIndex]);
//         setCurrentIndex(prev => prev + 1);
//       }, 100);
//       return () => clearTimeout(timeout);
//     }
//   }, [currentIndex, fullText]);

//   const scrollToContact = () => {
//     const element = document.querySelector('#contact');
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const downloadResume = () => {
//     // Create a dummy resume download
//     const link = document.createElement('a');
//     link.href = '/resume.pdf';
//     link.download = 'Tharun_Kumar_Resume.pdf';
//     link.click();
//   };

//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
//       </div>

// <div className=' flex '>


//       <div className="max-w-4xl mx-auto px-4 text-center relative z-10 ">
//         <div className="mb-8 animate-fade-in">
//           <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//             Tharun Kumar N
//           </h1>
//           <div className="text-xl md:text-2xl text-gray-300 h-8 mb-6">
//             {displayText}
//             <span className="animate-pulse">|</span>
//           </div>
//         </div>

//         <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-500">
//           Passionate about building scalable applications, exploring modern technologies, and delivering impactful solutions.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-1000">
        
//           <button
//             onClick={scrollToContact}
//             className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
//           >
//             Contact Me
//           </button>
//         </div>

       
//         <div >
//           <img src='data:image/webp;base64,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' alt="" />
//         </div>
//       </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Final Year B.Tech IT Student | Aspiring Software Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Layout */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE - Text */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Tharun Kumar N
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 h-8 mb-6">
            {displayText}
            <span className="ml-1 animate-blink">|</span>
          </div>

          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl"><br></br>
            Passionate about building scalable applications, exploring modern technologies,
            and delivering impactful solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={scrollToContact}
              className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/avatar.png"
            alt="hero-graphic"
            className="w-64 md:w-80 lg:w-96 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
