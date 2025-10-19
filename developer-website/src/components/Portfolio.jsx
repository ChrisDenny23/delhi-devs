import { useState } from 'react';
import 'boxicons/css/boxicons.min.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'RizzFit App',
      category: 'app',
      type: 'Mobile App',
      description: 'A modern fitness tracking app built using Flutter + Firebase',
      tech: ['Flutter', 'Firebase', 'REST API'],
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'ByteBrew',
      category: 'website',
      type: 'Website',
      description: 'Café website with menu dashboard and online ordering system',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=600&fit=crop',
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      id: 3,
      title: 'IntraConnect',
      category: 'app',
      type: 'Mobile App',
      description: 'College dating app with real-time chat and profile matching',
      tech: ['Flutter', 'MongoDB', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
      gradient: 'from-rose-500 to-red-500'
    },
    {
      id: 4,
      title: 'MyTeez',
      category: 'website',
      type: 'E-Commerce Website',
      description: 'T-shirt printing eCommerce site with custom design tool',
      tech: ['Next.js', 'Stripe', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=600&fit=crop',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 5,
      title: 'TaskFlow',
      category: 'app',
      type: 'Mobile App',
      description: 'Productivity app with task management and team collaboration',
      tech: ['Flutter', 'Supabase', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 6,
      title: 'Portfolio 3D',
      category: 'uiux',
      type: 'UI/UX Design',
      description: 'Animated developer portfolio site with 3D elements',
      tech: ['React', 'Three.js', 'GSAP'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      gradient: 'from-violet-500 to-purple-500'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filters = [
    { id: 'all', label: 'All', icon: 'bx-grid-alt' },
    { id: 'website', label: 'Websites', icon: 'bx-laptop' },
    { id: 'app', label: 'Apps', icon: 'bx-mobile-alt' },
    { id: 'uiux', label: 'UI/UX', icon: 'bx-palette' }
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-20 min-h-screen overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Section Tag */}
        <div className='relative w-48 sm:w-52 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] rounded-full mx-auto mb-8 sm:mb-10 md:mb-12 transform hover:scale-105 transition-transform duration-150 ease-out'>
          <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 text-sm sm:text-base'>
            <i className='bx bx-briefcase-alt-2'></i>
            PORTFOLIO
          </div>
        </div>

        {/* Main Heading */}
        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider text-center mb-4 sm:mb-6 px-2'>
          Our Work Speaks
          <br />
          for Itself
        </h2>

        {/* Description */}
        <p className='text-sm sm:text-base md:text-lg tracking-wider text-gray-400 text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 px-2'>
          A glimpse into the projects we've crafted — clean code, modern design, and smooth performance.
        </p>

        {/* Filter Tabs */}
        <div className='flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 md:mb-16'>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold tracking-wider transition-all duration-150 ease-out border ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-[#656565] to-[#e99b63] text-white border-transparent'
                  : 'border-[#2a2a2a] text-gray-400 hover:text-white hover:border-[#e99b63]'
              }`}
            >
              <i className={`bx ${filter.icon} mr-2`}></i>
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16'>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className='group relative border border-[#2a2a2a] rounded-2xl overflow-hidden bg-black bg-opacity-40 transform hover:-translate-y-2 hover:border-[#e99b63] transition-all duration-150 ease-out cursor-pointer'
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className='relative h-48 sm:h-56 overflow-hidden'>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300 ease-out'
                />
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-70 transition-opacity duration-300 ease-out`}></div>
                
                {/* Tech Stack - Appears on Hover */}
                <div className='absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out transform translate-y-4 group-hover:translate-y-0'>
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className='px-3 py-1 bg-black bg-opacity-80 rounded-full text-xs font-semibold text-white backdrop-blur-sm'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className='p-5 sm:p-6'>
                <span className='text-xs sm:text-sm text-[#e99b63] font-semibold tracking-wider'>{project.type}</span>
                <h3 className='text-xl sm:text-2xl font-semibold tracking-wider mt-2 mb-3'>{project.title}</h3>
                <p className='text-xs sm:text-sm text-gray-400 tracking-wider mb-4 sm:mb-6'>
                  {project.description}
                </p>

                {/* CTA Buttons */}
                <div className='flex gap-3'>
                  <button className='flex-1 border border-[#2a2a2a] py-2 px-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider transform hover:bg-[#1a1a1a] hover:border-[#e99b63] transition-all duration-150 ease-out group/btn'>
                    View Live <i className='bx bx-link-external text-base align-middle transform group-hover/btn:translate-x-1 transition-transform duration-150 inline-block'></i>
                  </button>
                  <button className='flex-1 bg-gradient-to-r from-[#656565] to-[#e99b63] text-white py-2 px-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider transform hover:scale-105 active:scale-95 transition-transform duration-150 ease-out'>
                    Case Study
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Your Project Card */}
          <div className='group relative border border-[#2a2a2a] rounded-2xl overflow-hidden bg-black bg-opacity-40 transform hover:-translate-y-2 hover:border-[#e99b63] transition-all duration-150 ease-out cursor-pointer flex items-center justify-center min-h-[400px]'>
            <div className='text-center p-6'>
              <div className='w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-[#656565] to-[#e99b63] flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-150 ease-out'>
                <i className='bx bx-plus text-5xl sm:text-6xl'></i>
              </div>
              <h3 className='text-2xl sm:text-3xl font-semibold tracking-wider mb-4'>Your Project Could Be Next 👀</h3>
              <p className='text-sm sm:text-base text-gray-400 tracking-wider mb-6'>
                Let's build something amazing together
              </p>
              <button className='bg-gradient-to-r from-[#656565] to-[#e99b63] text-white py-3 px-6 rounded-full text-sm sm:text-base font-semibold tracking-wider transform hover:scale-105 active:scale-95 transition-transform duration-150 ease-out group/btn'>
                Let's Build Yours <i className='bx bx-right-arrow-alt text-xl align-middle transform group-hover/btn:translate-x-1 transition-transform duration-150 inline-block'></i>
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center mb-8 sm:mb-12'>
          <p className='text-base sm:text-lg md:text-xl tracking-wider text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8'>
            We've helped ideas turn into products — ready for yours?
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <button className='w-full sm:w-auto border border-[#2a2a2a] py-3 px-8 rounded-full text-sm sm:text-base font-semibold tracking-wider transform hover:bg-[#1a1a1a] hover:border-[#e99b63] transition-all duration-150 ease-out group'>
              Contact Us <i className='bx bx-message-dots text-xl align-middle transform group-hover:scale-110 transition-transform duration-150 inline-block'></i>
            </button>
            <button className='w-full sm:w-auto bg-gradient-to-r from-[#656565] to-[#e99b63] text-white py-3 px-8 rounded-full text-sm sm:text-base font-semibold tracking-wider transform hover:scale-105 active:scale-95 transition-transform duration-150 ease-out group'>
              Get a Quote <i className='bx bx-right-arrow-alt text-xl align-middle transform group-hover:translate-x-1 transition-transform duration-150 ease-out inline-block'></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;