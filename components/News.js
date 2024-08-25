import src from 'daisyui';
import React, { useState } from 'react';


function News() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      id: 1,
      title: 'The Finneas Collection',
      content: 'Explore the acoustasonic collection.',
      image: 'https://stuff.fendergarage.com/images/r/1/a/Web_Fender_08_22_24_FINNEAS_Acoustasonic_NPI_Launch_Shop_Assets_ShopCard_01@2x.jpg', // Sample image URL
    },
    {
      id: 2,
      title: 'Black Friday Collection',
      content: '$200 of on select guitars',
      image: 'https://stuff.fendergarage.com/images/K/m/4/Fender_American-Professional_Shop-Card@2x.jpg', // Sample image URL
    },
    {
      id: 3,
      title: 'Fender Custom Shop',
      content: 'Limited Edition Masterbuilt Joe Strummer Telecasters',
      image: 'data:image/jpeg;base64,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', // Sample image URL
    },
    {
      id: 4,
      title: 'Fender Performances',
      content: 'Player II Sessions featuring the wallows.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Wallows_-_Palace_Theatre_-_6-29-2022_-_013.jpg/1200px-Wallows_-_Palace_Theatre_-_6-29-2022_-_013.jpg',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % cards.length);
  };

  return (
    <div className="max-w-10xl max-h-8xl mx-auto">
      <div className='text-red-700 font-bold w-50 h-12 p-20 text-6xl '>Spotlight Stories</div>
      <div className="flex gap-5 overflow-hidden">
        {cards.slice(currentIndex, currentIndex + 2).map((card) => (
          <div key={card.id} className="flex-1 p-4 bg-white rounded-lg shadow-md">
          
            <img src={card.image} alt={card.title} className="w-full h-65 object-cover rounded-md mb-4" />
            
            
            <h3 className="text-xl font-semibold text-red-700">{card.title}</h3>

          
            <p className="text-gray-700 font-medium">{card.content}</p>
          </div>
        ))}
      </div>

    
      <div className="flex justify-center mt-4">
        {Array(Math.ceil(cards.length / 2)).fill().map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 mx-1 rounded-full ${index === currentIndex / 2 ? 'bg-red-500' : 'bg-gray-300'}`}
          ></div>
        ))}
      </div>

   
      <div className="flex justify-end mt-4">
        <button
          onClick={handleNext}
          className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          
        </button>
      </div>
    </div>
  );
}

export default News;
