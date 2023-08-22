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
      imageSrc: "https://img.freepik.com/premium-vector/businessman-looking-board-it-s-full-stickers-appointment-announcements-along-with-meeting-times-negotiate-with-his-clients-flat-style-cartoon-illustration-vector_610956-1144.jpg?w=2000",
    },
    {
      title: "Add Your Content",
      paragraphs: [
        "Use basic tools like a smartphone or a DSLR camera. Add a good microphone and you’re ready to start.",
        "If you don’t like being on camera, just capture your screen. Either way, we recommend two hours or more of video for a paid course.",
        "Our support team is available to help you throughout the process and provide feedback on test videos.",
      ],
      imageSrc: "https://i.ibb.co/w6pJ5F7/upload.png",
    },
    {
      title: "Launch your Course",
      paragraphs: [
        "Gather your first ratings and reviews by promoting your course through social media and your professional networks.",
        "Your course will be discoverable in our marketplace where you earn revenue from each paid enrollment.",
        "Our custom coupon tool lets you offer enrollment incentives while our global promotions drive traffic to courses. There’s even more opportunity for courses chosen for Udemy Business.",
      ],
      imageSrc: "https://img.freepik.com/premium-vector/business-startup-successful-launching-product-with-rocket-concept-creative-ideas-entrepreneurial-concept-business-project-startup-process-idea-through-planning-strategy-time-management_735449-40.jpg?w=2000",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-5 md:p-10 lg:p-20 mt-5 md:mt-10 lg:mt-20">
    <h2 className="text-lg md:text-3xl lg:text-5xl text-center font-bold">How to begin</h2>
    <div className="mt-5 md:mt-10 lg:mt-20 flex flex-wrap border-b border-gray-300 mb-3 md:mb-4 lg:mb-6 justify-center">
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
 