import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  User, 
  AtSign,
  ChevronRight,
  HeadphonesIcon,
  HelpCircle,
  FileText
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Handle input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }

  // Simple validation function
  function validate() {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        console.log('Form Data:', formData);
        alert('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      }, 1500);
    }
  }

  const contactOptions = [
    {
      title: 'Our Office',
      detail: 'Casablanca Finance City, Casablanca, Morocco',
      icon: <MapPin size={24} />,
      color: 'bg-red-50 text-red-600'
    },
    {
      title: 'Phone Number',
      detail: '+212 600 123 456',
      icon: <Phone size={24} />,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'Email Address',
      detail: 'contact@rentcars.ma',
      icon: <Mail size={24} />,
      color: 'bg-green-50 text-green-600'
    },
    {
      title: 'Working Hours',
      detail: 'Mon - Fri: 9:00 AM - 6:00 PM',
      icon: <Clock size={24} />,
      color: 'bg-yellow-50 text-yellow-600'
    }
  ];

  const helpTopics = [
    { title: 'Booking Support', icon: <ChevronRight size={16} /> },
    { title: 'Billing Inquiries', icon: <ChevronRight size={16} /> },
    { title: 'Car Fleet Questions', icon: <ChevronRight size={16} /> },
    { title: 'Partner with Us', icon: <ChevronRight size={16} /> },
  ];

  return (
    <div className="bg-white overflow-hidden">
      
      {/* --- HERO / INTRO SECTION --- */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-red-50 rounded-full blur-[120px] opacity-40 -z-10"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4">Get In Touch</p>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight mb-8">
              Let's Start a <br />
              <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">Conversation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Have questions about our fleet or services? Our team is here to help 
              you find the perfect ride for your next journey.
            </p>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT GRID --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: INFO & HELP TOPICS */}
          <div className="lg:col-span-4 space-y-12">
            
            <div className={`transition-all duration-1000 delay-100 transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center">
                <HeadphonesIcon className="mr-3 text-red-600" size={28} />
                Contact Info
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {contactOptions.map((option, i) => (
                  <div key={i} className="flex items-start space-x-5 p-2 group">
                    <div className={`${option.color} w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      {option.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-1">{option.title}</h4>
                      <p className="text-gray-600 font-medium leading-relaxed">{option.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`bg-gray-50 p-8 rounded-[2.5rem] transition-all duration-1000 delay-200 transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center">
                <HelpCircle className="mr-3 text-red-600" size={24} />
                Quick Topics
              </h3>
              <ul className="space-y-3">
                {helpTopics.map((topic, i) => (
                  <li key={i}>
                    <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-white border border-transparent hover:border-red-100 hover:text-red-600 transition-all group font-bold text-gray-700 text-sm">
                      <span>{topic.title}</span>
                      <span className="group-hover:translate-x-1 transition-transform">{topic.icon}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="lg:col-span-8">
            <div className={`bg-white p-8 md:p-12 rounded-[3rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] border border-gray-50 transition-all duration-1000 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100 shadow-xl' : 'translate-y-20 opacity-0 shadow-none'}`}>
              <div className="mb-10">
                <h3 className="text-3xl font-black text-gray-900 mb-4 flex items-center">
                  <MessageSquare className="mr-4 text-red-600" size={32} />
                  Send a Message
                </h3>
                <p className="text-gray-500 font-medium">We usually respond within 2-4 business hours.</p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-600 transition-colors" size={20} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full bg-gray-50 border-2 py-4 pl-12 pr-4 rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-red-600/5 transition-all ${
                          errors.name ? 'border-red-200 bg-red-50/10' : 'border-transparent focus:border-red-600/20'
                        }`}
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-xs font-bold ml-1">{errors.name}</p>}
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                    <div className="relative group">
                      <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-600 transition-colors" size={20} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full bg-gray-50 border-2 py-4 pl-12 pr-4 rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-red-600/5 transition-all ${
                          errors.email ? 'border-red-200 bg-red-50/10' : 'border-transparent focus:border-red-600/20'
                        }`}
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs font-bold ml-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Message</label>
                  <textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    className={`w-full bg-gray-50 border-2 py-4 px-6 rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-red-600/5 transition-all resize-none ${
                      errors.message ? 'border-red-200 bg-red-50/10' : 'border-transparent focus:border-red-600/20'
                    }`}
                  />
                  {errors.message && <p className="text-red-500 text-xs font-bold ml-1">{errors.message}</p>}
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-red-600 hover:bg-red-700 text-white font-black py-5 rounded-2xl shadow-xl shadow-red-200 transition-all flex items-center justify-center space-x-3 active:scale-[0.98] ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={20} />
                      </>
                    )}
                  </button>
                  <p className="text-center text-gray-400 text-xs mt-6 font-medium flex items-center justify-center">
                    <FileText size={14} className="mr-2" />
                    By sending, you agree to our privacy policy.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- BOTTOM DECORATION --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto rounded-[3rem] h-64 bg-gray-100 flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
            {/* Abstract visual pattern or map mockup */}
            <div className="w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]"></div>
          </div>
          <div className="relative text-center flex flex-col items-center">
            <div className="w-16 h-1 w-12 bg-red-600 rounded-full mb-6"></div>
            <h4 className="text-2xl font-black text-gray-900 tracking-tight">Visit our showroom anytime</h4>
            <p className="text-gray-500 font-bold text-sm uppercase tracking-widest mt-2">Open 5 Days a Week</p>
          </div>
        </div>
      </section>

    </div>
  );
}
