import React from 'react';
import { ChevronDown, Mail, Phone, MessageCircle, Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-emerald-200">
                Mikael Elias
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed">
              Information Systems Graduate & Software Developer
            </p>
            
            <p className="text-lg text-blue-200 mb-8 max-w-2xl">
              Passionate about leveraging technology to solve real-world problems. 
              Recent BSc graduate in Information Systems from Bahir Dar University (June 2025). 
              Ready to contribute to innovative projects and grow in the tech industry.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              
              <a
                href="mikael_elias_cv.pdf"
                download="Mikael_Elias_Resume.pdf"
                className="inline-flex items-center px-8 py-3 bg-white/20 text-white font-medium rounded-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </div>

            {/* Contact Info */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <a
                href="mailto:mikaelelias100@gmail.com?subject=Portfolio%20Contact&body=Hello%20Mikael,"
                className="flex items-center text-blue-200 hover:text-white transition-colors duration-300"
              >
                <Mail className="w-5 h-5 mr-3" />
                mikaelelias100@gmail.com
              </a>
              
              <a
                href="tel:+251925889131"
                className="flex items-center text-blue-200 hover:text-white transition-colors duration-300"
              >
                <Phone className="w-5 h-5 mr-3" />
                +251 92 588 9131
              </a>
              
              <a
                href="https://t.me/M11kaa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-200 hover:text-white transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                @M11kaa
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="mt-12 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img
                src="now.jpg"
                alt="Mikael Elias - Professional Profile"
                className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl ring-4 ring-white/20"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors duration-300 animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;