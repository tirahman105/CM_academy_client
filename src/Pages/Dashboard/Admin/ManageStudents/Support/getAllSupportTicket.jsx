import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const AllSupportTickets = () => {
  const [supportTickets, setSupportTickets] = useState([]);

  const navigate = useNavigate();
  // Fetch all support tickets when the component mounts
  useEffect(() => {
    fetchAllSupportTickets();
  }, []);

  const fetchAllSupportTickets = () => {
    // Make a GET request to your API endpoint to fetch all support tickets
    fetch(
      "https://cm-academy-test-server-production.up.railway.app/api/support-tickets"
    )
      .then((response) => response.json())
      .then((data) => {
        setSupportTickets(data);
      })
      .catch((error) => {
        console.error("Error fetching support tickets:", error);
      });
  };
  console.log(supportTickets);

  const handleViewTicket = (ticketNumber) => {
    //  send ticket number to the response ticket page with state  like this :  navigate("/courseDetailsDynamic", { state: { course } });
    console.log(ticketNumber);
    navigate("/dashboard/response-ticket ", { state: { ticketNumber } });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">All Support Tickets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {supportTickets.map((ticket) => (
          <div key={ticket._id} className="bg-white rounded-md shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">
              Ticket Number: {ticket.TicketNumber}
            </h2>
            <p className="text-gray-600">Student Name: {ticket.StudentName}</p>
            <p className="text-gray-600">Subject: {ticket.Subject}</p>
            <p className="text-gray-600">Status: {ticket.status}</p>
            <p className="text-gray-600">Date: {ticket.Date}</p>

            <button
              onClick={() => handleViewTicket(ticket.TicketNumber)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2"
            >
              View Ticket
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSupportTickets;
