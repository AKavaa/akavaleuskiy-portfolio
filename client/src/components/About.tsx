import { useState } from "react";
import { 
  SiCplusplus, 
  SiMongodb, 
  SiJavascript, 
  SiNodedotjs, 
  SiPhp, 
  SiPython, 
  SiHtml5, 
  SiCss3, 
  SiReact, 
  SiMysql, 
  SiGit 
} from 'react-icons/si';

export default function About() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    { name: "C++", icon: SiCplusplus, color: "text-blue-500", delay: "0s" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500", delay: "0.1s" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", delay: "0.2s" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-600", delay: "0.3s" },
    { name: "PHP", icon: SiPhp, color: "text-purple-500", delay: "0.4s" },
    { name: "Python", icon: SiPython, color: "text-blue-600", delay: "0.5s" },
    { name: "HTML5", icon: SiHtml5, color: "text-orange-500", delay: "0.6s" },
    { name: "CSS3", icon: SiCss3, color: "text-blue-400", delay: "0.7s" },
    { name: "React", icon: SiReact, color: "text-cyan-400", delay: "0.8s" },
    { name: "SQL", icon: SiMysql, color: "text-blue-700", delay: "0.9s" },
    { name: "Git", icon: SiGit, color: "text-orange-600", delay: "1s" },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/5 rounded-full animate-float-slow"></div>
        <div className="absolute top-32 right-16 w-16 h-16 bg-emerald-500/5 rounded-lg animate-float-fast" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-500/5 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-cyan-500/5 rounded-lg animate-spin-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 animate-fade-in-up">About Me</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            A passionate software engineering student with a strong foundation in both backend and frontend development, 
            eager to contribute to innovative projects and continue learning cutting-edge technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-2xl transform rotate-3 opacity-20 group-hover:opacity-40 transition-all duration-500 animate-pulse"></div>
              <img
                src="/profile-aleksander.jpg"
                alt="Aleksander Kavaleuskiy - Software Engineering Student"
                className="relative rounded-2xl shadow-lg w-full h-auto border border-slate-700 group-hover:scale-105 group-hover:shadow-blue-500/25 transition-all duration-500"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          <div className="space-y-6 animate-slide-in-right">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>My Journey</h3>
              <p className="text-slate-300 leading-relaxed mb-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                Currently pursuing a Computer Science degree at UCLan Cyprus, I've developed a strong passion for 
                software development and problem-solving. My journey began at Pascal English School where I gained 
                a solid foundation in ICT and mathematics, developing critical thinking and problem-solving skills 
                that have been invaluable in my software engineering pursuits.
              </p>
              <p className="text-slate-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                I'm particularly interested in web development, database management, and creating efficient, 
                user-friendly applications. My experience includes both academic projects and practical 
                internships, where I've gained hands-on experience with enterprise-level IT operations and 
                software development workflows.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-3 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>Technical Skills</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center space-x-2 px-3 py-2 bg-slate-800 rounded-lg border border-slate-700 transition-all duration-300 transform hover:scale-105 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/25 cursor-pointer group animate-fade-in-up`}
                    style={{ 
                      animationDelay: skill.delay,
                      transform: hoveredSkill === skill.name ? 'scale(1.05) rotate(2deg)' : 'scale(1) rotate(0deg)'
                    }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <skill.icon className={`text-xl ${skill.color} group-hover:animate-bounce transition-all duration-300`} />
                    <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors duration-300">{skill.name}</span>
                    {hoveredSkill === skill.name && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg animate-pulse"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-700 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 border border-slate-700 hover:border-blue-500 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <i className="fas fa-download mr-2 group-hover:animate-bounce"></i>
                Download Resume
                <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-200"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}