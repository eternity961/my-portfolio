import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Shield, Brain, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'JavaScript', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'C++', level: 70 },
        { name: 'SQL', level: 85 },
        { name: 'HTML/CSS', level: 90 }
      ]
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: [
        { name: 'React', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 70 },
        { name: 'MongoDB', level: 75 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'REST APIs', level: 80 }
      ]
    },
    {
      title: 'Database Management',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'Database Design', level: 85 },
        { name: 'Data Modeling', level: 80 },
        { name: 'Query Optimization', level: 70 }
      ]
    },
    {
      title: 'Networking & Infrastructure',
      icon: Server,
      skills: [
        { name: 'Network Configuration', level: 80 },
        { name: 'TCP/IP Protocols', level: 85 },
        { name: 'Network Security', level: 75 },
        { name: 'Cisco Networking', level: 70 },
        { name: 'Network Troubleshooting', level: 80 },
        { name: 'Wireless Networks', level: 75 }
      ]
    },
    {
      title: 'System Analysis',
      icon: Brain,
      skills: [
        { name: 'System Design', level: 80 },
        { name: 'Requirements Analysis', level: 85 },
        { name: 'Process Modeling', level: 75 },
        { name: 'UML', level: 70 },
        { name: 'Business Analysis', level: 80 },
        { name: 'Project Management', level: 75 }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 80) return 'bg-emerald-500';
    if (level >= 70) return 'bg-blue-500';
    if (level >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`${getSkillColor(skill.level)} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Additional Competencies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Cybersecurity', desc: 'Security Best Practices' },
              { icon: Server, title: 'Cloud Services', desc: 'AWS, Azure Basics' },
              { icon: Smartphone, title: 'Mobile Dev', desc: 'React Native Basics' },
              { icon: Users, title: 'Team Collaboration', desc: 'Git, Agile Methods' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;