



Hero
import { useState, useEffect } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 pt-16 overflow-hidden scroll-mt-24"
    >
      {/* Enhanced floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full opacity-50 animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        ></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-emerald-500/10 rounded-lg opacity-40 animate-float"
          style={{
            animationDelay: "1s",
            transform: `translate(${mousePosition.x * -0.008}px, ${mousePosition.y * -0.008}px)`,
          }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-40 h-40 border border-slate-700 opacity-30 rotate-45 animate-spin-slow"
          style={{
            transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px) rotate(45deg)`,
          }}
        ></div>
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600/5 to-transparent rounded-full animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -0.003}px, ${mousePosition.y * -0.003}px)`,
          }}
        ></div>

        {/* New floating elements */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-purple-500/10 rounded-full opacity-30 animate-bounce" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-cyan-500/10 rounded-lg opacity-40 animate-pulse" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute top-3/4 left-1/2 w-12 h-12 bg-yellow-500/10 rounded-full opacity-50 animate-spin" style={{ animationDuration: "8s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-4 animate-fade-in-up">
                Software Engineering Student
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Hi, I'm <span className="text-blue-400 animate-pulse">Aleksander</span>
                <br />
                <span className="text-slate-300 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>Kavaleuskiy</span>
              </h1>
            </div>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              Software Engineering Student | Passionate Developer
              <br />
              Highly motivated software engineering student eager to apply skills in real-world projects.
              Passionate about backend/frontend development, security, and web technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              <button
                onClick={() => handleNavClick("#projects")}
                className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <span className="relative z-10">View My Work</span>
                <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-200"></i>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => handleNavClick("#contact")}
                className="group inline-flex items-center px-6 py-3 border-2 border-slate-600 text-slate-300 font-medium rounded-lg hover:border-blue-600 hover:text-blue-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Get In Touch
                <i className="fas fa-paper-plane ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"></i>
              </button>
            </div>
            <div className="mt-8 flex items-center space-x-6 animate-fade-in-up" style={{ animationDelay: "1s" }}>
              <a
                href="https://www.linkedin.com/in/aleksander-kavaleuskiy-8b2682349/"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <i className="fab fa-linkedin text-2xl group-hover:animate-bounce"></i>
              </a>
              <a
                href="https://github.com/AKavaa"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <i className="fab fa-github text-2xl group-hover:animate-bounce"></i>
              </a>
              <a
                href="mailto:alex.kavaleuskiy98@gmail.com"
                className="group text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <i className="fas fa-envelope text-2xl group-hover:animate-bounce"></i>
              </a>
            </div>
          </div>
          <div
            className="lg:flex justify-center animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-2xl transform rotate-6 opacity-20 group-hover:opacity-40 transition-all duration-500 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl transform -rotate-3 opacity-10 group-hover:opacity-30 transition-all duration-500 animate-pulse" style={{ animationDelay: "1s" }}></div>
              <img
                src="/profile-aleksander.jpg"
                alt="Professional headshot of Aleksander Kavaleuskiy"
                className="relative rounded-2xl shadow-2xl w-80 h-80 object-cover object-[center_35%] border border-slate-700 group-hover:scale-105 group-hover:shadow-blue-500/25 transition-all duration-500 transform hover:rotate-1"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
