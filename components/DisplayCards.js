import React, { useState } from 'react';

function DisplayCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    { id: 1, title: 'Quality Assured', content: 'Fender-certified quality assurance.' },
    { id: 2, title: 'Free shipping', content: 'Free shipping on all orders over $50' },
    { id: 3, title: 'Easy Returns', content: 'Return or exchange within 30 days of receipt' },
    { id: 4, title: 'Fender Support', content: 'Get support & advice from our expert gear advisors' },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % cards.length);
  };

  return (
    <div className="max-w-lg mx-auto ">
      <div className="flex gap-10 overflow-hidden">
        {cards.slice(currentIndex, currentIndex + 2).map((card) => (
          <div key={card.id} className="flex-1 p-4 bg-black rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-red-600">{card.title}</h3>
            <p className="text-white font-light text-l">{card.content}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-4">
        <button
          onClick={handleNext}
          className="bg-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          
        </button>
      </div>
    </div>
  );
}

export default DisplayCards;
