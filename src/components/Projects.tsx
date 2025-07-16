import React from 'react';
import { ExternalLink, Github, Code, Database, Globe, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Complaint Management System for Ethio Electric',
      description: 'A comprehensive web application for managing customer complaints and service requests for Ethiopian Electric Utility with role-based access control and real-time tracking.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      features: [
        'Customer complaint tracking system',
        'Real-time status updates',
        'Admin dashboard for complaint management',
        'Responsive design'
      ],
      github: '#',
      demo: '#',
      category: 'Web Development'
    },
    {
      title: 'Art Gallery with Social Media Features',
      description: 'A modern art gallery platform with comprehensive social media features including user interactions, artwork sharing, and community engagement.',
      image: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      features: [
        'Artwork upload and gallery management',
        'Social media features (likes, comments, shares)',
        'Real-time notifications',
        'User profiles and following system'
      ],
      github: '#',
      demo: '#',
      category: 'Database'
    },
    {
      title: 'Library Management System',
      description: 'Desktop application for managing library operations including book tracking, member management, and lending operations.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['Java', 'JavaFX', 'SQLite', 'JDBC'],
      features: [
        'Book catalog management',
        'Member registration system',
        'Loan tracking and returns',
        'Search and filter functionality'
      ],
      github: '#',
      demo: '#',
      category: 'Desktop Application'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Modern, responsive portfolio website showcasing projects, skills, and professional information with smooth animations.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      features: [
        'Responsive design',
        'Smooth animations',
        'Contact form integration',
        'SEO optimization'
      ],
      github: '#',
      demo: '#',
      category: 'Web Development'
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web Development':
        return Globe;
      case 'Database':
        return Database;
      case 'Desktop Application':
        return Code;
      default:
        return Smartphone;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Web Development':
        return 'bg-blue-500';
      case 'Database':
        return 'bg-emerald-500';
      case 'Desktop Application':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my academic and personal projects demonstrating technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className={`${getCategoryColor(project.category)} text-white px-3 py-1 rounded-full text-sm font-medium flex items-center`}>
                    {React.createElement(getCategoryIcon(project.category), { className: "w-4 h-4 mr-1" })}
                    {project.category}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Links */}
                <div className="flex space-x-4"> 
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to see more of my work?
            </h3>
            <p className="text-gray-600 mb-6">
              I'm always working on new projects and learning new technologies. 
              Feel free to reach out to discuss my current work or future collaborations.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;