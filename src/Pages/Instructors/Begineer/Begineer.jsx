import { useState } from "react";

const Tab = ({ label, isActive, onClick }) => {
  const activeStyles = isActive
    ? "border-b-2 border-blue-500 text-blue-500"
    : "text-gray-500";

  return (
    <button
      className={`px-4 py-2 ${activeStyles} focus:outline-none font-bold text-xl `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const TabContent = ({ title, paragraphs, imageSrc, isActive }) => {
  return isActive ? (
    <div className="flex flex-col-reverse md:flex-row p-4  justify-center items-center gap-5 md:gap-20">
      <div className="md:w-1/2 md:pr-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-2 text-2xl">
            {paragraph}
            {index === 1 && (
              <strong className="block mt-2 text-xl">How we help you</strong>
            )}
          </p>
        ))}
      </div>
      <div className="md:w-1/2">
        <img src={imageSrc} alt={title} className="w-full h-auto" />
      </div>
    </div>
  ) : null;
};

const Begineer = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    {
      title: "Plan your curriculum",
      paragraphs: [
        "You start with your passion and knowledge. Then choose a promising topic with the help of our Marketplace Insights tool.",
        "The way that you teach — what you bring to it — is up to you.",
        "How we help you We offer plenty of resources on how to create your first course. And, our instructor dashboard and curriculum pages help keep you organized",
      ],
      imageSrc: "https://s.udemycdn.com/teaching/plan-your-curriculum-v3.jpg",
    },
    {
      title: "Record your video",
      paragraphs: [
        "Use basic tools like a smartphone or a DSLR camera. Add a good microphone and you’re ready to start.",
        "If you don’t like being on camera, just capture your screen. Either way, we recommend two hours or more of video for a paid course.",
        "Our support team is available to help you throughout the process and provide feedback on test videos.",
      ],
      imageSrc: "https://s.udemycdn.com/teaching/record-your-video-v3.jpg",
    },
    {
      title: "Launch your Course",
      paragraphs: [
        "Gather your first ratings and reviews by promoting your course through social media and your professional networks.",
        "Your course will be discoverable in our marketplace where you earn revenue from each paid enrollment.",
        "Our custom coupon tool lets you offer enrollment incentives while our global promotions drive traffic to courses. There’s even more opportunity for courses chosen for Udemy Business.",
      ],
      imageSrc: "https://s.udemycdn.com/teaching/launch-your-course-v3.jpg",
    },
  ];

  return (
    <div className="max-w mx-auto p-20 mt-20">
      <h2 className="text-3xl md:text-5xl text-center font-bold"> How to begin</h2>
      <div className=" mt-20 flex  border-b border-gray-300  mb-4 justify-center ">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.title}
            isActive={activeTab === index}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>
      <div>
        {tabs.map((tab, index) => (
          <TabContent
            key={index}
            title={tab.title}
            paragraphs={tab.paragraphs}
            imageSrc={tab.imageSrc}
            isActive={activeTab === index}
          />
        ))}
      </div>
    </div>
  );
};

export default Begineer;
