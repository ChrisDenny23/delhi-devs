import 'boxicons/css/boxicons.min.css';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', icon: 'bx-home', href: '#home' },
    { name: 'About', icon: 'bx-info-circle', href: '#about' },
    { name: 'Services', icon: 'bx-briefcase', href: '#services' },
    { name: 'Pricing', icon: 'bx-dollar', href: '#pricing' },
    { name: 'Portfolio', icon: 'bx-briefcase-alt-2', href: '#portfolio' },
    { name: 'Contact', icon: 'bx-message-square-dots', href: '#contact' }
  ];

  const services = [
    { name: 'Website Development', icon: 'bx-laptop', href: '#services' },
    { name: 'App Development', icon: 'bx-mobile-alt', href: '#services' },
    { name: 'Custom Projects', icon: 'bx-customize', href: '#services' },
    { name: 'Maintenance & Support', icon: 'bx-wrench', href: '#services' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'bxl-linkedin', url: '#' },
    { name: 'GitHub', icon: 'bxl-github', url: '#' },
    { name: 'Behance', icon: 'bxl-behance', url: '#' },
    { name: 'Instagram', icon: 'bxl-instagram', url: '#' },
    { name: 'Dribbble', icon: 'bxl-dribbble', url: '#' }
  ];

  return (
    <footer className="relative bg-black bg-opacity-60 border-t border-[#2a2a2a] overflow-hidden">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#656565]/10 via-transparent to-[#e99b63]/10 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-20 py-12 sm:py-16 md:py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          
          {/* 1. Brand Column */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-3xl sm:text-4xl font-semibold tracking-wider mb-3 bg-gradient-to-r from-[#656565] to-[#e99b63] bg-clip-text text-transparent">
                Delhi Devs
              </h3>
              <p className="text-sm sm:text-base tracking-wider text-gray-400 leading-relaxed">
                We build apps & websites that don't just look good — they work beautifully.
              </p>
            </div>
            <p className="text-xs sm:text-sm tracking-wider text-gray-500 leading-relaxed">
              Based in Delhi, crafting digital products for startups & creators worldwide.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#656565] to-[#e99b63] flex items-center justify-center transform hover:rotate-12 transition-transform duration-150">
                <i className="bx bx-code-alt text-xl"></i>
              </div>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#e99b63] to-[#656565] flex items-center justify-center transform hover:rotate-12 transition-transform duration-150">
                <i className="bx bx-mobile-alt text-xl"></i>
              </div>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold tracking-wider mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm sm:text-base tracking-wider text-gray-400 hover:text-white transition-colors duration-150 ease-out"
                  >
                    <i className={`bx ${link.icon} text-lg transform group-hover:translate-x-1 transition-transform duration-150`}></i>
                    <span className="relative">
                      {link.name}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-[#656565] to-[#e99b63] group-hover:w-full transition-all duration-150"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Services */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold tracking-wider mb-4 sm:mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="group flex items-center gap-2 text-sm sm:text-base tracking-wider text-gray-400 hover:text-white transition-colors duration-150 ease-out"
                  >
                    <i className={`bx ${service.icon} text-lg transform group-hover:translate-x-1 transition-transform duration-150`}></i>
                    <span className="relative">
                      {service.name}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-[#656565] to-[#e99b63] group-hover:w-full transition-all duration-150"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact & Socials */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold tracking-wider mb-4 sm:mb-6">Get in Touch</h4>
            <div className="space-y-4 mb-6">
              <a
                href="mailto:hello@delhidevs.com"
                className="group flex items-center gap-3 text-sm sm:text-base tracking-wider text-gray-400 hover:text-white transition-colors duration-150 ease-out"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#656565] to-[#e99b63] flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-150">
                  <i className="bx bx-envelope text-lg"></i>
                </div>
                <span>hello@delhidevs.com</span>
              </a>
              <a
                href="tel:+919XXXXXXXXX"
                className="group flex items-center gap-3 text-sm sm:text-base tracking-wider text-gray-400 hover:text-white transition-colors duration-150 ease-out"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#656565] to-[#e99b63] flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-150">
                  <i className="bx bx-phone text-lg"></i>
                </div>
                <span>+91 9XXXXXXXXX</span>
              </a>
            </div>

            {/* Social Icons */}
            <div>
              <p className="text-sm font-semibold tracking-wider mb-3 text-gray-500">Follow Us</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    title={social.name}
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-[#656565] to-[#e99b63] flex items-center justify-center transform hover:scale-110 hover:rotate-12 transition-all duration-150 ease-out"
                  >
                    <i className={`bx ${social.icon} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent mb-8"></div>

        {/* Bottom Strip */}
        <div className="text-center space-y-2">
          <p className="text-sm sm:text-base tracking-wider text-gray-400">
            © 2025 DelhiDevs. All rights reserved. Made with <span className="text-red-500">❤️</span> in Delhi, India.
          </p>
          <p className="text-xs sm:text-sm tracking-wider text-gray-500 italic">
            Built using React, Node.js & Firebase
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;