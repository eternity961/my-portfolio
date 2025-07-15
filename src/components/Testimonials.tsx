import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, FileText, Download } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showLetterModal, setShowLetterModal] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const testimonials = [
    {
      name: 'Lec. Tesfahun Nurrie',
      role: 'Professor, Internet Programming',
      company: 'Bahir Dar University',
      
      text: 'Mikael consistently demonstrates exceptional analytical skills and dedication to his studies. His ability to understand complex web technologies and propose innovative solutions is remarkable.',
      rating: 5,
      letterImage: '/recommendation-letters/tesfahun nurrie internet programming.jpg',
      subject: 'Internet Programming'
    },
    {
      name: 'Lec. Sertse Abebe',
      role: 'Professor, Artificial Intelligence',
      company: 'Bahir Dar University',
  
      text: 'Mikael showed exceptional understanding of AI concepts and machine learning algorithms. His projects demonstrated creativity and deep technical knowledge.',
      rating: 5,
      letterImage: '/recommendation-letters/sertse abebe fundametals of ai.jpg',
      subject: 'Artificial Intelligence'
    },
    {
      name: 'Lec. Yohannes Abinet',
      role: 'Professor, Information Assurance and Security',
      company: 'Bahir Dar University',
      
      text: 'Mikael demonstrated excellent understanding of information security principles and system analysis. His approach to problem-solving is methodical and innovative.',
      rating: 5,
      letterImage: '/recommendation-letters/yohannes abinet ias.jpg',
      subject: 'Information Systems and Security'
    },
    {
      name: 'Lec. Addisu Zeleke',
      role: 'Professor, Data Structures',
      company: 'Bahir Dar University',
      text: 'Mikael\'s grasp of data structures and algorithms is exceptional. His implementation skills and ability to optimize code efficiency consistently impressed me.',
      rating: 5,
      letterImage: '/recommendation-letters/addisuzelekedsa.jpg',
      subject: 'Data Structures'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const openLetterModal = (letterImage: string) => {
    setSelectedLetter(letterImage);
    setShowLetterModal(true);
  };

  const closeLetterModal = () => {
    setShowLetterModal(false);
    setSelectedLetter(null);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Recommendations & Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recommendation letters and testimonials from professors who have worked with me
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-blue-200">
              <Quote className="w-12 h-12" />
            </div>

            {/* Testimonial Content */}
            <div className="text-center relative z-10">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-blue-600 text-sm">
                    {testimonials[currentTestimonial].company}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    Subject: {testimonials[currentTestimonial].subject}
                  </p>
                </div>
              </div>

              {/* View Recommendation Letter Button */}
              <div className="mt-6">
                <button
                  onClick={() => openLetterModal(testimonials[currentTestimonial].letterImage)}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  View Recommendation Letter
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300 -ml-6"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300 -mr-6"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Preview */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`bg-white p-6 rounded-xl shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg ${
                index === currentTestimonial ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className="flex items-center mb-4">
                
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-xs">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm line-clamp-3">
                "{testimonial.text.substring(0, 100)}..."
              </p>
              <div className="mt-3">
                <button
                  onClick={() => openLetterModal(testimonial.letterImage)}
                  className="text-blue-600 hover:text-blue-800 text-xs flex items-center"
                >
                  <FileText className="w-3 h-3 mr-1" />
                  View Letter
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Recommendation Letter Modal */}
        {showLetterModal && selectedLetter && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden">
              <div className="flex justify-between items-center p-6 border-b">
                <h3 className="text-xl font-bold text-gray-900">Recommendation Letter</h3>
                <div className="flex space-x-2">
                  <a
                    href={selectedLetter}
                    download
                    className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    title="Download Letter"
                  >
                    <Download className="w-5 h-5" />
                  </a>
                  <button
                    onClick={closeLetterModal}
                    className="p-2 text-gray-600 hover:text-red-600 transition-colors duration-300"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <div className="p-6 overflow-auto max-h-[70vh]">
                <img
                  src={selectedLetter}
                  alt="Recommendation Letter"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default Testimonials;