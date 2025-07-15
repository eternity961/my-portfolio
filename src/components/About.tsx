import React from 'react';
import { GraduationCap, MapPin, Calendar, Award, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A dedicated Information Systems graduate with a passion for technology and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Quick Facts */}
          <div>
            <div className="relative mb-8">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Mikael Elias - About"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex items-center mb-3">
                  <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="font-semibold text-gray-900">Education</h3>
                </div>
                <p className="text-gray-600">BSc in Information Systems</p>
                <p className="text-sm text-gray-500">Bahir Dar University</p>
                <p className="text-sm text-gray-500">Graduated June 2025</p>
              </div>

              <div className="bg-emerald-50 p-6 rounded-xl">
                <div className="flex items-center mb-3">
                  <MapPin className="w-6 h-6 text-emerald-600 mr-3" />
                  <h3 className="font-semibold text-gray-900">Location</h3>
                </div>
                <p className="text-gray-600">Addis Ababa, Ethiopia</p>
                <p className="text-sm text-gray-500">Available for remote work</p>
              </div>
            </div>
          </div>

          {/* Right Column - About Content */}
          <div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  My Story
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  I'm a passionate Information Systems graduate from Bahir Dar University, 
                  graduated in June 2025. My journey in technology began with a curiosity 
                  about how systems work and evolved into a deep passion for creating 
                  innovative solutions that make a difference.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">What Drives Me</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Target className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Problem Solving</p>
                      <p className="text-sm text-gray-600">I love tackling complex challenges and finding elegant solutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Award className="w-5 h-5 text-emerald-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Continuous Learning</p>
                      <p className="text-sm text-gray-600">Always eager to learn new technologies and methodologies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Heart className="w-5 h-5 text-red-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Making Impact</p>
                      <p className="text-sm text-gray-600">Committed to using technology to create positive change</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Current Focus</h4>
                <p className="text-gray-600">
                  As a recent graduate, I'm actively seeking opportunities to apply 
                  my knowledge in real-world projects. I'm particularly interested in 
                  software development, system analysis, and emerging technologies that 
                  can drive business innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;