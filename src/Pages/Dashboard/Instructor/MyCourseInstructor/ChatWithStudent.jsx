import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import "./ChatwIns.css";
import iconSent from "../../../../assets/iconForDashboard/iconSent.png";

const ChatWithStudent = () => {
  const [chatData, setChatData] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messageContainerRef = useRef(null);

  const location = useLocation();
  const courseId = location.state?.courseId; // Use optional chaining
  const userId = location.state?.userId; // Use optional chaining
  const userName = location.state?.userName; // Use optional chaining
  const userEmail = location.state?.userEmail; // Use optional chaining
  console.log(location);

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
      sender: "instructor",
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

  // Function to convert URLs in text to clickable links
  const convertTextToLinks = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(
      urlRegex,
      (url) => `<a href="${url}" target="_blank">${url}</a>`
    );
  };

  return (
    <div className="chat-box px-2">
      <h1 className="font-Lexend mb-5 text-gray-700">  Student Engagement through Chat</h1>
      <p className="text-lg font-light mb-4 text-gray-700 font-Lexend mt-4"> View messages from students related to your courses. You can respond to student queries and provide assistance as needed.</p>
      <hr />


      <div
        className="message-container mt-6 h-96 overflow-y-auto scrollbarForC8wittStu border rounded pt-11"
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
                className={`message ${
                  message.sender === "student"
                    ? "flex self-end justify-start mobile:ml-1 tablet:ml-6 "
                    : "flex self-start  justify-end"
                }`}
              >
                <div className="border rounded-md max-w-[60%] mb-4 px-4 py-1 tablet:mr-5 mobile:mr-1 break-words">
                  <p
                    className=" text-lg font-Lexend font-light mobile:text-sm "
                    dangerouslySetInnerHTML={{
                      __html: convertTextToLinks(message.content),
                    }}
                  />
                  <p
                    className={` ${
                      message.sender === "student" ? "text-right  " : "text-left"
                    } mt-4 timestamp text-[10px]`}
                  >
                    {message.timestamp}
                  </p>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
      <div className="chat-input flex gap-4 items-center mt-10">
       
        <textarea
         
          className="w-full text-sm border border-gray-300 rounded py-2 px-3 focus:outline-none"
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
          className="cursor-pointer h-10 border-4 border-gray-500 animate-pulse rounded-full p-2 "
          src={iconSent}
          alt=""
          onClick={handleSendMessage}
        />
      </div>
     
      {/*<!-- Component: Info Alert With Icon - Title - Text --> */}
      <div
        className="flex w-full items-start gap-4 mt-10 max-w-7xl mx-auto rounded border border-cyan-100 bg-cyan-50 px-4 py-3 text-sm text-cyan-500"
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
          aria-labelledby="title-08 desc-08"
        >
          <title id="title-08">Icon title</title>
          <desc id="desc-08">A more detailed description of the icon</desc>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
        {/*  <!-- Text --> */}
        <div>
          <h3 className="mb-2 font-semibold">Some tips to help students!</h3>
          <p>
          Communicate directly with your students through the chat feature. Provide guidance, answer questions, and share tips to help them succeed in their courses. Foster a supportive learning environment by staying accessible and responsive to your students' needs.
          </p>
        </div>
      </div>
      {/*<!-- End Info Alert With Icon - Title - Text --> */}


    </div>
  );
};

export default ChatWithStudent;
