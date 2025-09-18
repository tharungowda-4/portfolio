import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Education</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-lg font-medium text-white">B.Tech Information Technology</h4>
                  <p className="text-gray-400">Erode Sengunthar Engineering College</p>
                  <p className="text-gray-500">Final Year Student</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">Passion & Interests</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Problem-solving and algorithmic thinking
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Backend development and API design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Learning emerging technologies
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Building scalable applications
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-6">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                As a final-year B.Tech IT student, I've developed a strong foundation in software development 
                with a particular focus on Java and backend technologies. My journey in programming began with 
                curiosity and has evolved into a passion for creating efficient, scalable solutions.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm comfortable working with Java and have hands-on experience with Spring Boot framework 
                for building robust backend applications. My approach to development emphasizes clean code, 
                best practices, and continuous learning.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Currently expanding my skill set with modern web technologies and exploring full-stack 
                development to become a well-rounded software developer.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/30 rounded-lg p-4 text-center border border-gray-700/30">
                <div className="text-2xl font-bold text-cyan-400">2+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="bg-gray-800/30 rounded-lg p-4 text-center border border-gray-700/30">
                <div className="text-2xl font-bold text-purple-400">3+</div>
                <div className="text-gray-400 text-sm">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
