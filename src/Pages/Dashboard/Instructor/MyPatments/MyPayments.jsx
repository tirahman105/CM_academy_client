// import { useContext, useEffect, useState } from "react";
// import { SlCalender } from "react-icons/sl";
// import { AuthContext } from "../../../../providers/AuthProvider";

// const MyPayments = () => {
//   const [isSmallScreen, setIsSmallScreen] = useState(false);
//   const { user } = useContext(AuthContext);
//   const [instructorPayment, setInstructorPayment] = useState([]);

//   console.log(instructorPayment);

//   useEffect(() => {
//     const fetchPaymentHistory = async () => {
//       try {
//         const response = await fetch(
//           `https://cm-academy-test-server-production.up.railway.app/orders`
//         );
//         const data = await response.json();

//         // Filter payment history based on user's email
//         const instructorPaymentHis = data.filter(
//           (order) => order?.course?.instructorEmail == user?.email
//         );
//         setInstructorPayment(instructorPaymentHis);
//       } catch (error) {
//         console.error("Error fetching payment history:", error);
//       }
//     };
//     fetchPaymentHistory();
//   }, [user]);

//   console.log(instructorPayment);

//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsSmallScreen(window.innerWidth < 768); // Adjust this breakpoint as needed
//     };

//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize); // Listen for window resize events

//     return () => {
//       window.removeEventListener("resize", checkScreenSize);
//     };
//   }, []);

//   const totalAmount = instructorPayment.reduce((total, payment) => {
//     if (payment.paidStatus) {
//       return total + payment.course.coursePrice;
//     }
//     return total;
//   }, 0);


//   const paidPayments = instructorPayment.filter(payment => payment.paidStatus);

// console.log(paidPayments)
//   return (
//     <div className="p-4">
//       <div className="flex justify-between items-center mb-4 ">
//         <h1 className="px-4 py-2  rounded-lg font-Lexend">
//           Total amount:{" "}
//           <span className="text-[#1bbf72f6] font-bold">{totalAmount} BDT</span>
//         </h1>
//         <button className="bg-[#1bbf723b] border-2 border-[#1bbf726c]  text-gray-700 font-bold font-Poppins px-6 py-2 rounded-md shadow-md">
//           Withdraw
//         </button>
//       </div>

//       {isSmallScreen ? (
//         // Card for small screens
//         paidPayments.map((payment) => (
//           <div
//             key={payment._id}
//             className="bg-white shadow-md rounded-lg p-4 mb-4"
//           >
//             <h2 className="text-2xl font-bold mb-3">{payment.course.title}</h2>
//             <div className="flex justify-start items-center gap-3 text-gray-500">
//               <SlCalender />
//               <p>{payment.order.date}</p>
//             </div>
//             <p className="font-semibold mt-1 py-1 overflow-hidden">
//               {payment.transactionId}
//             </p>
//             <div className="divider"></div>
//             <div className="flex justify-between items-center">
//               <p className="text-xl font-bold">{payment.course.coursePrice}</p>
//               <p className="font-bold">Bkash</p>
//               <p className="btn btn-sm bg-[#12C29F] flex justify-center">
//                 {payment.paidStatus ? "Paid" : "Not paid"}
//               </p>
//             </div>
//           </div>
//         ))
//       ) : (
//         // Table for large screens
//         <table className="table-auto w-full">
//           <thead>
//             <tr className="bg-gray-100 text-[#1bbf72ee] font-bold text-lg divide-x-2">
//               <th className="px-4 py-2">Course</th>
//               <th className="px-4 py-2">Date</th>
//               <th className="px-4 py-2">Payment Method</th>
//               <th className="px-4 py-2">Amount</th>
//               <th className="px-4 py-2">Invoice No.</th>
//               <th className="px-4 py-2">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {paidPayments.map((payment) => (
//               <tr key={payment._id} className="text-center font-semibold text-sm font-Lexend">
//                 <td className="border px-4 py-2">{payment.course.title} </td>
//                 <td className="border px-4 py-2"> {payment.order.date}</td>
//                 <td className="border px-4 py-2">Mobile Banking</td>
//                 <td className="border px-4 py-2">
//                   {" "}
//                   {payment.course.coursePrice}
//                 </td>
//                 <td className="border px-4 py-2">{payment.transactionId} </td>
//                 <td className="border px-6 py-2">
//                   <div
//                     className={` rounded-md text-lg bg-[#1bbf723b] font-mono font-bold  text-[#1bbf72ee] ${
//                       payment.paidStatus ? "opacity-100" : "opacity-50"
//                     }`}
//                   >
//                     {payment.paidStatus ? "Paid" : "NotPaid"}
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default MyPayments;



