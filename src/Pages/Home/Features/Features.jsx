import { useState } from "react";
import educationAnimation from "../../../assets/education.json"
import Lottie from "lottie-react";

const Features = () => {


  const [selectedTitle, setSelectedTitle] = useState(null);

  // Mapping of titles to image URLs

  const titleToData = {
    'Recorded Classes': {
      image: 'https://i.ibb.co/JkS6sV7/cm-section-2.jpg',
      smallImage: 'https://i.ibb.co/0V42v4L/001-quiz.png',

    },
    'Class Notes': {
      image: 'https://i.ibb.co/7kyLPzm/cm-section-3.jpg',
      smallImage: 'https://i.ibb.co/WkVzwCw/002-tutorial.png',
    },
    'MCQ Test': {
      image: 'https://i.ibb.co/7kLJNJ1/cm-section-4.jpg',
      smallImage: 'https://i.ibb.co/44KXGjY/003-class-notes.png',
    },
    'Practice Task': {
      image: 'https://i.ibb.co/sQm06YF/cm-section-5.jpg',
      smallImage: 'https://i.ibb.co/WHwf972/004-agenda.png',
    }

  }
  // Function to handle title click
  const handleTitleClick = (title) => {
    setSelectedTitle(title);
  }

  // const initialTitle = Object.keys(titleToData)[0];

  return (
    <div className="mt-16  home-container">
      <div>

        {/* <h2 className="text-4xl font-bold mb-5 text-center text-[#12C29F]">
          Everything in CM Academic Program</h2>
        <p className="text-center font-semibold mb-10">
          Our Instructors give  you best resources for every course</p> */}
          <h1 className="text-4xl font-bold mb-5  font-Poppins">
          Everything in CM Academic Program
        </h1>
        <p className=" font-semibold mb-10">
        Our Instructors give  you best resources for every course
        </p>
      </div>
      <div className="flex flex-col-reverse  md:flex-row   gap-10 ">
        <div className="w-4/5 md:w-3/5 mx-auto lg:pt-16">
          {Object.keys(titleToData).map((title) => (


            <div key={title}

              className={`mt-10 md:mt-14 flex  items-center justify-center md:justify-start cursor-pointer shadow-lg rounded bg-[#1bbf721f] hover:scale-105 duration-500 border-2 border-[#1bbf723b] h-14 md:h-14  ${selectedTitle === title ? '  text-white bg-[#1bbf721f]  border-2 border-[#1bbf723b]' : ' text-black md:border border-gray-200'}`}
              onClick={() => handleTitleClick(title)}
            >
              <div className="w-2/5">
                <img
                  src={titleToData[title].smallImage}
                  alt={`${title} Small Image`}
                  className=" w-2/5 right-4 md:right-5"
                />
              </div>

              <div className="w-4/5">
                <p className="text-black md:text-gray-800 text-xl md:text-2xl font-bold ">{title}</p>

              </div>

            </div>




          ))}
        </div>
        <div className=" w-3/4">
          {/* <img
            src={selectedTitle ? titleToData[selectedTitle].image : titleToData[initialTitle].image}
            alt={`${selectedTitle || initialTitle} Image`}
            className="   max-w-full h-auto mx-auto mt-10   rounded-lg"
          /> */}
           <Lottie animationData={educationAnimation} loop={true} />
        </div>



      </div>
    </div>
  );
};

export default Features;
