export default function Hero() {
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
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 to-slate-950 pt-16"
    >
      {/* Abstract tech background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full opacity-50 animate-float"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-emerald-500/10 rounded-lg opacity-40 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 border border-slate-700 opacity-30 rotate-45"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600/5 to-transparent rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-4">
                Software Engineer
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Hi, I'm <span className="text-blue-400">Zenios</span>
                <br />
                <span className="text-slate-300">Zeniou</span>
              </h1>
            </div>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Passionate software engineer specializing in Rust programming and modern web
              technologies. Currently building innovative solutions at Embark Studios in Stockholm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleNavClick("#projects")}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 group"
              >
                View My Work
                <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-200"></i>
              </button>
              <button
                onClick={() => handleNavClick("#contact")}
                className="inline-flex items-center px-6 py-3 border-2 border-slate-600 text-slate-300 font-medium rounded-lg hover:border-blue-600 hover:text-blue-400 transition-colors duration-200"
              >
                Get In Touch
              </button>
            </div>
            <div className="mt-8 flex items-center space-x-6">
              <a
                href="https://linkedin.com/in/zenios-zeniou-96a57a11b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a
                href="mailto:zenios@example.com"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                <i className="fas fa-envelope text-2xl"></i>
              </a>
            </div>
          </div>
          <div
            className="lg:flex justify-center animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl transform rotate-6 opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600"
                alt="Professional headshot of Zenios Zeniou"
                className="relative rounded-2xl shadow-2xl w-80 h-80 object-cover border border-slate-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}