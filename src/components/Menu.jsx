import React, { useState } from 'react'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const menuItems = [
    {
      id: 1,
      name: 'Crispy Calamari',
      category: 'starters',
      price: 'MWK 8,500',
      description: 'Lightly battered squid served with lemon aioli',
    },
    {
      id: 2,
      name: 'Beef Skewers',
      category: 'starters',
      price: 'MWK 9,500',
      description: 'Tender beef marinated in African spices',
    },
    {
      id: 3,
      name: 'Grilled Tilapia',
      category: 'main',
      price: 'MWK 18,000',
      description: 'Fresh lake fish with coconut rice and vegetables',
    },
    {
      id: 4,
      name: 'Braised Lamb Shank',
      category: 'main',
      price: 'MWK 25,000',
      description: 'Slow-cooked lamb with rosemary and red wine sauce',
    },
    {
      id: 5,
      name: 'Mango Mojito',
      category: 'drinks',
      price: 'MWK 6,500',
      description: 'Fresh mango, mint, and premium rum',
    },
    {
      id: 6,
      name: 'African Sunset',
      category: 'cocktails',
      price: 'MWK 8,500',
      description: 'A tropical blend of passion fruit and vodka',
    },
    {
      id: 7,
      name: 'Classic Mojito',
      category: 'cocktails',
      price: 'MWK 7,500',
      description: 'Traditional Cuban cocktail with fresh mint',
    },
    {
      id: 8,
      name: 'Café92 Special Coffee',
      category: 'drinks',
      price: 'MWK 4,500',
      description: 'Signature blend with caramel and cocoa notes',
    },
  ]

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'starters', name: 'Starters' },
    { id: 'main', name: 'Main Dishes' },
    { id: 'drinks', name: 'Drinks' },
    { id: 'cocktails', name: 'Cocktails' },
  ]

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <section id="menu" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Our</span>
            <span className="text-gold block">Menu</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Discover our carefully crafted selection of dishes and beverages
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gold text-black neon-gold'
                  : 'glass-effect text-white hover:bg-gold hover:text-black'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="glass-effect rounded-xl p-6 hover:neon-gold transition-all duration-300 hover:transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-white">{item.name}</h3>
                <span className="text-gold font-bold text-lg">{item.price}</span>
              </div>
              <p className="text-gray-400 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  {item.category}
                </span>
                <button className="text-gold hover:text-yellow-400 transition-colors">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu