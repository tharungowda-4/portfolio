import React from 'react';

const Achievements = () => {
  const certifications = [
    {
      title: "Core Java Programming",
      issuer: "Infosys springboard",
      date: "2024",
      description: "Comprehensive understanding of Java fundamentals, OOP concepts, and advanced programming techniques.",
      icon: "☕"
    },
    {
      title: "Spring Boot Framework",
      issuer: "Scalar",
      date: "2025",
      description: "Mastery of Spring Boot for building enterprise-level applications and RESTful APIs.",
      icon: "🍃"
    },
    {
      title: "PHP Development",
      issuer: "Great Learning",
      date: "2024",
      description: "Server-side scripting and web development using PHP with database integration.",
      icon: "🐘"
    }
  ];

  const achievements = [
    {
      title: "Academic Excellence",
      description: "Consistent performance in core IT subjects with focus on programming and software development.",
      icon: "🎓"
    },
    {
      title: "Project Leadership",
      description: "Led multiple team projects demonstrating technical skills and collaborative abilities.",
      icon: "👥"
    },
    {
      title: "Problem Solving",
      description: "Strong analytical skills demonstrated through algorithmic challenges and coding competitions.",
      icon: "🧩"
    },
    {
      title: "Continuous Learning",
      description: "Actively pursuing new technologies and frameworks to stay current with industry trends.",
      icon: "📚"
    }
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Achievements & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My journey of continuous learning and professional development in software engineering.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/20"
              >
                <div className="text-4xl mb-4 text-center">{cert.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-2">{cert.title}</h4>
                <p className="text-cyan-400 font-medium mb-2">{cert.issuer}</p>
                <p className="text-gray-500 text-sm mb-3">{cert.date}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Highlights & Achievements */}
        <div>
          <h3 className="text-2xl font-semibold text-purple-400 mb-8 text-center">Academic Highlights</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-gray-800/30 rounded-lg p-6 border border-gray-700/30">
            <div className="text-3xl font-bold text-cyan-400 mb-2">3+</div>
            <div className="text-gray-400">Certifications</div>
          </div>
          <div className="text-center bg-gray-800/30 rounded-lg p-6 border border-gray-700/30">
            <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
            <div className="text-gray-400">Projects</div>
          </div>
          <div className="text-center bg-gray-800/30 rounded-lg p-6 border border-gray-700/30">
            <div className="text-3xl font-bold text-pink-400 mb-2">7+</div>
            <div className="text-gray-400">Technologies</div>
          </div>
          <div className="text-center bg-gray-800/30 rounded-lg p-6 border border-gray-700/30">
            <div className="text-3xl font-bold text-cyan-400 mb-2">4</div>
            <div className="text-gray-400">Years Learning</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
