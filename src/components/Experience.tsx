import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, Book, Users, Code } from 'lucide-react';

const Experience = () => {
  const timelineItems = [
    {
      year: '2021 - June 2025',
      title: 'BSc in Information Systems',
      organization: 'Bahir Dar University',
      location: 'Bahir Dar, Ethiopia',
      type: 'education',
      description: 'Completed Bachelor of Science in Information Systems with focus on software development, database management, and system analysis.',
      highlights: [
        'Relevant coursework: Data Structures, Database Systems, Software Engineering',
        'Strong foundation in programming and system design',
        'Graduated: June 19, 2025'
      ]
    },
    {
      year: '2023 - Present',
      title: 'Self-Directed Learning',
      organization: 'Personal Development',
      location: 'Remote',
      type: 'development',
      description: 'Continuously expanding technical skills through online courses, personal projects, and hands-on practice.',
      highlights: [
        'Completed multiple online courses in web development',
        'Built several personal projects using modern tech stack',
        'Active participation in coding communities'
      ]
    },
    {
      year: '2022 - 2023',
      title: 'Academic Projects',
      organization: 'University Projects',
      location: 'Bahir Dar University',
      type: 'project',
      description: 'Led and contributed to various academic projects focusing on real-world problem solving.',
      highlights: [
        'Developed database management system for local business',
        'Created web application for student management',
        'Collaborated with teams on system analysis projects'
      ]
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'education':
        return GraduationCap;
      case 'development':
        return Code;
      case 'project':
        return Users;
      default:
        return Book;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'bg-blue-500';
      case 'development':
        return 'bg-emerald-500';
      case 'project':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Education & Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey and professional development path
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-300"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 ${getTypeColor(item.type)} rounded-full flex items-center justify-center`}>
                  {React.createElement(getIcon(item.type), { className: "w-4 h-4 text-white" })}
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-1/2 md:pr-8' : 'md:ml-1/2 md:pl-8'}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-500 mb-2 sm:mb-0">
                        <Calendar className="w-4 h-4 mr-2" />
                        {item.year}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-2" />
                        {item.location}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-blue-600 font-medium mb-4">{item.organization}</p>
                    <p className="text-gray-600 mb-6">{item.description}</p>

                    <div className="space-y-2">
                      {item.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-sm text-gray-600">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Achievements & Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Academic Excellence',
                description: 'Maintaining strong GPA throughout university studies',
                icon: Award,
                color: 'bg-yellow-500'
              },
              {
                title: 'Self-Directed Learning',
                description: 'Completed multiple online courses in web development',
                icon: Book,
                color: 'bg-blue-500'
              },
              {
                title: 'Project Leadership',
                description: 'Led multiple academic projects with successful outcomes',
                icon: Users,
                color: 'bg-emerald-500'
              }
            ].map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className={`w-12 h-12 ${achievement.color} rounded-xl flex items-center justify-center mb-4`}>
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;