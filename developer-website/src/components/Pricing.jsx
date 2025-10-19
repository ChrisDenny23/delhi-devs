import { useState } from 'react';
import 'boxicons/css/boxicons.min.css';

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('websites');

  const websitePricing = [
    {
      icon: 'bx-file',
      title: 'Landing Page',
      subtitle: 'Perfect for startups & creators',
      price: '₹3,999',
      period: 'one-time',
      features: [
        '1-page modern responsive layout',
        'Engaging UI animations',
        'Basic backend (contact form + database)',
        'Delivery in 5–7 days',
        '1 month free maintenance'
      ],
      cta: "Let's Build Your Page"
    },
    {
      icon: 'bx-briefcase',
      title: 'Professional Website',
      subtitle: 'For businesses who want something full-scale',
      price: '₹11,999',
      period: 'one-time',
      popular: true,
      features: [
        '4–6 pages (Home, About, Services, Contact, etc.)',
        'Custom animations and branding',
        'Backend integration (Node/Firebase)',
        'CMS-ready (edit content easily)',
        'SEO',
        '1 month maintenance'
      ],
      cta: 'Get Your Website'
    },
    {
      icon: 'bx-store',
      title: 'Full E-Commerce Website',
      subtitle: 'For brands ready to sell online',
      price: '₹24,999',
      period: 'one-time',
      features: [
        'Full product catalog + admin dashboard',
        'Inventory, order & user management',
        'Payment gateway setup (Razorpay/Stripe)',
        'Firebase/Node backend integration',
        'Advanced UI animations & transitions',
        '1 month free maintenance + analytics'
      ],
      cta: 'Launch My Store'
    }
  ];

  const appPricing = [
    {
      icon: 'bx-mobile',
      title: 'Starter App',
      subtitle: 'For testing your app idea',
      price: '₹9,999',
      period: 'one-time',
      features: [
        '3–4 core screens (e.g. login, home, profile)',
        'Flutter frontend',
        'Firebase backend',
        'Basic UI animations',
        'Deployed & tested on Android',
        '1 month support'
      ],
      cta: 'Build My App MVP'
    },
    {
      icon: 'bx-mobile-alt',
      title: 'Full App',
      subtitle: 'For growing startups & small businesses',
      price: '₹21,999',
      period: 'one-time',
      popular: true,
      features: [
        '8–10 pages/screens',
        'Flutter frontend + Node/Firebase backend',
        'API integration + database setup',
        'Auth, profile, and CRUD features',
        'Polished UI + light animations',
        'Play Store deployment support',
        '1 month maintenance'
      ],
      cta: 'Launch My App'
    },
    {
      icon: 'bx-rocket',
      title: 'Advanced App',
      subtitle: 'For professional, feature-rich apps',
      price: '₹34,999',
      period: 'one-time',
      features: [
        '12+ screens with custom UI',
        'Firebase/Node backend integration',
        'Admin dashboard (React)',
        'Real-time features (chat, notifications, etc.)',
        'Cloud hosting & performance optimization',
        'Polished UI/UX animations & branding',
        '1 month post-launch maintenance'
      ],
      cta: "Let's Build Something Big"
    }
  ];

  const currentPricing = activeTab === 'websites' ? websitePricing : appPricing;

  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-20 min-h-screen flex items-center overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Section Tag */}
        <div className='relative w-48 sm:w-52 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] rounded-full mx-auto mb-8 sm:mb-10 md:mb-12 transform hover:scale-105 transition-transform duration-150 ease-out'>
          <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 text-sm sm:text-base'>
            <i className='bx bx-dollar-circle'></i>
            PRICING
          </div>
        </div>

        {/* Main Heading */}
        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider text-center mb-4 sm:mb-6 px-2'>
          Affordable Plans for
          <br />
          Websites & Apps That Work
        </h2>

        {/* Description */}
        <p className='text-sm sm:text-base md:text-lg tracking-wider text-gray-400 text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 px-2'>
          Choose your platform and let's build something your users will love.
        </p>

        {/* Tab Toggle */}
        <div className='flex justify-center mb-8 sm:mb-12 md:mb-16'>
          <div className='inline-flex border border-[#2a2a2a] rounded-full p-1 bg-black bg-opacity-40'>
            <button
              onClick={() => setActiveTab('websites')}
              className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold tracking-wider transition-all duration-150 ease-out ${
                activeTab === 'websites'
                  ? 'bg-gradient-to-r from-[#656565] to-[#e99b63] text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <i className='bx bx-laptop mr-2'></i>
              Websites
            </button>
            <button
              onClick={() => setActiveTab('apps')}
              className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold tracking-wider transition-all duration-150 ease-out ${
                activeTab === 'apps'
                  ? 'bg-gradient-to-r from-[#656565] to-[#e99b63] text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <i className='bx bx-mobile-alt mr-2'></i>
              Apps
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16'>
          {currentPricing.map((plan, index) => (
            <div
              key={index}
              className={`relative border rounded-2xl p-6 sm:p-8 bg-black bg-opacity-40 transform hover:-translate-y-2 transition-all duration-150 ease-out cursor-pointer group ${
                plan.popular 
                  ? 'border-[#e99b63]' 
                  : 'border-[#2a2a2a] hover:border-[#e99b63]'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className='absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#656565] to-[#e99b63] px-4 py-1 rounded-full text-xs font-semibold tracking-wider'>
                  POPULAR
                </div>
              )}

              {/* Icon */}
              <div className='w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#656565] to-[#e99b63] flex items-center justify-center mb-4 sm:mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-150 ease-out'>
                <i className={`bx ${plan.icon} text-3xl sm:text-4xl`}></i>
              </div>

              {/* Title & Subtitle */}
              <h3 className='text-xl sm:text-2xl font-semibold tracking-wider mb-2'>{plan.title}</h3>
              <p className='text-xs sm:text-sm text-gray-400 tracking-wider mb-4'>{plan.subtitle}</p>

              {/* Price */}
              <div className='mb-6'>
                <span className='text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#656565] to-[#e99b63] bg-clip-text text-transparent'>
                  {plan.price}
                </span>
                <span className='text-sm text-gray-400 ml-2'>/ {plan.period}</span>
              </div>

              {/* Features */}
              <ul className='space-y-3 mb-6 sm:mb-8'>
                {plan.features.map((feature, idx) => (
                  <li key={idx} className='flex items-start gap-2 text-xs sm:text-sm text-gray-300'>
                    <i className='bx bx-check text-[#e99b63] text-lg flex-shrink-0 mt-0.5'></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className='w-full bg-gradient-to-r from-[#656565] to-[#e99b63] text-white py-3 px-6 rounded-full text-sm sm:text-base font-semibold tracking-wider transform hover:scale-105 active:scale-95 transition-transform duration-150 ease-out group/btn'>
                {plan.cta} <i className='bx bx-right-arrow-alt text-xl align-middle transform group-hover/btn:translate-x-1 transition-transform duration-150 ease-out inline-block'></i>
              </button>
            </div>
          ))}
        </div>

        {/* Custom Projects Section */}
        <div className='border border-[#2a2a2a] rounded-2xl p-6 sm:p-8 md:p-10 bg-black bg-opacity-40 text-center transform hover:border-[#e99b63] transition-all duration-150 ease-out'>
          <div className='w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-[#656565] to-[#e99b63] flex items-center justify-center mx-auto mb-4 sm:mb-6'>
            <i className='bx bx-customize text-4xl sm:text-5xl'></i>
          </div>
          <h3 className='text-2xl sm:text-3xl font-semibold tracking-wider mb-4'>Custom Projects</h3>
          <p className='text-sm sm:text-base md:text-lg tracking-wider text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8'>
            Got something unique in mind? Whether it's a SaaS platform, AI integration, or a social app — let's talk! We'll discuss your vision, timeline, and budget personally to tailor a perfect plan.
          </p>
          <button className='bg-gradient-to-r from-[#656565] to-[#e99b63] text-white py-3 px-8 rounded-full text-sm sm:text-base font-semibold tracking-wider transform hover:scale-105 active:scale-95 transition-transform duration-150 ease-out group'>
            Contact Us for Custom Orders <i className='bx bx-message-dots text-xl align-middle transform group-hover:scale-110 transition-transform duration-150 inline-block ml-1'></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;