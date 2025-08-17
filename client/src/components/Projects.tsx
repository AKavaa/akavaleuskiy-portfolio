export default function Projects() {
  const projects = [
    {
      title: "Game Engine Core",
      description:
        "High-performance game engine built with Rust, featuring advanced rendering capabilities, physics simulation, and cross-platform compatibility. Optimized for AAA game development.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      imageAlt: "High-performance gaming engine interface with code and graphics",
      technologies: ["Rust", "OpenGL", "WebGPU"],
      techColors: ["orange", "blue", "green"],
      metrics: ["Performance: 120+ FPS", "Cross-platform"],
      githubUrl: "https://github.com",
      liveUrl: "#",
    },
    {
      title: "Analytics Platform",
      description:
        "Real-time analytics platform processing millions of events daily. Features interactive dashboards, custom reporting, and machine learning-powered insights for business intelligence.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      imageAlt: "Modern web application dashboard with analytics and data visualization",
      technologies: ["TypeScript", "React", "Node.js"],
      techColors: ["blue", "cyan", "green"],
      metrics: ["10M+ events/day", "Real-time processing"],
      githubUrl: "https://github.com",
      liveUrl: "#",
    },
    {
      title: "DeFi Protocol",
      description:
        "Decentralized finance protocol built on Ethereum, enabling secure lending and borrowing with smart contracts. Features automated market making and yield farming capabilities.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      imageAlt: "Blockchain technology interface with cryptocurrency and network visualization",
      technologies: ["Solidity", "Rust", "Web3"],
      techColors: ["purple", "orange", "blue"],
      metrics: ["$50M+ TVL", "Gas optimized"],
      githubUrl: "https://github.com",
      liveUrl: "#",
    },
    {
      title: "ML Pipeline",
      description:
        "High-performance machine learning pipeline for real-time inference. Built with Rust for maximum efficiency, supporting multiple model formats and auto-scaling capabilities.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      imageAlt: "AI machine learning system interface with neural networks and data processing",
      technologies: ["Rust", "TensorFlow", "Docker"],
      techColors: ["orange", "red", "gray"],
      metrics: ["Sub-ms latency", "Auto-scaling"],
      githubUrl: "https://github.com",
      liveUrl: "#",
    },
  ];

  const getColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      orange: "bg-orange-500/20 text-orange-300 border-orange-500/30",
      blue: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      green: "bg-green-500/20 text-green-300 border-green-500/30",
      cyan: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
      purple: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      red: "bg-red-500/20 text-red-300 border-red-500/30",
      gray: "bg-slate-500/20 text-slate-300 border-slate-500/30",
    };
    return colorMap[color] || "bg-slate-500/20 text-slate-300 border-slate-500/30";
  };

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A showcase of my recent work spanning systems programming, web development, and
            innovative applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-slate-700"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <div className="flex space-x-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      <i className="fab fa-github text-xl"></i>
                    </a>
                    <a
                      href={project.liveUrl}
                      className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      <i className="fas fa-external-link-alt text-xl"></i>
                    </a>
                  </div>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm font-medium border ${getColorClass(
                        project.techColors[techIndex]
                      )}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="border-t border-slate-700 pt-4">
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>{project.metrics[0]}</span>
                    <span>{project.metrics[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-slate-600 text-slate-300 font-medium rounded-lg hover:border-blue-600 hover:text-blue-400 transition-colors duration-200"
          >
            View All Projects
            <i className="fab fa-github ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}