import React from 'react'

const Reviews = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      role: 'Regular Customer',
      review: 'The best spot in Lilongwe! Amazing food, incredible cocktails, and the weekend DJ sets are fire. Café92 never disappoints!',
      rating: 5,
    },
    {
      id: 2,
      name: 'James T.',
      role: 'Food Enthusiast',
      review: 'Their grilled tilapia with coconut rice is to die for. The atmosphere is perfect for both casual dinners and special occasions.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Lisa K.',
      role: 'Nightlife Lover',
      review: 'Premium shisha, great music, and friendly staff. This is my go-to place for weekend parties with friends.',
      rating: 5,
    },
    {
      id: 4,
      name: 'David B.',
      role: 'Business Owner',
      review: 'Perfect venue for business meetings during the day and networking events in the evening. Highly recommended!',
      rating: 5,
    },
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-dark-bg to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">What Our</span>
            <span className="text-gold block">Guests Say</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Don't just take our word for it - hear from our valued customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="glass-effect rounded-xl p-6 hover:neon-gold transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-300 mb-6 italic">"{testimonial.review}"</p>
              
              <div className="border-t border-gray-700 pt-4">
                <h4 className="font-bold text-white">{testimonial.name}</h4>
                <p className="text-gold text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Community</h3>
            <p className="text-gray-300 text-lg mb-6">
              Be part of the Café92 family and create unforgettable memories with us
            </p>
            <button className="bg-gold text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-all duration-300 neon-gold">
              Write a Review
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews