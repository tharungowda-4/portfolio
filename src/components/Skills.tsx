import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 80, color: "from-orange-400 to-red-400" },
       
        { name: "HTML/CSS", level: 70, color: "from-pink-400 to-red-400" },
        { name: "JavaScript", level:60, color: "from-yellow-400 to-orange-400" },
        { name: "PHP", level: 50, color: "from-purple-400 to-indigo-400" },
        { name: "Python", level: 45, color: "from-green-400 to-yellow-400" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Spring Boot", level: 70, color: "from-green-400 to-emerald-400" },
        { name: "React.js", level: 50, color: "from-cyan-400 to-blue-400" }
        
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MySQL", level: 80, color: "from-blue-400 to-cyan-400" },
        { name: "MongoDB", level: 50, color: "from-orange-400 to-red-400" },
        { name: "VS Code", level: 90, color: "from-blue-400 to-purple-400" },
        { name: "Git", level: 85, color: "from-orange-400 to-yellow-400" }
      ]
    },
    {
      title: "Currently Learning",
      skills: [
        { name: "Node.js", level: 50, color: "from-green-400 to-lime-400" },
        { name: "MongoDB", level: 45, color: "from-green-400 to-emerald-400" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here's my technical skill set that I've developed through projects, coursework, and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-cyan-400 mb-6">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Tech Stack Badges
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center text-purple-400 mb-8">Tech Stack Overview</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Java', 'Spring Boot', 'JavaScript', 'React.js', 'MySQL', 'Git', 'Postman', 'HTML/CSS', 'C++', 'Python'].map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-full border border-gray-600/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/20 cursor-pointer"
              >
                <span className="text-gray-300 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
