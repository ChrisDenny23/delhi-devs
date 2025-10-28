import { useState, useEffect } from 'react';
import 'boxicons/css/boxicons.min.css';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        // Trigger loading animation
        setTimeout(() => setIsLoaded(true), 100);

        // Handle scroll effect
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const navLinks = ['HOME', 'ABOUT', 'SERVICES', 'PRICING', 'PORTFOLIO', 'CONTACT'];

    return (
        <header 
            className={`flex justify-between items-center py-4 px-4 lg:px-20 transition-all duration-500 ${
                scrolled ? 'bg-black bg-opacity-80 backdrop-blur-md shadow-lg' : ''
            }`}
        >
            {/* Logo */}
            <h1 
                className={`text-3xl md:text-4xl lg:text-5xl font-light m-0 transition-all duration-700 ${
                    isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
            >
                Delhi Devs
            </h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-12">
                {navLinks.map((link, index) => (
                    <a
                        key={link}
                        className={`text-base tracking-wider transition-all duration-700 hover:text-gray-300 hover:scale-110 z-50 ${
                            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                        }`}
                        style={{ transitionDelay: `${200 + index * 100}ms` }}
                        href="#"
                    >
                        {link}
                    </a>
                ))}
            </nav>

            {/* Hire Us Button */}
            <button 
                className={`hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-700 hover:bg-white hover:scale-110 hover:shadow-lg cursor-pointer z-50 ${
                    isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: '800ms' }}
            >
                HIRE US
            </button>

            {/* Mobile Menu Icon */}
            <button 
                onClick={toggleMobileMenu} 
                className={`md:hidden text-3xl p-2 z-50 transition-all duration-700 hover:scale-110 ${
                    isLoaded ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'
                }`}
                style={{ transitionDelay: '400ms' }}
            >
                <i className={`bx ${mobileMenuOpen ? 'bx-x' : 'bx-menu'} transition-transform duration-300`}></i>
            </button>

            {/* Mobile Navigation */}
            <div 
                className={`fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md transition-all duration-500 ${
                    mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
            >
                <nav className='flex flex-col gap-6 items-center mt-8'>
                    {navLinks.map((link, index) => (
                        <a
                            key={link}
                            className={`text-base tracking-wider transition-all duration-500 hover:text-gray-300 hover:scale-110 z-50 ${
                                mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                            style={{ transitionDelay: mobileMenuOpen ? `${index * 100}ms` : '0ms' }}
                            href="#"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link}
                        </a>
                    ))}
                    
                    <button 
                        className={`bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white hover:scale-110 cursor-pointer mt-4 ${
                            mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                        style={{ transitionDelay: mobileMenuOpen ? `${navLinks.length * 100}ms` : '0ms' }}
                    >
                        HIRE US
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;