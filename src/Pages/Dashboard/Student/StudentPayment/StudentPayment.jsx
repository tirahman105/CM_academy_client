import { useState, useEffect, useContext } from "react";
import { SlCalender } from "react-icons/sl";
import { AuthContext } from "../../../../providers/AuthProvider";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { HiCurrencyBangladeshi } from "react-icons/hi";

const StudentPayment = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { user } = useContext(AuthContext);
  const [paymentHistory, setPaymentHistory] = useState([]);
  const itemsPerPage = isSmallScreen ? 3 : 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPageCount = Math.ceil(paymentHistory.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage - 1; // Calculate the last index of the displayed range
  const visiblePaymentHistory = paymentHistory.slice(startIndex, endIndex + 1); // Adjust the visibleCourses range

  console.log(paymentHistory);

  useEffect(() => {
    const fetchPaymentHistory = async () => {
      try {
        const response = await fetch(
          `https://cm-academy-test-server-production.up.railway.app/orders`
        );
        const data = await response.json();

        // Filter payment history based on user's email
        const userPaymentHistory = data.filter(
          (order) => order?.order?.studentEmail === user?.email
        );
        setPaymentHistory(userPaymentHistory);
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
    window.addEventListener("resize", checkScreenSize); // Listen for window resize events

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
console.log(paymentHistory.length);
  return (
    <div className="p-4 desktop:w-4/5 desktop:mx-auto">
      <div className="border p-4">
        <div className="my-5 ">
          <h1 className=" text-lg">Payment History</h1>
          <p className="text-base mb-4">Payment histories of student</p>
          <hr />

        

        </div>
        {isSmallScreen ? (
          // Card for small screens
          visiblePaymentHistory.map((payment, index) => (
            <div
              key={payment._id}
              className="bg-white border shadow-md rounded-md p-4 mb-4 relative"
            >
              <h2 className="text-2xl font-bold mb-3 bg-gray-700 text-white shadow-md rounded-e-md left-0 w-12 text-center absolute">
                {startIndex + index + 1}
              </h2>
              <h2 className="text-2xl font-bold mb-3 h-10  text-white  rounded-e-md ">
                
              </h2>
              <h2 className="text-xl font-bold mb-3 font-Lexend text-gray-700">{payment.course.title}</h2>
              <div className="flex justify-start text-sm items-center gap-1 font-mono text-gray-600">
                <p>Purchase date :</p>
                <SlCalender />
                <p>{payment.order.date}</p>
              </div>
              <p className="font-semibold text-sm mt-1 overflow-hidden font-mono text-gray-600">
                Trx : {payment.transactionId}
              </p>
              <div className="divider"></div>
              <div className="flex justify-between items-center">
                <p className="text-sm font-bold flex items-center font-mono ">
                <HiCurrencyBangladeshi className="text-gray-700 font-mono text-xl" />
                  {payment.course.coursePrice}
                </p>
                <p className="font-bold text-base ">Bkash</p>
                <p className=" text-sm rounded-md px-1 shadow-md font-mono bg-[#40BF72] text-white flex justify-center">
                  {payment.paidStatus ? "Complete" : "Pending"}
                </p>
              </div>
            </div>
          ))
        ) : (
          // Table for large screens
          <table className="table-auto w-full tablet:text-sm desktop:text-base">
            <thead>
              <tr className="bg-[#211e1e] text-white text-center font-bold divide-x-2">
                <th className="px-2 py-2">SL</th>
                <th className="px-2 py-2">Course</th>
                <th className="px-2 py-2">Date</th>
                <th className="px-2 py-2">Payment Method</th>
                <th className="px-2 py-2">Amount</th>
                <th className="px-2 py-2">Invoice No.</th>
                <th className="px-2 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {visiblePaymentHistory.map((payment, index) => (
                <tr
                  key={payment._id}
                  className="text-left hover:bg-slate-100 duration-150"
                >
                  <td className="border text-center px-1 py-2 ">
                    {startIndex + index + 1}
                  </td>
                  <td className="border px-1 text-center py-2">
                    {payment.course.title}{" "}
                  </td>
                  <td className="border px-1 text-center py-2">
                    {" "}
                    {payment.order.date}
                  </td>
                  <td className="border px-1 text-center py-2">Bkash</td>
                  <td className="border px-1 text-center py-2">
                    {" "}
                    {payment.course.coursePrice}
                  </td>
                  <td className="border px-1 text-center py-2">
                    {payment.transactionId}
                  </td>
                  <td className="border px-2 text-center py-2">
                    <div
                      className={`px-1 rounded-md text-sm bg-[#40BF72] desktop:w-4/5 desktop:mx-auto text-center border-0 text-white ${
                        payment.paidStatus ? "opacity-100" : "opacity-50"
                      }`}
                    >
                      {payment.paidStatus ? "Complete" : "Pending"}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Pagination controls */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="mr-2 px-3 py-1 bg-gray-200 rounded-md"
          >
            <GrFormPrevious></GrFormPrevious>
          </button>
          {Array.from({ length: totalPageCount }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-3 py-1 text-sm ${
                currentPage === index + 1
                  ? "bg-[#211e1e] text-white"
                  : "bg-gray-200"
              } rounded-md`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPageCount}
            className="ml-2 px-3 py-1 bg-gray-200 rounded-md"
          >
            <p className="text-green-600">
              <GrFormNext />
            </p>
          </button>
        </div>
        {paymentHistory.length === 0 && ( <div className="flex justify-center items-center h-96"> 
            
            <p className="text-2xl font-bold text-gray-500">No Payment History</p>
            </div>)

          }
      </div>
     
    </div>
  );
};

export default StudentPayment;
