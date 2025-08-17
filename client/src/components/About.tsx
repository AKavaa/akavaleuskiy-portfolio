export default function About() {
  const skills = [
    "Rust",
    "Systems Programming",
    "Web Assembly",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Docker",
  ];

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Driven by a passion for creating efficient, scalable solutions and exploring cutting-edge
            technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Modern office workspace with computer setup"
              className="rounded-2xl shadow-lg w-full h-auto border border-slate-700"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                With a strong foundation from the National Technical University of Athens, I've
                specialized in Rust programming and systems development. Currently contributing to
                innovative projects at Embark Studios, where I focus on building high-performance
                applications and exploring the intersection of technology and creativity.
              </p>
              <p className="text-slate-300 leading-relaxed">
                My approach combines technical excellence with creative problem-solving, always
                striving to deliver solutions that are both efficient and user-centered.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Core Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-700 transition-colors duration-200 border border-slate-700"
              >
                <i className="fas fa-download mr-2"></i>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}