export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 Aleksander Kavaleuskiy. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/aleksander-kavaleuskiy-8b2682349/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="https://github.com/AKavaa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="mailto:alex.kavaleuskiy98@gmail.com"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}