import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, MapPin, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Option 1: Use Formspree (Recommended)
    fetch('https://formspree.io/f/xzzgloea', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        _replyto: formData.email,
      }),
    })
    .then(response => {
      if (response.ok) {
        setFormStatus('sent');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset status after 3 seconds
        setTimeout(() => {
          setFormStatus('idle');
        }, 3000);
      } else {
        throw new Error('Form submission failed');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      setFormStatus('error');
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'mikaelelias100@gmail.com',
      link: 'mailto:mikaelelias100@gmail.com?subject=Portfolio%20Contact&body=Hello%20Mikael,',
      color: 'bg-blue-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+251 92 588 9131',
      link: 'tel:+251925889131',
      color: 'bg-emerald-500'
    },
    {
      icon: MessageCircle,
      title: 'Telegram',
      value: '@M11kaa',
      link: 'https://t.me/M11kaa',
      color: 'bg-blue-600'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Addis Ababa, Ethiopia',
      link: '',
      color: 'bg-red-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, projects, or just having a friendly chat about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Let's Connect
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center flex-shrink-0 mr-4`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-emerald-500 mr-3" />
                <h4 className="font-semibold text-gray-900">Current Status</h4>
              </div>
              <p className="text-gray-600 mb-4">
                I'm currently available for full-time positions, freelance projects, and collaborations.
                Response time is typically within 24 hours.
              </p>
              <div className="flex items-center text-sm text-emerald-600">
                <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                Available for opportunities
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send a Message
              </h3>

              {formStatus === 'sent' && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <div className="flex items-center text-emerald-700">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Message sent successfully! I'll get back to you soon.
                  </div>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center text-red-700">
                    <span className="mr-2">❌</span>
                    Failed to send message. Please try again or contact me directly.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {formStatus === 'sending' ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {/* Alternative Contact Methods */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center mb-4">
                  Or contact me directly:
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="mailto:mikaelelias100@gmail.com?subject=Portfolio%20Contact&body=Hello%20Mikael,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20discuss..."
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Directly
                  </a>
                  <a
                    href="https://t.me/M11kaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Telegram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;