import React from 'react';
import { Heart, ArrowUp, Mail, Phone, MessageCircle, Github } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Mikael Elias</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Information Systems graduate from Bahir Dar University, passionate about technology 
              and innovation. Ready to contribute to meaningful projects and grow in the tech industry.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:mikaelelias100@gmail.com?subject=Portfolio%20Contact&body=Hello%20Mikael,"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+251925889131"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/M11kaa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/eternity961"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-gray-400" />
                <span className="text-gray-300 text-sm">mikaelelias100@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-gray-400" />
                <span className="text-gray-300 text-sm">+251 92 588 9131</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-3 text-gray-400" />
                <span className="text-gray-300 text-sm">@M11kaa</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-gray-300">
                © {currentYear} Mikael Elias Portfolio 
              </span> 
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="/resume.pdf"
                download="Mikael_Elias_Resume.pdf"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Download Resume
              </a>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;