


Experience
export default function Experience() {
  const experiences = [
    {
      title: "IT Intern",
      company: "UCLan Cyprus",
      location: "Cyprus",
      period: "May 2024 - August 2024",
      current: false,
      description:
        "Provided technical support and troubleshooting for faculty and staff computer systems. Assisted with network infrastructure maintenance and software installations.",
      achievements: [
        "Supported IT department with hardware setup, software configuration, and system updates",
        "Collaborated with IT team on various technical projects and system improvements",
        "Gained hands-on experience with enterprise-level IT operations and support procedures",
      ],
    },
    {
      title: "University Projects",
      company: "UCLan Cyprus",
      location: "Cyprus",
      period: "2022 - Present",
      current: true,
      description:
        "Various software development projects as part of university coursework, focusing on web development, database management, and object-oriented programming.",
      achievements: [
        "Web Development Projects - Building responsive and interactive web applications",
        "Database Management Systems - Designing and implementing efficient database solutions",
        "Object-Oriented Programming Projects - Creating modular and maintainable code",
        "Algorithm Implementation - Solving complex problems with optimized algorithms",
      ],
    },
  ];

  const education = [
    {
      title: "Bachelor of Computer Science",
      institution: "UCLan Cyprus",
      location: "Cyprus",
      period: "2022 - Present",
      current: true,
      description: "Currently pursuing a degree in Computer Science with focus on software engineering, web development, and database management.",
    },
    {
      title: "High School Diploma",
      institution: "Pascal English School",
      location: "Cyprus",
      period: "2016 - 2022",
      current: false,
      description: "Gained a strong foundation in ICT and mathematics, developing critical thinking, problem-solving skills, and technical knowledge. This education provided a solid base for pursuing software engineering, enabling me to tackle coding projects, understand algorithms, and apply logical solutions effectively.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Experience & Education</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            My professional journey and academic background in software engineering and computer science.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Work Experience</h3>
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
                      className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${experience.current
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

        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Education</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-slate-900 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-slate-700"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.title}</h3>
                    <p className="text-lg text-emerald-400 font-semibold">{edu.institution}</p>
                    <p className="text-slate-300">{edu.location}</p>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <span
                      className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${edu.current
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        : "bg-slate-700 text-slate-300 border border-slate-600"
                        }`}
                    >
                      {edu.period}
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


