








Projects
import { useState } from "react";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Dino Run Game",
      description:
        "A Python-based endless runner game built with Tkinter where a dinosaur jumps over cactuses to survive as long as possible. Features smooth gameplay mechanics and increasing difficulty levels.",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/5d/31/ea/5d31ea50-3d08-d13a-6861-31a313c506f6/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/1200x630wa.png",
      imageAlt: "Dinosaur game interface with jumping character and obstacles",
      technologies: ["Python", "Tkinter", "Game Development"],
      techColors: ["blue", "green", "purple"],
      metrics: ["Endless Runner", "Python Game"],
      githubUrl: "https://github.com/AKavaa/DinoRun-Game",
      liveUrl: "#",
    },
    {
      title: "UCLan Website",
      description:
        "A comprehensive web application built for UCLan featuring a complete e-commerce system with product management, shopping cart functionality, and modern responsive design.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      imageAlt: "Modern university website with e-commerce features",
      technologies: ["HTML", "CSS", "PHP", "JavaScript"],
      techColors: ["orange", "blue", "purple", "yellow"],
      metrics: ["E-commerce System", "Responsive Design"],
      githubUrl: "https://github.com/AKavaa/UCLan-Website",
      liveUrl: "#",
    },
    {
      title: "Spheres.io",
      description:
        "A single-player 3D C++ game where the player controls a sphere to collect cubes for points. Features magnetic attraction mechanics and growing sphere gameplay.",
      image: "https://img.freepik.com/premium-vector/ball-lightning-energy-power-electric-round-spheres-decent-vector-realistic-template-thunder-light_80590-22937.jpg",
      imageAlt: "3D sphere game with cube collection mechanics",
      technologies: ["C++", "3D Graphics", "Game Physics"],
      techColors: ["orange", "purple", "blue"],
      metrics: ["3D Game", "C++ Development"],
      githubUrl: "https://github.com/AKavaa/Spheres.io",
      liveUrl: "#",
    },
    {
      title: "Treasure Hunt App",
      description:
        "An immersive, team-built web application designed to guide users through a fun and interactive location-based treasure hunt experience with puzzle-solving elements.",
      image: "https://cdn.8thwall.com/apps/cover/2mj23ocmdp5bri1474c6zv6rqmrrtp891jwjp9lhy61txl8xf571ib07-preview-1200x630",
      imageAlt: "Interactive treasure hunt application interface",
      technologies: ["JavaScript", "Web Development", "Location Services"],
      techColors: ["yellow", "blue", "green"],
      metrics: ["Interactive App", "Location-based"],
      githubUrl: "https://github.com/AKavaa/TreasureHuntApp",
      liveUrl: "#",
    },
    {
      title: "Sudoku Solver",
      description:
        "An efficient C++ algorithm that solves Sudoku puzzles given by the user. Implements backtracking and constraint satisfaction techniques for optimal puzzle solving.",
      image: "https://images.contentstack.io/v3/assets/blt822c60c126c92e3a/blt5eafad84b9fc7361/64d291de4d5a8492f88d5b53/Sudoku_game_01_en_prev.jpg",
      imageAlt: "Sudoku puzzle solver algorithm interface",
      technologies: ["C++", "Algorithms", "Backtracking"],
      techColors: ["blue", "purple", "green"],
      metrics: ["Algorithm Implementation", "C++"],
      githubUrl: "https://github.com/AKavaa/SudokuSolver",
      liveUrl: "#",
    },
    {
      title: "Web Technologies Assignment",
      description:
        "Advanced web development project showcasing modern web technologies with comprehensive features including user authentication, database management, and responsive design.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      imageAlt: "Modern web application with advanced features",
      technologies: ["PHP", "MySQL", "HTML", "CSS"],
      techColors: ["purple", "blue", "orange", "blue"],
      metrics: ["Full-stack Development", "Database Design"],
      githubUrl: "https://github.com/AKavaa/Web-Technologies--Assignment-2",
      liveUrl: "#",
    },
    {
      title: "Code-Quest Mobile Application",
      description:
        "Algorithmic Quest is an interactive platform designed to help learners strengthen their problem-solving and algorithmic thinking abilities through coding challenges — but with a twist: each challenge is presented as part of a game-like journey where logic, creativity, and efficiency determine your progress.",
      image: "/Code-Quest.JPG",
      imageAlt: "Modern mobile application with advanced features",
      technologies: ["HTML", "CSS", "JavaScript"],
      techColors: ["green", "blue", "purple"],
      metrics: ["Full-stack Development", "Mobile Application"],
      githubUrl: "https://github.com/AKavaa/Code-Quest",
      liveUrl: "#",
    },
    {
      title: "Smart Campus CLI Application",
      description:
        "A C++ object-oriented programming demonstration implementing a smart home device management system using inheritance and polymorphism.",
      image: "https://qnextech.com/wp-content/uploads/2023/01/jh-18.png",
      imageAlt: "Modern mobile application with advanced features",
      technologies: ["C++"],
      techColors: ["green"],
      metrics: ["Software Development", "CLI Application"],
      githubUrl: "https://github.com/AKavaa/Code-Quest",
      liveUrl: "#",
    },
    {
      title: "Orbit Track Mobile Application",
      description:
        "OrbitTrack A Flutter mobile app for real-time satellite tracking using NASA's TLE API. Features an intuitive dark-themed interface that transforms complex orbital data into accessible visualizations. Built with HCI principles for seamless navigation and excellent user experience.",
      image: "https://blog.neuraspace.com/hs-fs/hubfs/Blog_LinkedIn_Neura%20(12)-2.png?width=804&height=420&name=Blog_LinkedIn_Neura%20(12)-2.png",
      imageAlt: "Modern mobile application with advanced tracking features",
      technologies: ["Dart", "FLutter"],
      techColors: ["green", "blue"],
      metrics: ["Software Development", "Mobile Application"],
      githubUrl: "https://github.com/AKavaa/Code-Quest",
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
      yellow: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    };
    return colorMap[color] || "bg-slate-500/20 text-slate-300 border-slate-500/30";
  };

  return (
    <section id="projects" className="py-20 bg-slate-900 relative overflow-hidden scroll-mt-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-24 h-24 bg-blue-500/5 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 right-32 w-20 h-20 bg-emerald-500/5 rounded-lg animate-float-fast" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-purple-500/5 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-cyan-500/5 rounded-lg animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-yellow-500/5 rounded-full animate-float-slow" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 animate-fade-in-up">Featured Projects</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            A showcase of my academic and personal projects spanning game development, web applications,
            and algorithmic problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-slate-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 transform group border border-slate-700 animate-fade-in-up`}
              style={{
                animationDelay: `${index * 0.1}s`,
                transform: hoveredProject === index ? 'scale(1.05) rotateY(5deg)' : 'scale(1) rotateY(0deg)'
              }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent group-hover:from-slate-900/60 group-hover:via-slate-900/20 transition-all duration-500"></div>

                {/* Floating tech badges */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  {project.technologies.slice(0, 2).map((tech, techIndex) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded-full text-xs font-medium border opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 ${getColorClass(project.techColors[techIndex])}`}
                      style={{ transitionDelay: `${techIndex * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                  <div className="flex space-x-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                    >
                      <i className="fab fa-github text-lg group-hover:animate-bounce"></i>
                    </a>
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                      >
                        <i className="fas fa-external-link-alt text-lg group-hover:animate-bounce"></i>
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-slate-300 mb-4 leading-relaxed text-sm group-hover:text-slate-200 transition-colors duration-300">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded-full text-xs font-medium border transition-all duration-300 transform hover:scale-105 hover:rotate-1 ${getColorClass(project.techColors[techIndex])}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="border-t border-slate-700 pt-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="group-hover:text-emerald-400 transition-colors duration-300">{project.metrics[0]}</span>
                    <span className="group-hover:text-blue-400 transition-colors duration-300">{project.metrics[1]}</span>
                  </div>
                </div>
              </div>

              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <a
            href="https://github.com/AKavaa"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center px-6 py-3 border-2 border-slate-600 text-slate-300 font-medium rounded-lg hover:border-blue-600 hover:text-blue-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            View All Projects on GitHub
            <i className="fab fa-github ml-2 group-hover:animate-bounce"></i>
            <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-200"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