import React, { useContext, useEffect, useState } from "react";
import { SlCalender } from "react-icons/sl";
import { AuthContext } from "../../../../providers/AuthProvider";
import ModalComponent from "./ModalComponet";


const MyPayments = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { user } = useContext(AuthContext);
  const [instructorPayment, setInstructorPayment] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  console.log(user);

  useEffect(() => {
    const fetchPaymentHistory = async () => {
      try {
        const response = await fetch(
          `https://cm-academy-test-server-production.up.railway.app/orders`
        );
        const data = await response.json();

        // Filter payment history based on user's email
        const instructorPaymentHis = data.filter(
          (order) => order?.course?.instructorEmail == user?.email
        );
        setInstructorPayment(instructorPaymentHis);

        // Calculate the total amount
        const total = instructorPaymentHis.reduce((acc, payment) => {
          if (payment.paidStatus) {
            return acc + payment.course.coursePrice;
          }
          return acc;
        }, 0);
        setTotalAmount(total);
      } catch (error) {
        console.error("Error fetching payment history:", error);
      }
    };
    fetchPaymentHistory();
  }, [user]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust this breakpoint as needed
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="px-4 py-2 rounded-lg font-Lexend">
          Total amount:{" "}
          <span className="text-[#1bbf72f6] font-bold">{totalAmount} BDT</span>
        </h1>
        <button
          className="bg-[#1bbf723b] border-2 border-[#1bbf726c]  text-gray-700 font-bold font-Poppins px-6 py-2 rounded-md shadow-md"
          onClick={openModal}
        >
          Withdraw
        </button>
      </div>

      {isSmallScreen ? (
        // Card for small screens
        instructorPayment.map((payment) => (
          <div
            key={payment._id}
            className="bg-white shadow-md rounded-lg p-4 mb-4"
          >
            <h2 className="text-2xl font-bold mb-3">{payment.course.title}</h2>
            <div className="flex justify-start items-center gap-3 text-gray-500">
              <SlCalender />
              <p>{payment.order.date}</p>
            </div>
            <p className="font-semibold mt-1 py-1 overflow-hidden">
              {payment.transactionId}
            </p>
            <div className="divider"></div>
            <div className="flex justify-between items-center">
              <p className="text-xl font-bold">{payment.course.coursePrice}</p>
              <p className="font-bold">Bkash</p>
              <p className="btn btn-sm bg-[#12C29F] flex justify-center">
                {payment.paidStatus ? "Paid" : "Not paid"}
              </p>
            </div>
          </div>
        ))
      ) : (
        // Table for large screens
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-100 text-[#1bbf72ee] font-bold text-lg divide-x-2">
              <th className="px-4 py-2">Course</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Payment Method</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Invoice No.</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {instructorPayment.map((payment) => (
              <tr
                key={payment._id}
                className="text-center font-semibold text-sm font-Lexend"
              >
                <td className="border px-4 py-2">{payment.course.title} </td>
                <td className="border px-4 py-2"> {payment.order.date}</td>
                <td className="border px-4 py-2">Mobile Banking</td>
                <td className="border px-4 py-2">
                  {" "}
                  {payment.course.coursePrice}
                </td>
                <td className="border px-4 py-2">{payment.transactionId} </td>
                <td className="border px-6 py-2">
                  <div
                    className={` rounded-md text-lg bg-[#1bbf723b] font-mono font-bold  text-[#1bbf72ee] ${
                      payment.paidStatus ? "opacity-100" : "opacity-50"
                    }`}
                  >
                    {payment.paidStatus ? "Paid" : "Not Paid"}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {isModalOpen && (
        <ModalComponent onClose={closeModal} totalAmount={totalAmount} email={user?.email} name={user?.displayName}  />
      )}
      {
        instructorPayment && instructorPayment.length === 0 && ( 
          <div className="flex justify-center items-center h-96">
            <h1 className="text-2xl font-bold text-gray-500">
              Your course is not sold yet!
            </h1>
          </div>
        )
        
      }
    </div>
  );
};

export default MyPayments;
