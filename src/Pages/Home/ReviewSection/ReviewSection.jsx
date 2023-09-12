
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


const ReviewSection = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
      // Fetch the JSON data
      fetch("https://cm-academy-test-server-production.up.railway.app/ratingAndFeedback")
        .then((response) => response.json())
        .then((data) => setReviews(data))
        .catch((error) => console.error("Error fetching blogs:", error));
    }, []);
    return (
        <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
           <div className="w-full mx-auto md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {reviews.map((review, index) => (
            <SwiperSlide key={index}>

                <div className='grid grid-cols-2 items-center gap-4 border rounded-md p-4'>
                    <div className='w-2/3'>
                        <img  src={review.studentImage} alt={review.studentName} />
                    </div>
                    <div>
                        <div className='text-start'>
                            <h1 className='font-bold text-xl my-2'>{review.courseTitle}</h1>
                            <p>{review.feedback}</p>
                        </div>
                        <hr className='my-2' />
                        <div className='text-start'>
                            <h3 className='text-xl font-bold'>{review.studentName}</h3>
                        </div>
                    </div>
                    
                    <div>

                    </div>
                </div>
              
                {/* <div className="bg-white rounded-lg shadow-md p-4 transform transition duration-300 hover:shadow-lg h-[430px] flex flex-col justify-between">
                  <div className="relative h-40 mb-4 overflow-hidden rounded-md hover:scale-105">
                    <img
                      src={review.studentImage}
                      alt={review.studentName}
                      className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-1">{review.studentName}</h2>
                   
                  </div>
                  <div className="flex justify-between items-center text-gray-400 text-sm">
                  
                  </div>
                </div> */}
             
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
    );
};

export default ReviewSection;