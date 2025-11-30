import React from 'react'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-t from-black to-dark-bg pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-gold mb-4">Café92</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Lilongwe's premier destination for exquisite cuisine, crafted cocktails, 
              and vibrant nightlife. Where every moment becomes a memory.
            </p>
            <div className="flex space-x-4">
              {['Facebook', 'Instagram', 'WhatsApp'].map((platform) => (
                <button
                  key={platform}
                  className="glass-effect border border-gold text-gold px-4 py-2 rounded-lg hover:bg-gold hover:text-black transition-all duration-300"
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Menu', 'Events', 'Gallery', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block text-gray-400 hover:text-gold transition-colors duration-300 text-left w-full"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <p>Lilongwe, Area 4</p>
              <p>+265 997 687 417</p>
              <p>Mon-Thu: 10AM - 12AM</p>
              <p>Fri-Sat: 10AM - 4AM</p>
              <p>Sun: 12PM - 10PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 Café92. All rights reserved.
            </p>
            <div className="flex space-x-6 text-gray-400">
              <button className="hover:text-gold transition-colors">Privacy Policy</button>
              <button className="hover:text-gold transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer