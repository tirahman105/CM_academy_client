import { useState } from "react";

const Features = () => {


  const [selectedTitle, setSelectedTitle] = useState(null);

  // Mapping of titles to image URLs

  const titleToData = {
    'Recorded Classes': {
      image: 'https://i.ibb.co/JkS6sV7/cm-section-2.jpg',
      smallImage: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTALAhZyGhftFPa2gXluSYHgMC8mV_FAhu4ywYJCFEMHV8bM_Sr',

    },
    'Class Notes': {
      image: 'https://i.ibb.co/7kyLPzm/cm-section-3.jpg',
      smallImage: '  https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQp5GnMH28G5beVkRA7u2iVD-p6lkrXoD9oyIYQcpdirD68_iTe',
    },
    'MCQ Test': {
      image: 'https://i.ibb.co/7kLJNJ1/cm-section-4.jpg',
      smallImage: ' https://cdn-icons-png.flaticon.com/512/1457/1457316.png',
    },
    'Practice Task': {
      image: 'https://i.ibb.co/sQm06YF/cm-section-5.jpg',
      smallImage: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTJimt2-F5JNuTlIGrjw2LpAnWFCwYbOnCR9l-Pw9LHq1hTZTla',
    }

  }
  // Function to handle title click
  const handleTitleClick = (title) => {
    setSelectedTitle(title);
  }

  const initialTitle = Object.keys(titleToData)[0];

  return (
    <div className="mt-16 bg-white">
      <div>

        <h2 className="text-4xl font-bold mb-5 text-center text-[#12C29F]">
          Everything in CM Academic Program</h2>
        <p className="text-center font-semibold ">
          Our Instructors give  you best resources for every course</p>
      </div>


      <div className="flex flex-col-reverse  md:flex-row   gap-10  p-4 md:p-10">
        <div className="w-4/5 md:w-3/5 mx-auto lg:pl-10 lg:pt-[70px]">
          {Object.keys(titleToData).map((title) => (


            <div key={title}

              className={`mt-10 md:mt-14 flex   items-center justify-center md:justify-start cursor-pointer rounded bg-gradient-to-r from-[#ffffff] to-[#12C29F] h-14 md:h-20  ${selectedTitle === title ? '  text-white border-2 border-black' : ' text-black md:border border-gray-200'}`}
              onClick={() => handleTitleClick(title)}
            >
              <div className="w-2/5">
                <img
                  src={titleToData[title].smallImage}
                  alt={`${title} Small Image`}
                  className="w-20 h-20 md:w-28 md:h-28 rounded-full  relative right-4 md:right-5"
                />
              </div>

              <div className="w-4/5">
                <p className="text-black md:text-gray-800 text-xl md:text-2xl font-bold ">{title}</p>

              </div>

            </div>




          ))}
        </div>
        <div className=" w-full">
          <img
            src={selectedTitle ? titleToData[selectedTitle].image : titleToData[initialTitle].image}
            alt={`${selectedTitle || initialTitle} Image`}
            className="   max-w-full h-auto mx-auto mt-10   rounded-lg"
          />
        </div>



      </div>
    </div>
  );
};

export default Features;
