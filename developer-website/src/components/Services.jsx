import { useState, useEffect, useRef } from 'react';
import 'boxicons/css/boxicons.min.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState('web');
  const [visibleElements, setVisibleElements] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.dataset.animateId]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('[data-animate-id]');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [activeTab]);

  const webPackages = [
    {
      icon: 'bx-briefcase-alt',
      title: 'Starter Website',
      description: 'Perfect for portfolios or small businesses (1–3 pages)',
      features: ['Responsive Design', 'Fast Loading', 'SEO Optimized', 'Contact Form']
    },
    {
      icon: 'bx-layer',
      title: 'Dynamic Website',
      description: 'Includes admin panel, contact forms, and real-time updates',
      features: ['Admin Dashboard', 'Real-time Updates', 'User Authentication', 'Database Integration']
    },
    {
      icon: 'bx-store',
      title: 'E-Commerce Website',
      description: 'Product listings, cart, checkout, payments, and dashboard',
      features: ['Product Management', 'Payment Gateway', 'Order Tracking', 'Analytics Dashboard']
    }
  ];

  const appPackages = [
    {
      icon: 'bx-mobile',
      title: 'Basic App',
      description: 'Simple static or content-based mobile app',
      features: ['Cross-Platform', 'Clean UI/UX', 'Offline Support', 'Push Notifications']
    },
    {
      icon: 'bx-server',
      title: 'Standard App',
      description: 'Firebase backend, authentication, and core features',
      features: ['User Authentication', 'Cloud Database', 'Real-time Sync', 'Media Storage']
    },
    {
      icon: 'bx-rocket',
      title: 'Advanced App',
      description: 'Full-stack app with APIs, payments, animations, and admin control',
      features: ['Custom APIs', 'Payment Integration', 'Advanced Animations', 'Admin Panel']
    }
  ];

  const currentPackages = activeTab === 'web' ? webPackages : appPackages;

  const isVisible = (id) => visibleElements.has(id);

  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-20 min-h-screen flex items-center overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Section Tag */}
        <div 
          data-animate-id="section-tag"
          className={`relative w-48 sm:w-52 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] rounded-full mx-auto mb-8 sm:mb-10 md:mb-12 transform hover:scale-105 transition-all duration-700 ${
            isVisible('section-tag') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 text-sm sm:text-base'>
            <i className='bx bx-diamond'></i>
            OUR SERVICES
          </div>
        </div>

        {/* Main Heading */}
        <h2 
          data-animate-id="main-heading"
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider text-center mb-4 sm:mb-6 px-2 transition-all duration-700 delay-100 ${
            isVisible('main-heading') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Design, Develop
          <br />
          & Deliver Excellence
        </h2>

        {/* Description */}
        <p 
          data-animate-id="description"
          className={`text-sm sm:text-base md:text-lg tracking-wider text-gray-400 text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 px-2 transition-all duration-700 delay-200 ${
            isVisible('description') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          We design, develop, and deliver sleek, high-performance digital products — from responsive websites to fully functional mobile apps. Our goal? To make premium tech accessible, fast, and beautiful.
        </p>

        {/* Tab Toggle */}
        <div 
          data-animate-id="tab-toggle"
          className={`flex justify-center mb-8 sm:mb-12 md:mb-16 transition-all duration-700 delay-300 ${
            isVisible('tab-toggle') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className='inline-flex border border-[#2a2a2a] rounded-full p-1 bg-black bg-opacity-40'>
            <button
              onClick={() => setActiveTab('web')}
              className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold tracking-wider transition-all duration-150 ease-out ${
                activeTab === 'web'
                  ? 'bg-gradient-to-r from-[#656565] to-[#e99b63] text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <i className='bx bx-code-alt mr-2'></i>
              Web Development
            </button>
            <button
              onClick={() => setActiveTab('app')}
              className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold tracking-wider transition-all duration-150 ease-out ${
                activeTab === 'app'
                  ? 'bg-gradient-to-r from-[#656565] to-[#e99b63] text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <i className='bx bx-mobile-alt mr-2'></i>
              App Development
            </button>
          </div>
        </div>

        {/* Service Description */}
        <div 
          data-animate-id="service-desc"
          className={`text-center mb-8 sm:mb-12 max-w-3xl mx-auto transition-all duration-700 delay-400 ${
            isVisible('service-desc') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {activeTab === 'web' ? (
            <p className='text-base sm:text-lg tracking-wider text-gray-300'>
              We build fast, secure, and stunning websites that help your brand stand out online. Whether you need a simple landing page or a complete e-commerce platform, we've got you covered.
            </p>
          ) : (
            <p className='text-base sm:text-lg tracking-wider text-gray-300'>
              We create mobile apps that are smooth, scalable, and user-focused. From basic prototypes to fully integrated apps — we turn your idea into reality.
            </p>
          )}
        </div>

        {/* Packages Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16'>
          {currentPackages.map((pkg, index) => (
            <div
              key={index}
              data-animate-id={`package-${activeTab}-${index}`}
              className={`border border-[#2a2a2a] rounded-2xl p-6 sm:p-8 bg-black bg-opacity-40 transform hover:-translate-y-2 hover:border-[#e99b63] transition-all duration-700 cursor-pointer group ${
                isVisible(`package-${activeTab}-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              {/* Icon */}
              <div className='w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#656565] to-[#e99b63] flex items-center justify-center mb-4 sm:mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-150 ease-out'>
                <i className={`bx ${pkg.icon} text-3xl sm:text-4xl`}></i>
              </div>

              {/* Title */}
              <h3 className='text-xl sm:text-2xl font-semibold tracking-wider mb-3'>{pkg.title}</h3>

              {/* Description */}
              <p className='text-sm sm:text-base text-gray-400 tracking-wider mb-4 sm:mb-6'>
                {pkg.description}
              </p>

              {/* Features */}
              <ul className='space-y-2 sm:space-y-3'>
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className='flex items-center gap-2 text-xs sm:text-sm text-gray-300'>
                    <i className='bx bx-check text-[#e99b63] text-lg'></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Outro */}
        <div 
          data-animate-id="outro"
          className={`text-center mb-8 sm:mb-12 transition-all duration-700 delay-700 ${
            isVisible('outro') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className='text-base sm:text-lg md:text-xl tracking-wider text-gray-300 max-w-3xl mx-auto'>
            Everything we build is tailored to your goals — clean design, reliable code, and on-time delivery.
          </p>
        </div>

        {/* CTA Buttons */}
        <div 
          data-animate-id="cta-buttons"
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-800 ${
            isVisible('cta-buttons') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button className='w-full sm:w-auto border border-[#2a2a2a] py-3 px-8 rounded-full text-sm sm:text-base font-semibold tracking-wider transform hover:bg-[#1a1a1a] hover:border-[#e99b63] transition-all duration-150 ease-out group'>
            View Pricing <i className='bx bx-dollar text-xl align-middle transform group-hover:scale-110 transition-transform duration-150 inline-block'></i>
          </button>
          <button className='w-full sm:w-auto bg-gradient-to-r from-[#656565] to-[#e99b63] text-white py-3 px-8 rounded-full text-sm sm:text-base font-semibold tracking-wider transform hover:scale-105 active:scale-95 transition-transform duration-150 ease-out group'>
            Start Your Project <i className='bx bx-right-arrow-alt text-xl align-middle transform group-hover:translate-x-1 transition-transform duration-150 ease-out inline-block'></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;