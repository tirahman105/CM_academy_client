 import { useState } from 'react';
import './Slider.css'

import { GrPrevious } from 'react-icons/gr';
import { GrNext } from 'react-icons/gr';


const Slider = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const numItems = items.length;

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % numItems);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + numItems) % numItems);
  };

  return (
    <div className="slider-container relative w-full overflow-hidden">
      <div
        className="slider flex transition-transform duration-300"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="slider-item flex-none w-full " style={{ minWidth: '100%' }}>
            <div className="flex flex-col md:flex-row items-center px-10 md:px-32 lg:px-40 gap-10">

            <div className="w-1/2">
            <img src={item.imageUrl} alt={`Slide ${index}`} className=" h-96" />
          </div>
              <div className="w-1/2 pr-4">
                <p className='text-xl md:text-2xl lg:tex-3xl'>{item.caption}</p>
                <p className='text-xl font-bold mt-2'>{item.name}</p>
                <p className=' font-bold'>{item.position}</p>
              </div>
           
            </div>
          </div>
        ))}
      </div>
      <button
        className="slider-btn absolute top-1/2 transform -translate-y-1/2 left-0"
        onClick={prevSlide}
        disabled={numItems === 1}
      >
       <GrPrevious></GrPrevious>
      </button>
      <button
        className="slider-btn absolute top-1/2 transform -translate-y-1/2 right-0"
        onClick={nextSlide}
        disabled={numItems === 1}
      >
       <GrNext></GrNext>
      </button>
    </div>
  );
};

export default Slider;
