import React, { useContext, useEffect, useState } from "react";
import { SlCalender } from "react-icons/sl";
import { AuthContext } from "../../../../providers/AuthProvider";
import ModalComponent from "./ModalComponet";
import { Link } from "react-router-dom";

const MyPayments = () => {
  const { user } = useContext(AuthContext);
  const [instructorPayment, setInstructorPayment] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  console.log(user);

  const [withdrawHistory, setWithdrawHistory] = useState([]);
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

  // get withdraw request from database by email by using useEffect hook

  useEffect(() => {
    fetch(
      `https://cm-academy-test-server-production.up.railway.app/getWithdrawRequests/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        const sortedWithdrawHistory = data.sort((a, b) => {
          const dateA = new Date(a.timestamp);
          const dateB = new Date(b.timestamp);
          return dateB - dateA; // Sort in descending order
        });

        setWithdrawHistory(sortedWithdrawHistory);
      });
  }, []);
  console.log(withdrawHistory);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [financeData, setFinanceData] = useState([]);

  useEffect(() => {
    const fetchFinanceData = async () => {
      try {
        const response = await fetch(
          `https://cm-academy-test-server-production.up.railway.app/getFinance/${user?.email}`
        );
        const data = await response.json();
        setFinanceData(data);
      } catch (error) {
        console.error("Error fetching finance data:", error);
      }
    };
    fetchFinanceData();
  }, [user]);

  console.log(financeData);

  const status = withdrawHistory.some((withdraw) => !withdraw.withdrawStatus);
  console.log(status);
  return (
    <div className="p-4">
      <h1 className="text-xl text-gray-700 font-bold font-Lexend mb-4">
        My Payments
      </h1>
      <p className="text-gray-600 mb-4 font-Lexend">
        Here you can see your payment history and can withdraw your earning!{" "}
      </p>
      <div className="divider mb-4"></div>

      <div className="flex justify-between items-center mb-4">
        {/* add a title and description    */}

        <h1 className="px-4 py-2 rounded-lg tablet:text-xl mobile:text-[14px] font-Lexend text-gray-700">
          Total amount:{" "}
          <span className="text-[#1bbf72f6] font-bold">
            {financeData[0]?.currentBalance} BDT
          </span>
        </h1>
        <button
          disabled={status}
          className={`bg-[#1bbf723b] tablet:text-sm mobile:text-[12px] border-2 border-[#1bbf726c]  text-gray-700 font-bold font-Poppins tablet:px-6 tablet:py-2 mobile:px-1 rounded-md shadow-md ${
            status ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={openModal}
        >
          Withdraw
          {status && (
            <p className="text-red-500 text-[10px] font-bold ">
              You have a pending withdraw request!
            </p>
          )}
        </button>
      </div>
      <div
        className="w-full px-4 py-3 text-sm border rounded mb-6 border-amber-100 bg-gray-600 text-white text-center"
        role="alert"
      >
        <p>
          You only can withdraw once at a time! After a successful withdraw you
          can request withdraw again!
          <br />
          Before request for a withdraw you must setup your{" "}
          <Link
            to="/dashboard/acc-setup"
            className="text-[#1bbf72f6] font-bold"
          >
            payment method!
          </Link>
        </p>
      </div>
      {status && ( // if there is a withdraw request then show withdraw request message
        <div
          className="w-full px-4 py-3 text-sm border rounded mb-6 text-center border-amber-100 bg-amber-50 text-amber-500"
          role="alert"
        >
          <p>Your balance will be adjusted after a successful withdraw!</p>
        </div>
      )}
      {
        // if there is no withdraw request then show no withdraw request message
        withdrawHistory.length === 0 && (
          <div className="flex justify-center items-center h-96">
            <h1 className="text-2xl font-bold text-gray-500">
              No withdraw request yet!
            </h1>
          </div>
        )
      }

      <table
        className={`table-auto w-full tablet:max-w-6xl mx-auto ${
          withdrawHistory.length === 0 ? "hidden" : ""
        }`}
      >
        <thead>
          <tr className="bg-gray-100 text-gray-700 font-bold tablet:text-lg mobile:text-sm divide-x-2">
            <th className="px-2 py-1">Date</th>

            <th className="p-2">Amount</th>

            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {withdrawHistory.map((payment) => (
            <tr
              key={payment._id}
              className="text-center font-semibold tablet:text-sm mobile:text-[12px] font-Lexend"
            >
              <td className="border p-2">{payment?.timestamp} </td>

              <td className="border p-2"> {payment?.totalAmount}Tk</td>

              <td className="border p-2">
                <div
                  className={` rounded-md tablet:text-sm mobile:text-[12px] w-20 mx-auto bg-[#1bbf723b] font-mono font-bold  text-[#1bbf72ee] ${
                    payment.withdrawStatus
                      ? "opacity-100"
                      : " text-[#bf1b1bc6] bg-[#bf1b1b4b]"
                  }`}
                >
                  {payment.withdrawStatus ? "Success" : "Pending"}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <ModalComponent
          onClose={closeModal}
          totalAmount={totalAmount}
          email={user?.email}
          name={user?.displayName || user?.fullName}
        />
      )}
      {instructorPayment && instructorPayment.length === 0 && (
        <div className="flex justify-center items-center h-96">
          <h1 className="text-2xl font-bold text-gray-500">
            Your course is not sold yet!
          </h1>
        </div>
      )}
    </div>
  );
};

export default MyPayments;
