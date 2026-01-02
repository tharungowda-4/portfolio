import React from 'react';

const Resume = () => {
  const downloadResume = () => {
    // In a real application, this would download the actual resume file
    const link = document.createElement('a');
    link.href = '/public/Tharun kumar N_res.pdf';
    link.download = 'Tharun_Kumar_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Download my complete resume to learn more about my experience, education, and technical skills.
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-12 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Professional Resume</h3>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Get a comprehensive overview of my technical skills, project experience, education, and certifications in a professionally formatted document.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
            <div className="bg-gray-700/30 rounded-lg p-4">
              <h4 className="text-cyan-400 font-semibold mb-2">Technical Skills</h4>
              <p className="text-gray-400 text-sm">Comprehensive list of programming languages, frameworks, and tools</p>
            </div>
            <div className="bg-gray-700/30 rounded-lg p-4">
              <h4 className="text-purple-400 font-semibold mb-2">Project Details</h4>
              <p className="text-gray-400 text-sm">In-depth descriptions of key projects and achievements</p>
            </div>
            <div className="bg-gray-700/30 rounded-lg p-4">
              <h4 className="text-pink-400 font-semibold mb-2">Education & Certs</h4>
              <p className="text-gray-400 text-sm">Academic background and professional certifications</p>
            </div>
          </div>

          <button
            onClick={downloadResume}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 text-lg"
          >
            <span className="flex items-center justify-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume (PDF)
            </span>
          </button>

          
        </div>
      </div>
    </section>
  );
};

export default Resume;
