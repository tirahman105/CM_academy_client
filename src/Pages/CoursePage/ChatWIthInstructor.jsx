import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ChatWithInstructor = ({ courseId, userId }) => {
  const [chatData, setChatData] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messageContainerRef = useRef(null);

  // Function to fetch chat data
  const fetchChatData = () => {
    fetch(`https://cm-academy-test-server-production.up.railway.app/api/messages/${courseId}/${userId}`)
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
      timestamp: new Date().toISOString(),
    };

    // Clear the input field
    setNewMessage("");

    // Send the new message to the server
    fetch(`https://cm-academy-test-server-production.up.railway.app/api/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        courseId: courseId,
        message,
      }),
    })
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

  return (
    <div className="chat-box">
      <div
        className="message-container pt-11  h-96 overflow-y-auto myComponentContainer"
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
                <div className="border rounded-md max-w-[60%] mb-4 px-4 py-1 mr-5 break-words">
                  <p className=" ">{message.content}</p>
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
      <div className="chat-input">
        <input
          className="border focus:outline-none text-gray-700  rounded-md p-2 w-full"
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWithInstructor;
