import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './BookSlider.css';

const BOOKS = [
  {
    title: "The Millionaire Fastlane",
    author: "MJ DeMarco",
    desc: "A hard-hitting guide to wealth that challenges the traditional 'Slowlane' advice of saving for 40 years.",
    img: "https://m.media-amazon.com/images/I/61Yf6PSctBL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    desc: "An easy and proven way to build good habits and break bad ones by focusing on tiny 1% improvements.",
    img: "https://m.media-amazon.com/images/I/81YkqyaFVEL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    desc: "A magical story about Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure.",
    img: "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "How to Win Friends...",
    author: "Dale Carnegie",
    desc: "The classic manual on social skills, teaching you how to influence people and handle relationships effectively.",
    img: "https://m.media-amazon.com/images/I/71vK0WVQ4rL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    desc: "Exploring how your emotions and ego interfere with financial decisions more than logic or math.",
    img: "https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "Six Easy Pieces",
    author: "Richard Feynman",
    desc: "Six accessible lectures from the legendary physicist, covering the basics of atoms, energy, and gravity.",
    img: "https://m.media-amazon.com/images/I/71XvH-mK69L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    desc: "A tour of the mind, explaining the two systems that drive the way we think—one fast and emotional, one slow and logical.",
    img: "https://m.media-amazon.com/images/I/71f6vNfyS9L._AC_UF1000,1000_QL80_.jpg"
  }
];

export default function BookSlider() {
  return (
    <div className="slider-container">
      <h2 className="library-title">MY LIBRARY</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={'auto'}
        centeredSlides={true}
        /* --- Loop Fixes --- */
        loop={true}
        loopedSlides={BOOKS.length} 
        /* ------------------ */
        autoplay={{ 
          delay: 2500, 
          disableOnInteraction: false, 
          pauseOnMouseEnter: true 
        }}
        speed={800}
        pagination={{ clickable: true }}
        navigation={true}
        className="bookSwiper"
      >
        {BOOKS.map((book, index) => (
          <SwiperSlide key={index} className="book-slide">
            <div className="book-box">
              <p className="category-label">NON-FICTION</p>
              <div className="img-container">
                <img src={book.img} alt={book.title} className="book-model" />
              </div>
              <div className="book-details">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">by {book.author}</p>
                <p className="book-description">{book.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}