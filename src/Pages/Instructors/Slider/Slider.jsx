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
    <div className="slider flex transition-transform duration-300" style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
        {items.map((item, index) => (
            <div key={index} className="slider-item flex-none w-full" style={{ minWidth: '100%' }}>
                <div className="flex flex-col md:flex-row items-center px-4 md:px-6 lg:px-10 xl:px-20 gap-4 md:gap-6 lg:gap-8">

                    <div className="w-1/2">
                        <img src={item.imageUrl} alt={`Slide ${index}`} className=" h-52 md:h-64 lg:h-72 xl:h-80" />
                    </div>
                    <div className="w-full md:w-1/2 pr-4">
                        <p className="text-base md:text-lg lg:text-xl xl:text-2xl">{item.caption}</p>
                        <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold mt-2">{item.name}</p>
                        <p className="text-sm md:text-base lg:text-lg xl:text-xl font-bold mt-1">{item.position}</p>
                    </div>

                </div>
            </div>
        ))}
    </div>
    <button className="slider-btn absolute top-1/2 transform -translate-y-1/2 left-0" onClick={prevSlide} disabled={numItems === 1}>
        <GrPrevious></GrPrevious>
    </button>
    <button className="slider-btn absolute top-1/2 transform -translate-y-1/2 right-0" onClick={nextSlide} disabled={numItems === 1}>
        <GrNext></GrNext>
    </button>
</div>

  );
};

export default Slider;
