export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Embark Studios",
      location: "Stockholm, Sweden",
      period: "2022 - Present",
      current: true,
      description:
        "Leading development of high-performance gaming applications using Rust, focusing on systems-level programming and performance optimization. Collaborating with cross-functional teams to deliver innovative gaming experiences.",
      achievements: [
        "Improved application performance by 40% through Rust optimization",
        "Architected scalable backend systems handling millions of requests",
        "Mentored junior developers in Rust best practices",
      ],
    },
    {
      title: "Senior Developer",
      company: "Tech Innovations Ltd",
      location: "Athens, Greece",
      period: "2020 - 2022",
      current: false,
      description:
        "Developed and maintained large-scale web applications using modern technologies. Focused on creating efficient, maintainable code and implementing best practices across development teams.",
      achievements: [
        "Led migration from legacy systems to modern tech stack",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Established coding standards and review processes",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Experience</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Building innovative solutions and contributing to cutting-edge projects in the tech
            industry.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-slate-700"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
                  <p className="text-lg text-blue-400 font-semibold">{experience.company}</p>
                  <p className="text-slate-300">{experience.location}</p>
                </div>
                <div className="mt-4 lg:mt-0">
                  <span
                    className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                      experience.current
                        ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                        : "bg-slate-700 text-slate-300 border border-slate-600"
                    }`}
                  >
                    {experience.period}
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-slate-300 leading-relaxed">{experience.description}</p>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Key {experience.current ? "Achievements" : "Contributions"}:
                  </h4>
                  <ul className="space-y-2 text-slate-300">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <i className="fas fa-check-circle text-emerald-400 mr-3 mt-1"></i>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}