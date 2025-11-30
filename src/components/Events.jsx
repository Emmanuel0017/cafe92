import React from 'react'

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'DJ Nights',
      day: 'Wednesday',
      date: 'Every Week',
      time: '8 PM - 2 AM',
      description: 'Experience the best local and international DJs spinning the latest hits',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Live Music Fridays',
      day: 'Friday',
      date: 'Weekly',
      time: '7 PM - 12 AM',
      description: 'Live bands and acoustic performances featuring Malawian artists',
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Weekend Party',
      day: 'Saturday',
      date: 'Every Saturday',
      time: '9 PM - 4 AM',
      description: 'The ultimate weekend party with premium drinks and shisha specials',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ]

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-black to-dark-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Weekly</span>
            <span className="text-orange-glow block">Events</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Never a dull moment at Café92. Join us for unforgettable nights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="group relative overflow-hidden rounded-2xl glass-effect hover:neon-orange transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${event.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              
              <div className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{event.title}</h3>
                    <p className="text-orange-glow font-semibold">{event.day}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gold font-bold">{event.date}</p>
                    <p className="text-gray-400 text-sm">{event.time}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{event.description}</p>
                
                <button className="w-full bg-orange-glow text-white py-3 rounded-lg font-bold hover:bg-red-500 transition-all duration-300">
                  RSVP Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Shisha Lounge</h3>
            <p className="text-gray-300 text-lg mb-6">
              Experience our premium shisha selection in our dedicated lounge area. 
              Available daily with flavor experts to craft your perfect session.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gold">
              <span>• Double Apple</span>
              <span>• Mint</span>
              <span>• Grape</span>
              <span>• Blueberry</span>
              <span>• Special Mixes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events