import React from 'react'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
      </div>
      
      <div className="relative z-10 text-center container mx-auto px-4 animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-white">Good Food.</span>
          <span className="block text-gold mt-2">Great Vibes.</span>
          <span className="block text-orange-glow mt-2">Unforgettable Nights.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Lilongwe's premier destination for exquisite cuisine, crafted cocktails, and vibrant nightlife
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('menu')}
            className="bg-gold text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-all duration-300 neon-gold animate-pulse-glow"
          >
            View Menu
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="glass-effect border border-gold text-gold px-8 py-4 rounded-full font-bold text-lg hover:bg-gold hover:text-black transition-all duration-300"
          >
            Book a Table
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero