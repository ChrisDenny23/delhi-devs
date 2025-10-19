import 'boxicons/css/boxicons.min.css';

const About = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-20 min-h-screen flex items-center overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Section Tag */}
        <div className='relative w-48 sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] rounded-full mx-auto mb-8 sm:mb-10 md:mb-12 transform hover:scale-105 transition-transform duration-150 ease-out'>
          <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 text-sm sm:text-base'>
            <i className='bx bx-info-circle'></i>
            ABOUT US
          </div>
        </div>

        {/* Main Heading */}
        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider text-center mb-4 sm:mb-6 px-2'>
          Crafting Digital
          <br />
          Excellence Since Day One
        </h2>

        {/* Description */}
        <p className='text-sm sm:text-base md:text-lg tracking-wider text-gray-400 text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 px-2'>
          We're digital architects transforming ideas into powerful experiences with technical expertise and creative innovation.
        </p>

        {/* Stats Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16'>
          {/* Stat Card 1 */}
          <div className='border border-[#2a2a2a] rounded-2xl p-5 sm:p-6 md:p-8 bg-black bg-opacity-40 transform hover:-translate-y-1 hover:border-[#e99b63] transition-all duration-150 ease-out cursor-pointer group'>
            <div className='text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#656565] to-[#e99b63] bg-clip-text text-transparent mb-2 sm:mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-150 ease-out'>
              50+
            </div>
            <h3 className='text-base sm:text-lg md:text-xl font-semibold tracking-wider mb-1 sm:mb-2'>Projects Delivered</h3>
            <p className='text-xs sm:text-sm md:text-base text-gray-400 tracking-wider'>Launched across various industries</p>
          </div>

          {/* Stat Card 2 */}
          <div className='border border-[#2a2a2a] rounded-2xl p-5 sm:p-6 md:p-8 bg-black bg-opacity-40 transform hover:-translate-y-1 hover:border-[#e99b63] transition-all duration-150 ease-out cursor-pointer group'>
            <div className='text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#656565] to-[#e99b63] bg-clip-text text-transparent mb-2 sm:mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-150 ease-out'>
              100%
            </div>
            <h3 className='text-base sm:text-lg md:text-xl font-semibold tracking-wider mb-1 sm:mb-2'>Client Satisfaction</h3>
            <p className='text-xs sm:text-sm md:text-base text-gray-400 tracking-wider'>Beyond expectations every time</p>
          </div>

          {/* Stat Card 3 */}
          <div className='border border-[#2a2a2a] rounded-2xl p-5 sm:p-6 md:p-8 bg-black bg-opacity-40 sm:col-span-2 md:col-span-1 transform hover:-translate-y-1 hover:border-[#e99b63] transition-all duration-150 ease-out cursor-pointer group'>
            <div className='text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#656565] to-[#e99b63] bg-clip-text text-transparent mb-2 sm:mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-150 ease-out'>
              24/7
            </div>
            <h3 className='text-base sm:text-lg md:text-xl font-semibold tracking-wider mb-1 sm:mb-2'>Support Available</h3>
            <p className='text-xs sm:text-sm md:text-base text-gray-400 tracking-wider'>Always here to help you succeed</p>
          </div>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center'>
          {/* Left Side - Features */}
          <div className='space-y-4 sm:space-y-6 md:space-y-8'>
            {/* Feature 1 */}
            <div className='flex gap-3 sm:gap-4 items-start p-3 sm:p-4 rounded-xl transform hover:bg-[#1a1a1a] hover:translate-x-2 transition-all duration-150 ease-out cursor-pointer group'>
              <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#656565] to-[#e99b63] flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-150 ease-out'>
                <i className='bx bx-code-alt text-xl sm:text-2xl'></i>
              </div>
              <div>
                <h3 className='text-base sm:text-lg md:text-xl font-semibold tracking-wider mb-1 sm:mb-2'>Modern Technologies</h3>
                <p className='text-xs sm:text-sm md:text-base text-gray-400 tracking-wider hidden sm:block'>We leverage cutting-edge tech stacks including React, Node.js, and cloud solutions to build scalable applications.</p>
                <p className='text-xs text-gray-400 tracking-wider sm:hidden'>Cutting-edge tech for scalable applications.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className='flex gap-3 sm:gap-4 items-start p-3 sm:p-4 rounded-xl transform hover:bg-[#1a1a1a] hover:translate-x-2 transition-all duration-150 ease-out cursor-pointer group'>
              <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#656565] to-[#e99b63] flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-150 ease-out'>
                <i className='bx bx-palette text-xl sm:text-2xl'></i>
              </div>
              <div>
                <h3 className='text-base sm:text-lg md:text-xl font-semibold tracking-wider mb-1 sm:mb-2'>Design-First Approach</h3>
                <p className='text-xs sm:text-sm md:text-base text-gray-400 tracking-wider hidden sm:block'>Beautiful, intuitive interfaces that users love. We blend aesthetics with functionality seamlessly.</p>
                <p className='text-xs text-gray-400 tracking-wider sm:hidden'>Beautiful interfaces users love.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className='flex gap-3 sm:gap-4 items-start p-3 sm:p-4 rounded-xl transform hover:bg-[#1a1a1a] hover:translate-x-2 transition-all duration-150 ease-out cursor-pointer group'>
              <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#656565] to-[#e99b63] flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-150 ease-out'>
                <i className='bx bx-rocket text-xl sm:text-2xl'></i>
              </div>
              <div>
                <h3 className='text-base sm:text-lg md:text-xl font-semibold tracking-wider mb-1 sm:mb-2'>Agile Development</h3>
                <p className='text-xs sm:text-sm md:text-base text-gray-400 tracking-wider hidden sm:block'>Fast iterations, continuous feedback, and rapid deployment to get your product to market quickly.</p>
                <p className='text-xs text-gray-400 tracking-wider sm:hidden'>Fast iterations and rapid deployment.</p>
              </div>
            </div>
          </div>

          {/* Right Side - Mission Statement */}
          <div className='hidden lg:block border border-[#2a2a2a] rounded-2xl p-6 sm:p-8 lg:p-12 bg-black bg-opacity-50 transform hover:border-[#e99b63] transition-all duration-150 ease-out'>
            <h3 className='text-2xl sm:text-3xl font-semibold tracking-wider mb-4 sm:mb-6'>Our Mission</h3>
            <p className='text-gray-400 tracking-wider text-base sm:text-lg leading-relaxed mb-4 sm:mb-6'>
              To empower businesses and entrepreneurs with innovative digital solutions that drive growth and create lasting impact in the digital landscape.
            </p>
            <p className='text-gray-400 tracking-wider text-base sm:text-lg leading-relaxed mb-6 sm:mb-8'>
              We believe in building long-term partnerships, not just delivering projects. Your success is our success.
            </p>
            <button className='w-full sm:w-auto bg-gradient-to-r from-[#656565] to-[#e99b63] text-white py-3 px-6 sm:px-8 rounded-full font-semibold tracking-wider transform hover:scale-105 active:scale-95 transition-transform duration-150 ease-out text-sm sm:text-base group'>
              Start Your Project <i className='bx bx-right-arrow-alt text-xl align-middle transform group-hover:translate-x-1 transition-transform duration-150 ease-out inline-block'></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;