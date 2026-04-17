const Experience = () => {
  return (
    <section id="experience" className="py-20 relative bg-gray-900/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-cyan-400/30 pl-8 ml-4">
            {/* Internship Entry */}
            <div className="mb-12 relative group">
              <div className="absolute -left-[41px] top-0 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900 group-hover:scale-125 transition-transform"></div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 shadow-xl">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-2xl font-bold text-white">Developer Intern</h3>
                  <span className="text-cyan-400 font-medium">Feb 2026 — May 2026</span>
                </div>
                <h4 className="text-lg text-purple-400 mb-6 font-semibold">iNoble Infoway Solutions, Coimbatore</h4>
                
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">▹</span>
                    <p><strong className="text-white">Full-Stack Development:</strong> Architected scalable REST APIs using Spring Boot and Node.js/Express, managing environment-specific configurations via Dotenv.</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">▹</span>
                    <p><strong className="text-white">Security Architecture:</strong> Integrated Keycloak, OAuth2, and JWT to implement robust Role-Based Access Control (RBAC) across resource servers.</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">▹</span>
                    <p><strong className="text-white">Database Optimization:</strong> Managed complex relational data through JPA/Hibernate and Sequelize ORM, implementing Associations (1:M, M:M) and optimized Pagination/Sorting.</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">▹</span>
                    <p><strong className="text-white">UI Excellence:</strong> Built high-performance, responsive e-commerce interfaces using React.js, Vite, and advanced React Hooks.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience