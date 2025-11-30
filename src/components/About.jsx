import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-dark-bg to-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gold">Welcome to</span>
              <span className="text-white block">Café92</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Nestled in the heart of Lilongwe, Café92 is more than just a café – it's an experience. 
              We've created a sanctuary where exceptional cuisine meets vibrant nightlife, crafting 
              unforgettable moments for our guests.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              By day, indulge in our carefully curated menu featuring local flavors with a modern twist. 
              By night, transform your evening with handcrafted cocktails, premium shisha, and the city's 
              most exciting events featuring top DJs and live music.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 glass-effect rounded-lg">
                <div className="text-2xl font-bold text-gold mb-2">50+</div>
                <div className="text-gray-300">Cocktail Varieties</div>
              </div>
              <div className="text-center p-4 glass-effect rounded-lg">
                <div className="text-2xl font-bold text-gold mb-2">7</div>
                <div className="text-gray-300">Weekly Events</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 animate-fade-in">
            <div className="space-y-4">
              <div 
                className="h-48 rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)',
                }}
              ></div>
              <div 
                className="h-64 rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)',
                }}
              ></div>
            </div>
            <div className="space-y-4 mt-8">
              <div 
                className="h-64 rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)',
                }}
              ></div>
              <div 
                className="h-48 rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About