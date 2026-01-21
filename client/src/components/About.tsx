





About
import { useState } from "react";
import {
  SiCplusplus,
  SiSharp,
  SiJavascript,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiHtml5,
  SiCss3,
  SiFlutter,
  SiMysql,
  SiGit,
  SiDocker,
  SiDart,
  SiDotnet
} from 'react-icons/si';

export default function About() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    { name: "C++", icon: SiCplusplus, color: "text-blue-500", delay: "0s" },
    { name: "C#", icon: SiSharp, color: "text-purple-500", delay: "0.1s" },
    { name: ".NET", icon: SiDotnet, color: "text-indigo-500", delay: "0.1s" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", delay: "0.2s" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-600", delay: "0.3s" },
    { name: "PHP", icon: SiPhp, color: "text-purple-500", delay: "0.4s" },
    { name: "Python", icon: SiPython, color: "text-blue-600", delay: "0.5s" },
    { name: "HTML5", icon: SiHtml5, color: "text-orange-500", delay: "0.6s" },
    { name: "CSS3", icon: SiCss3, color: "text-blue-400", delay: "0.7s" },
    { name: "Flutter", icon: SiFlutter, color: "text-cyan-400", delay: "0.8s" },
    { name: "Dart", icon: SiDart, color: "text-cyan-400", delay: "0.8s" },
    { name: "SQL", icon: SiMysql, color: "text-blue-700", delay: "0.9s" },
    { name: "Git", icon: SiGit, color: "text-orange-600", delay: "1s" },
    { name: "Docker", icon: SiDocker, color: "text-blue-600", delay: "1s" },

  ];

  const highlights = [
    { label: "Years Coding", value: "3+", icon: "fas fa-code" },
    { label: "Projects", value: "10+", icon: "fas fa-layer-group" },
    { label: "Technologies", value: "10+", icon: "fas fa-laptop-code" },
    { label: "Internships", value: "2", icon: "fas fa-lightbulb" },
  ];

  const learning = ["Flutter", "Dart", "Docker", ".NET"];

  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden scroll-mt-24">
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
          <div className="space-y-6 animate-slide-in-left">
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800 rounded-2xl border border-slate-700 p-5 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-500/30 transform hover:scale-[1.02]"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-400">{item.label}</span>
                    <i className={`${item.icon} text-blue-400`}></i>
                  </div>
                  <div className="text-3xl font-bold text-white">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6">
              <h4 className="text-lg font-semibold text-white mb-3">Quick facts</h4>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start"><i className="fas fa-check-circle text-emerald-400 mr-3 mt-1"></i> Focused on clean architecture and readable, maintainable code</li>
                <li className="flex items-start"><i className="fas fa-check-circle text-emerald-400 mr-3 mt-1"></i> Comfortable across the stack: APIs, databases, and modern UIs</li>
                <li className="flex items-start"><i className="fas fa-check-circle text-emerald-400 mr-3 mt-1"></i> Enjoys solving algorithmic problems and building useful tools</li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6">
              <h4 className="text-lg font-semibold text-white mb-3">Currently learning</h4>
              <div className="flex flex-wrap gap-2">
                {learning.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium border border-blue-500/30 text-blue-300 bg-blue-500/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6 animate-slide-in-right">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>My Journey</h3>
              <p className="text-slate-300 leading-relaxed mb-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                As a Computer Science student at UCLan Cyprus, I’ve developed a strong passion for software engineering and problem-solving. My studies have provided me with a solid foundation in programming, data structures, and system design, enabling me to build efficient and maintainable software solutions.
              </p>
              <p className="text-slate-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                I’m particularly interested in full-stack web development, backend engineering, and database management. Through academic projects and hands-on experience, I’ve learned to design and implement responsive, user-focused applications while following best development practices. I’m continuously expanding my technical expertise and striving to contribute to impactful real-world projects in the tech industry.
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

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
