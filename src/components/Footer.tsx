const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-yellow-400/20">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-yellow-100/80 text-sm md:text-base">
              © {currentYear} Jaydeep Ramanuj. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/JaydeepRamanuj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-100/60 hover:text-yellow-300 transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/jaydeep-ramanuj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-100/60 hover:text-yellow-300 transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
