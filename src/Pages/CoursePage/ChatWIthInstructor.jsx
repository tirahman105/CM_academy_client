import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import iconSent from "../../assets/iconForDashboard/iconsendforCP.png";
import { tr } from "date-fns/locale";

const ChatWithInstructor = ({ courseId, userId, userEmail, userName }) => {
  const [chatData, setChatData] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messageContainerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenGuide, setIsOpenGuide] = useState(true);

  console.log(courseId, userId, userEmail, userName);
  // Function to fetch chat data
  const fetchChatData = () => {
    fetch(
      `https://cm-academy-test-server-production.up.railway.app/api/messages/${courseId}/${userId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setChatData(data);
        scrollToBottom();
      })
      .catch((error) => {
        console.error("Error fetching chat data:", error);
      });
  };

  useEffect(() => {
    fetchChatData();
  }, [courseId, userId]);

  const scrollToBottom = () => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const message = {
      sender: "student",
      content: newMessage,
      timestamp: format(new Date(), "dd/MM/yyyy HH:mm"),
    };

    // Clear the input field
    setNewMessage("");

    // Send the new message to the server
    fetch(
      `https://cm-academy-test-server-production.up.railway.app/api/messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: userName,
          userEmail: userEmail,
          userId: userId,
          courseId: courseId,
          message,
        }),
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log("Message sent successfully");
          // Update the chat data after successfully sending the message
          fetchChatData();
        } else {
          console.error(
            "Error sending message:",
            response.status,
            response.statusText
          );
        }
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatData]);

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-10%", height: "0px" },
  };

  return (
    <>
      {/*<!-- Component: Warning Alert With Icon - Title - Text --> */}
      <div
       onClick={() => setIsOpenGuide((isOpen) => !isOpen)}
        className="flex mt-6 relative  sm:w-5/6 sm:mx-auto backdrop-blur-md  bg-[#ced2d810]  boxShadowCourse border-[#36cbd330]    items-start gap-4 rounded border   px-4 py-3 text-sm text-amber-500"
        role="alert"
      >
        {/*  <!-- Icon --> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          role="graphics-symbol"
          aria-labelledby="title-07 desc-07"
        >
          <title id="title-07">Icon title</title>
          <desc id="desc-07">A more detailed description of the icon</desc>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        {/*  <!-- Text --> */}
        <div className="trunc">
          <h3 className="mb-2 font-semibold">Communication Guidelines!</h3>
          <p className="">
            Our instructors are here to help, but please note that they may not
            always be able to reply instantly. We encourage respectful and
            constructive communication. Spamming, using abusive language, or
            engaging in any form of harassment will not be tolerated.
          </p>
          
            <div
              onClick={() => setIsOpen((isOpen) => !isOpen)}
              className="bg-[#ced2d810] absolute mt-3 w-28 flex select-none justify-center py-[1px] rounded-b-xl text-white mobile:left-[35%]  tablet:left-[40%]   boxShadowCourse backdrop-blur-md cursor-pointer"
            >
             {isOpen ? "Close chat box" : "Open chat box"}
            </div>
         
        </div>
      </div>

      {/*<!-- End Warning Alert With Icon - Title - Text --> */}

      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        _dragX={true}  
       
        className="relative  mt-10  p-4 rounded-lg sm:w-5/6 sm:mx-auto backdrop-blur-md border bg-[#ced2d810] text-white boxShadowCourse border-[#36cbd330]  "
      >
        <button
          onClick={fetchChatData}
          className="absolute  -top-[1px] backdrop-blur-md  right-[48%] z-10 bg-[#ced2d810]  text-sm  w-14 rounded-md"
        >
          Refresh
        </button>
        <div
          className="message-container pt-11  h-96 overflow-y-auto myComponentContainer relative"
          ref={messageContainerRef}
        >
          <AnimatePresence initial={false}>
            {Array.isArray(chatData) &&
              chatData.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: -30 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.3 }}
                  className={`message  ${
                    message.sender === "student"
                      ? "flex self-end justify-end "
                      : "flex self-start ml-6 justify-start"
                  }`}
                >
                  <div className=" boxShadowCourse rounded-md max-w-[60%] mb-4 px-4 py-1 mr-5 break-words">
                    <p className="mobile:text-[13px] ">{message.content}</p>
                    <p
                      className={` ${
                        message.sender === "student"
                          ? "text-right "
                          : "text-left"
                      } mt-4 timestamp text-[10px]`}
                    >
                      {message.timestamp}
                    </p>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
        <div className="mb-4 flex gap-4 items-center">
          <textarea
            id="newMessage"
            className="w-full text-sm border bg-[#ced2d810] border-[#36cbd33b] rounded py-2 px-3 focus:outline-none "
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault(); // Prevent newline in textarea
                handleSendMessage(); // Call the function to send the message
              }
            }}
          ></textarea>
          <img
            className="cursor-pointer h-10 border-4 border-[#36cbd3cb] animate-pulse rounded-full p-2 "
            src={iconSent}
            alt=""
            onClick={handleSendMessage}
          />
        </div>
       
      </motion.div>
    </>
  );
};

export default ChatWithInstructor;
