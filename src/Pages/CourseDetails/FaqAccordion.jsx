import React from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const FaqAccordion = ({ faqData, activeFaq, handleToggleFaq }) => {
  return (
    <div className="border-2 py-5 px-2 sm:w-[55%] rounded-md font-Lexend mb-16">
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`py-5 md:px-5 border-b duration-500 group select-none ${
            activeFaq === index ? "is-active bg-white" : ""
          }`}
        >
          <div className="flex items-center cursor-pointer">
            <div
              className={`w-full font-bold text-sm ${
                activeFaq === index ? "font-bold" : ""
              }`}
              onClick={() => handleToggleFaq(index)}
            >
              {faq.question}
            </div>
            <div
              className={`text-xl cursor-pointer duration-500 ${
                activeFaq === index ? "rotate-[270deg]" : ""
              }`}
              onClick={() => handleToggleFaq(index)}
            >
              {activeFaq === index ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </div>
          </div>
          <div
            className={`overflow-hidden duration-700 max-h-0 bg-gray-100 rounded-md text-sm flex items-center ${
              activeFaq === index ? "max-h-[300px]   py-2 pr-2 md:pr-6 pl-2 md:pl-8 mt-4 " : ""
            }`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
