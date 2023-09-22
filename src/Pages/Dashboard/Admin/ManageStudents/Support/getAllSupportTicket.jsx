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

  const handleCloseTicket = async (ticketNumber) => {
    // Close the ticket and update its status
    try {
      const response = await fetch(
        `https://cm-academy-test-server-production.up.railway.app/api/support-tickets/${ticketNumber}/close`,
        {
          method: "PUT",
        }
      );
  
      if (response.status === 200) {
        // Ticket closed successfully, update its status immediately
        const updatedTickets = supportTickets.map((ticket) =>
          ticket.TicketNumber === ticketNumber
            ? { ...ticket, status: "closed" }
            : ticket
        );
        setSupportTickets(updatedTickets);
      }
    } catch (error) {
      console.error("Error closing support ticket:", error);
    }
  };

  return (
    <div className="container mx-auto">
   
      <h1 className="text-2xl font-bold mb-4">All Support Tickets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {supportTickets.map((ticket) => (
           <div
           key={ticket._id}
           className="bg-white rounded-lg shadow-md p-4 mb-4 border-8"
         >
           <div>
             <div className="">
               <h3 className="text-2xl font-bold text-gray-700 font-LeagueSpartan text-left mb-3 mobile:max-w-[200px] tablet:max-w-md truncate whitespace-nowrap">
                 {ticket.Subject}
               </h3>
             </div>
             <p className="text-gray-500 text-sm font-LeagueSpartan mb-4">
               {" "}
               Created on: {ticket.Date}
             </p>
             <div className="flex items-center text-sm justify-between ">
               <p className="text-gray-500 text-sm font-LeagueSpartan">
                 TN : {ticket.TicketNumber}
               </p>
               <p
                 className={`  ${
                   ticket.status === "pending"
                     ? "text-[#61ba86] bg-[#e6fff2] border-green-300"
                     : "text-[#f44336] bg-[#ffebee]"
                 }  px-2 relative border rounded-[3px] `}
               >
                 {ticket.status === "pending" ? (
                   <span className="absolute -right-[4px] -top-[5px]">
                     <span className="relative flex h-3 w-3 ">
                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#047734] opacity-75"></span>
                       <span className="relative inline-flex rounded-full h-3 w-3 bg-[#61ba86]"></span>
                     </span>
                   </span>
                 ) : (
                   ""
                 )}

                 {ticket.status === "pending" ? "Active" : "Closed"}
               </p>
             </div>

             <hr className="mt-5" />
             <div className="flex items-center justify-between">
               <button
                 onClick={() => handleViewTicket(ticket.TicketNumber)}
                 className="text-gray-700 border hover:bg-[#58ec9631] font-bold py-1 px-2 font-mono text-sm rounded mt-4"
               >
                 View Ticket
               </button>

               {ticket.status === "pending" ? (
                 <button
                   onClick={() => handleCloseTicket(ticket.TicketNumber)}
                   className="text-gray-700 border flex gap-1  items-center hover:bg-[#58ec9631] font-bold py-1 px-2 font-mono text-sm rounded mt-4"
                 >
                   Close Ticket
                   <img className="h-4" src="{closeSupport}" alt="" />
                 </button>
               ) : (
                 <p className=" font-mono text-sm text-[#f44336]">
                   Ticket Closed!
                 </p>
               )}
             </div>
           </div>
         </div>
        ))}
      </div>
    </div>
  );
};

export default AllSupportTickets;
