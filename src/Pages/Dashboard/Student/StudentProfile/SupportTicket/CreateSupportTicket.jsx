import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../../../providers/AuthProvider";
import SupportTicketDetails from "./SupportTicketDetails";

const CreateSupportTicket = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const { user } = useContext(AuthContext);
  const [supportTickets, setSupportTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null); // Store the selected ticket number

  useEffect(() => {
    fetchAllSupportTickets();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSubject("");
    setMessage("");
  };

  console.log(user?.email, user?.fullName);
  const fetchAllSupportTickets = () => {
    console.log("Fetching support tickets...");
    fetch(
      `https://cm-academy-test-server-production.up.railway.app/api/support-tickets/${user?.email}/${user?.fullName}`
    )
      .then((response) => {
        console.log("Got response from support tickets API:", response);
        return response.json();
      })
      .then((data) => {
        console.log("Got support tickets:", data);
        setSupportTickets(data);
      })
      .catch((error) => {
        console.error("Error fetching support tickets:", error);
      });
  };

  const handleSubmit = () => {
    if (subject.trim() === "" || message.trim() === "") {
      alert("Subject and message cannot be empty");
      return;
    }

    const newTicket = {
      studentName: user?.fullName,
      studentEmail: user?.email,
      sender: "student",
      subject,
      message,
    };

    // Make an HTTP POST request to your backend API to create the support ticket
    fetch("https://cm-academy-test-server-production.up.railway.app/api/support-tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTicket),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log("Support ticket created:", data);

        // Fetch all support tickets again to include the newly created ticket
        fetchAllSupportTickets();

        closeModal();
      })
      .catch((error) => {
        console.error("Error creating support ticket:", error);
      });
  };

  const handleViewTicket = (ticketNumber) => {
    setSelectedTicket(ticketNumber); // Set the selected ticket number
  };

  console.log(selectedTicket)
  console.log(supportTickets);
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={openModal}
      >
        Create a new support ticket
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-overlay"></div>
          <div className="modal-container p-4 md:p-8">
            <div className="bg-white rounded shadow-lg p-4">
              <h2 className="text-xl font-semibold mb-4">
                Create a new support ticket
              </h2>
              <div className="mb-4">
                <label htmlFor="subject" className="block mb-2">
                  Subject:
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full border border-gray-300 rounded py-2 px-3"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">
                  Message:
                </label>
                <textarea
                  id="message"
                  className="w-full border border-gray-300 rounded py-2 px-3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="text-right">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-600 font-bold py-2 px-4 rounded"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
        <h2 className="text-2xl font-semibold  mt-4 mb-2">Support Tickets</h2>
        {supportTickets.map((ticket) => (
          <div
            key={ticket._id}
            className="bg-white rounded-lg shadow-md p-4 mb-4"
          >
            <h3 className="text-lg font-semibold">{ticket.TicketNumber}</h3>
            <p className="text-gray-500">{ticket.StudentName}</p>
            <button
              onClick={() => handleViewTicket(ticket.TicketNumber)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
            >
              View Ticket
            </button>
          </div>
        ))}
      </div>
      {selectedTicket && (
        <SupportTicketDetails
          ticketNumber={selectedTicket}
          onClose={() => setSelectedTicket(null)} // Close the details view
        />
      )}
    </div>
  );
};

export default CreateSupportTicket;
