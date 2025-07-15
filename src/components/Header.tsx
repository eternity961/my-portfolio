import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Mail, Phone, MessageCircle, Github } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Mikael Elias
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['About', 'Skills', 'Experience', 'Projects', 'Testimonials', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-colors duration-300 hover:text-blue-600 ${
                  isScrolled ? 'text-gray-600' : 'text-white/90'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Contact Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/eternity961"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-600 hover:text-blue-600' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="/mikael_elias_cv.pdf"
              download="Mikael_Elias_Resume.pdf"
              className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-gray-600' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-lg">
            <nav className="flex flex-col space-y-4">
              {['About', 'Skills', 'Experience', 'Projects', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="/mikael_elias_cv.pdf"
                  download="Mikael_Elias_Resume.pdf"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;