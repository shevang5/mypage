import React, { useRef, useState } from 'react';

const BOOKS = [
  { title: "The Millionaire Fastlane", img: "https://m.media-amazon.com/images/I/61XuALcnqmL._UF1000,1000_QL80_.jpg" },
  { title: "Atomic Habits", img: "https://m.media-amazon.com/images/I/81YkqyaFVEL._AC_UF1000,1000_QL80_.jpg" },
  { title: "The Alchemist", img: "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg" },
  { title: "Win Friends", img: "https://m.media-amazon.com/images/I/71vK0WVQ4rL._AC_UF1000,1000_QL80_.jpg" },
  { title: "Money", img: "https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UF1000,1000_QL80_.jpg" },
  { title: "Six EasyPieces", img: "https://m.media-amazon.com/images/I/71pyGVitTwL._UF1000,1000_QL80_.jpg" },
  { title: "Thinking Fast And Slow", img: "https://m.media-amazon.com/images/I/71f6DceqZAL.jpg" }
];

const BookSlider = () => {
  const scrollRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse Handlers for Dragging
  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiplier adjusts scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className='h-screen flex flex-col justify-center' style={{ padding: '40px', backgroundColor: '#000' }}>
      <h2 className="text-2xl uppercase text-center tracking-[2px] mb-9">MY PROJECTS</h2>
      
      <div 
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{
          display: 'flex',
          overflowX: 'auto',
          gap: '30px',
          cursor: isDown ? 'grabbing' : 'grab',
          scrollbarWidth: 'none', // Hides scrollbar in Firefox
          msOverflowStyle: 'none', // Hides scrollbar in IE/Edge
          WebkitOverflowScrolling: 'touch',
          padding: '10px'
        }}
      >
        {/* CSS to hide scrollbar in Chrome/Safari */}
        <style>{`
          div::-webkit-scrollbar { display: none; }
        `}</style>

        {BOOKS.map((book, index) => (
          <div key={index} style={{ flex: '0 0 auto', width: '300px', userSelect: 'none' }}>
            <img 
              src={book.img} 
              alt={book.title} 
              draggable="false" // Prevents default ghost image drag
              style={{ 
                width: '100%', 
                height: '450px',
                objectFit: 'cover',
                borderRadius: '12px', 
                boxShadow: '0 10px 20px rgba(0,0,0,0.2)' 
              }} 
            />
            <h3 style={{ fontSize: '18px', marginTop: '15px' }}>{book.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSlider;