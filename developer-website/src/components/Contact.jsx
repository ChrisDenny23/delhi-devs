import { useState } from 'react';
import 'boxicons/css/boxicons.min.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'website',
    message: '',
    scheduleCall: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        projectType: 'website',
        message: '',
        scheduleCall: false
      });
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const socialLinks = [
    { name: 'Behance', icon: 'bxl-behance', url: '#' },
    { name: 'GitHub', icon: 'bxl-github', url: '#' },
    { name: 'LinkedIn', icon: 'bxl-linkedin', url: '#' },
    { name: 'Instagram', icon: 'bxl-instagram', url: '#' },
    { name: 'Dribbble', icon: 'bxl-dribbble', url: '#' }
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-20 min-h-screen overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Section Tag */}
        <div className='relative w-48 sm:w-52 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] rounded-full mx-auto mb-8 sm:mb-10 md:mb-12 transform hover:scale-105 transition-transform duration-150 ease-out'>
          <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 text-sm sm:text-base'>
            <i className='bx bx-message-square-dots'></i>
            CONTACT US
          </div>
        </div>

        {/* Main Heading */}
        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider text-center mb-4 sm:mb-6 px-2'>
          Let's Build Something
          <br />
          Amazing Together
        </h2>

        {/* Description */}
        <p className='text-sm sm:text-base md:text-lg tracking-wider text-gray-400 text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20 px-2'>
          Got a project in mind? Whether it's a website, mobile app, or something totally new — we'd love to hear your idea.
        </p>

        {/* Two Column Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16'>
          
          {/* Left Side - Info & Socials */}
          <div className='space-y-6 sm:space-y-8'>
            {/* Intro */}
            <div className='border border-[#2a2a2a] rounded-2xl p-6 sm:p-8 bg-black bg-opacity-40'>
              <p className='text-sm sm:text-base tracking-wider text-gray-300 leading-relaxed'>
                We're a small team of passionate developers crafting beautiful digital experiences. Drop a message, and we'll get back within 24 hours.
              </p>
            </div>

            {/* Contact Info */}
            <div className='space-y-4 sm:space-y-5'>
              {/* Location */}
              <div className='flex items-start gap-4 p-4 rounded-xl border border-[#2a2a2a] bg-black bg-opacity-40 transform hover:translate-x-2 hover:border-[#e99b63] transition-all duration-150 ease-out group'>
                <div className='w-12 h-12 rounded-full bg-gradient-to-r from-[#656565] to-[#e99b63] flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-150 ease-out'>
                  <i className='bx bx-map text-2xl'></i>
                </div>
                <div>
                  <h4 className='text-base sm:text-lg font-semibold tracking-wider mb-1'>Location</h4>
                  <p className='text-xs sm:text-sm text-gray-400 tracking-wider'>Delhi, India</p>
                </div>
              </div>

              {/* Email */}
              <div className='flex items-start gap-4 p-4 rounded-xl border border-[#2a2a2a] bg-black bg-opacity-40 transform hover:translate-x-2 hover:border-[#e99b63] transition-all duration-150 ease-out group'>
                <div className='w-12 h-12 rounded-full bg-gradient-to-r from-[#656565] to-[#e99b63] flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-150 ease-out'>
                  <i className='bx bx-envelope text-2xl'></i>
                </div>
                <div>
                  <h4 className='text-base sm:text-lg font-semibold tracking-wider mb-1'>Email</h4>
                  <p className='text-xs sm:text-sm text-gray-400 tracking-wider'>hello@delhidevs.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className='flex items-start gap-4 p-4 rounded-xl border border-[#2a2a2a] bg-black bg-opacity-40 transform hover:translate-x-2 hover:border-[#e99b63] transition-all duration-150 ease-out group'>
                <div className='w-12 h-12 rounded-full bg-gradient-to-r from-[#656565] to-[#e99b63] flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-150 ease-out'>
                  <i className='bx bx-phone text-2xl'></i>
                </div>
                <div>
                  <h4 className='text-base sm:text-lg font-semibold tracking-wider mb-1'>Phone</h4>
                  <p className='text-xs sm:text-sm text-gray-400 tracking-wider'>+91 9XXXXXXXXX</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className='border border-[#2a2a2a] rounded-2xl p-6 sm:p-8 bg-black bg-opacity-40'>
              <h4 className='text-base sm:text-lg font-semibold tracking-wider mb-4 sm:mb-6'>Follow Us</h4>
              <div className='flex flex-wrap gap-3 sm:gap-4'>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className='group relative w-12 h-12 rounded-full bg-gradient-to-r from-[#656565] to-[#e99b63] flex items-center justify-center transform hover:scale-110 transition-all duration-150 ease-out'
                    title={social.name}
                  >
                    <i className={`bx ${social.icon} text-2xl`}></i>
                    {/* Tooltip */}
                    <span className='absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black px-3 py-1 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none'>
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className='border border-[#2a2a2a] rounded-2xl p-6 sm:p-8 bg-black bg-opacity-40'>
            {!submitted ? (
              <form onSubmit={handleSubmit} className='space-y-5 sm:space-y-6'>
                {/* Name */}
                <div>
                  <label className='block text-sm sm:text-base font-semibold tracking-wider mb-2'>Name *</label>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder='Your Name'
                    className='w-full px-4 py-3 rounded-xl bg-black bg-opacity-60 border border-[#2a2a2a] text-white text-sm sm:text-base tracking-wider focus:border-[#e99b63] focus:outline-none transition-all duration-150 ease-out'
                  />
                </div>

                {/* Email */}
                <div>
                  <label className='block text-sm sm:text-base font-semibold tracking-wider mb-2'>Email *</label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder='your@email.com'
                    className='w-full px-4 py-3 rounded-xl bg-black bg-opacity-60 border border-[#2a2a2a] text-white text-sm sm:text-base tracking-wider focus:border-[#e99b63] focus:outline-none transition-all duration-150 ease-out'
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label className='block text-sm sm:text-base font-semibold tracking-wider mb-2'>Project Type *</label>
                  <select
                    name='projectType'
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 rounded-xl bg-black bg-opacity-60 border border-[#2a2a2a] text-white text-sm sm:text-base tracking-wider focus:border-[#e99b63] focus:outline-none transition-all duration-150 ease-out cursor-pointer'
                  >
                    <option value='website'>Website</option>
                    <option value='app'>Mobile App</option>
                    <option value='custom'>Custom Project</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className='block text-sm sm:text-base font-semibold tracking-wider mb-2'>Message / Project Details *</label>
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows='5'
                    placeholder='Tell us about your project...'
                    className='w-full px-4 py-3 rounded-xl bg-black bg-opacity-60 border border-[#2a2a2a] text-white text-sm sm:text-base tracking-wider focus:border-[#e99b63] focus:outline-none transition-all duration-150 ease-out resize-none'
                  ></textarea>
                </div>

                {/* Checkbox */}
                <div className='flex items-center gap-3'>
                  <input
                    type='checkbox'
                    name='scheduleCall'
                    id='scheduleCall'
                    checked={formData.scheduleCall}
                    onChange={handleChange}
                    className='w-5 h-5 rounded bg-black bg-opacity-60 border border-[#2a2a2a] accent-[#e99b63] cursor-pointer'
                  />
                  <label htmlFor='scheduleCall' className='text-xs sm:text-sm text-gray-300 tracking-wider cursor-pointer'>
                    I'd like to schedule a quick call
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type='submit'
                  className='w-full bg-gradient-to-r from-[#656565] to-[#e99b63] text-white py-3 px-6 rounded-full text-sm sm:text-base font-semibold tracking-wider transform hover:scale-105 active:scale-95 transition-transform duration-150 ease-out group'
                >
                  Send Message <i className='bx bx-send text-xl align-middle transform group-hover:translate-x-1 transition-transform duration-150 ease-out inline-block'></i>
                </button>
              </form>
            ) : (
              <div className='flex flex-col items-center justify-center py-12 sm:py-16'>
                <div className='w-20 h-20 rounded-full bg-gradient-to-r from-[#656565] to-[#e99b63] flex items-center justify-center mb-6 animate-bounce'>
                  <i className='bx bx-check text-5xl'></i>
                </div>
                <h3 className='text-2xl sm:text-3xl font-semibold tracking-wider mb-3'>Message Sent! 🚀</h3>
                <p className='text-sm sm:text-base text-gray-400 tracking-wider text-center'>
                  We'll reach out soon. Stay tuned!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Extra Section */}
        <div className='border border-[#2a2a2a] rounded-2xl p-6 sm:p-8 md:p-10 bg-black bg-opacity-40 text-center transform hover:border-[#e99b63] transition-all duration-150 ease-out'>
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold tracking-wider mb-4'>Need something custom or unsure where to start?</h3>
          <p className='text-sm sm:text-base md:text-lg tracking-wider text-gray-300 mb-6 sm:mb-8'>
            Let's hop on a quick call — we'll help you plan it out.
          </p>
          <button className='bg-gradient-to-r from-[#656565] to-[#e99b63] text-white py-3 px-8 rounded-full text-sm sm:text-base font-semibold tracking-wider transform hover:scale-105 active:scale-95 transition-transform duration-150 ease-out group'>
            Schedule a Call <i className='bx bx-phone-call text-xl align-middle transform group-hover:rotate-12 transition-transform duration-150 inline-block'></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;