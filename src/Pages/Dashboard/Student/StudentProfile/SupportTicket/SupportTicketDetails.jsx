import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import iconSent from "../../../../../assets/iconForDashboard/iconSent.png";
const SupportTicketDetails = ({ ticketNumber, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messageContainerRef = useRef(null);

  // Function to fetch ticket messages
  const fetchTicketMessages = () => {
    fetch(
      `https://cm-academy-test-server-production.up.railway.app/api/support-tickets/${ticketNumber}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMessages(data.messages);
      })
      .catch((error) => {
        console.error("Error fetching support ticket messages:", error);
      });
  };

  // Initial fetch when component mounts
  useEffect(() => {
    fetchTicketMessages();
  }, [ticketNumber]);

  // Scroll to the bottom of the message container
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Function to handle sending a new message
  const handleSendMessage = () => {
    if (newMessage.trim() === "") {
      alert("Message cannot be empty");
      return;
    }

    const messageData = {
      sender: "student", // Change to 'admin' if needed
      content: newMessage,
      timestamp: new Date().toLocaleString(), // Add timestamp with date
    };

    fetch(
      `https://cm-academy-test-server-production.up.railway.app/api/support-tickets/${ticketNumber}/add-message`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageData),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // Update the messages state with the new message
        setMessages([...messages, messageData]);
        setNewMessage("");
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };

  console.log("messages", messages);
  return (
    <div className="mt-12 ">
    
      <h2 className="text-xl font-semibold mb-4 font-Lexend ">
        Support Ticket Details of :{" "}
        <span className="italic font-bold">#{ticketNumber}</span>
      </h2>
      <div className="mb-4 relative">
        <button
        onClick={fetchTicketMessages}
        className="absolute -top-3 backdrop-blur-sm  right-[48%] z-10  text-sm border-2 w-14 rounded-md "> Refresh </button>
        <div
          ref={messageContainerRef}
          className="border border-gray-300 pt-11 rounded  mobile:h-72 tablet:h-96 overflow-y-auto "
        >
          {messages.map((message, index) => (
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
              <div className="border rounded-md max-w-[60%] tablet:text-lg mb-4 mobile:text-sm px-4 py-1 mr-5 break-words">
                <p className=" ">{message.content}</p>
                <p
                  className={` ${
                    message.sender === "student" ? "text-right " : "text-left"
                  } mt-4 timestamp text-[10px]`}
                >
                  {message.timestamp}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mb-4 flex gap-4 items-center">
        <textarea
          disabled={messages.status == "closed"}
          id="newMessage"
          className="w-full text-sm border border-gray-300 rounded py-2 px-3"
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
      <div className="text-right">
        <button
          className="bg-[#19b85bce] text-white font-bold py-1 px-2 mobile:text-sm rounded mr-2"
          onClick={handleSendMessage}
        >
          Send
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-600 mobile:text-sm font-bold py-1 px-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SupportTicketDetails;
