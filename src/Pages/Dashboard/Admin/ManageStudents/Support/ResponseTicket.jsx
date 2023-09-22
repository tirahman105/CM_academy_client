import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ResponseTicket = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const location = useLocation();

  const ticketNumber = location.state?.ticketNumber; // Use optional chaining

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

  // Function to handle sending a new message
  const handleSendMessage = () => {
    if (newMessage.trim() === "") {
      alert("Message cannot be empty");
      return;
    }

    const messageData = {
      sender: "admin", // Change to 'admin' if needed
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
  const handleClose = () => {
    window.history.back(); // This will navigate back to the previous page
  };
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">
        Support Ticket: {ticketNumber}
      </h2>
      <div className="mb-4">
        <div className="border border-gray-300 rounded p-3 h-60 overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={
                message.sender === "student" ? "text-left" : "text-right"
              }
            >
              <p className="mb-2">{message.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <textarea
          id="newMessage"
          className="w-full border border-gray-300 rounded py-2 px-3"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        ></textarea>
      </div>
      <div className="text-right">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handleSendMessage}
        >
          Send
        </button>
        <button
           onClick={handleClose}
          className="bg-gray-300 hover:bg-gray-400 text-gray-600 font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ResponseTicket;
