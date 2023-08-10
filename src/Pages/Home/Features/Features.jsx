import { useState } from "react";

const Features = () => {


    const [selectedTitle, setSelectedTitle] = useState(null);

    // Mapping of titles to image URLs
    
    const titleToData = {
        'Recorded classes': {
          image: 'https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/q_auto/f_auto/c_scale,w_841/v1687694515/Shikho%20Website%20V3/Homepage/Feature%20Image%20Carousel/Live_and_Recorded_Class_m1e0eg',
          smallImage: 'https://cdn.apito.io/media/shikho_website_v2_8ma77/shikhoHomepageV3/13SX02ME9W_live_class.svg',
        },
        'class notes': {
            image: 'https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/q_auto/f_auto/c_scale,w_841/v1671090186/Shikho%20Website%20V3/Homepage/Feature%20Image%20Carousel/Website_Banner_Animeted_Video_841x656_qgv12n',
            smallImage: 'https://cdn.apito.io/media/shikho_website_v2_8ma77/shikhoHomepageV3/4NHE7RLLN2_class_note.svg',
        },
        'MCQ Test': {
            image: 'https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/q_auto/f_auto/c_scale,w_841/v1670221272/Shikho%20Website%20V3/Homepage/Feature%20Image%20Carousel/Website_Banner_%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%95%E0%A6%9F%E0%A6%BF%E0%A6%B8_MCQ_%E0%A6%9F%E0%A7%87%E0%A6%B8%E0%A7%8D%E0%A6%9F_841x656_gt6s6z',
            smallImage: 'https://cdn.apito.io/media/shikho_website_v2_8ma77/shikhoHomepageV3/X7BYBS85UQ_live_mcq_test.svg',
        },
        'Practice task': {
            image: 'https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/q_auto/f_auto/c_scale,w_841/v1670221271/Shikho%20Website%20V3/Homepage/Feature%20Image%20Carousel/Website_Banner_Live_Exam_841x656_om8gg0',
            smallImage: 'https://cdn.apito.io/media/shikho_website_v2_8ma77/shikhoHomepageV3/76E6MGTRAE_practice_mcq_test.svg',
        }
         
    }
    // Function to handle title click
    const handleTitleClick = (title) => {
      setSelectedTitle(title);
    }
  
    const initialTitle = Object.keys(titleToData)[0];

  return (
    <div className="mt-20 bg-[#1A213A]">
     <div>
     
     <h2 className="text-white text-3xl text-center p-10">Everything in CM Academic Program</h2>
     <p className="text-white text-center text-xl">To keep you ahead of the curve in class studies and board exam preparation, this program includes-</p>
     </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-10">
      <div className="w-4/5">
          {Object.keys(titleToData).map((title) => (
            <div
              key={title}
              className={`mt-4 flex   items-center cursor-pointer p-7 rounded md:bg-white  justify-center md:justify-start  gap-7   ${selectedTitle === title ? 'bg-blue-500 text-white border-2 border-blue-500' : ' text-black md:border border-gray-200'}`}
              onClick={() => handleTitleClick(title)}
            >
              <img
                src={titleToData[title].smallImage}
                alt={`${title} Small Image`}
                className="w-8 h-8 rounded-full mr-2"
              />
              <p style={{ fontSize: "24px" }} className="text-white md:text-gray-800">{title}</p> 
            </div>
          ))}
        </div>
        <div className=" ">
          <img
            src={selectedTitle ? titleToData[selectedTitle].image : titleToData[initialTitle].image}
            alt={`${selectedTitle || initialTitle} Image`}
            className="max-w-full h-auto mx-auto"
          />
        </div>


        
      </div>
    </div>
  );
};

export default Features;
