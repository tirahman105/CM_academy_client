import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { HiCurrencyBangladeshi } from "react-icons/hi";
import { AuthContext } from "../../../../../providers/AuthProvider";
import withdrawIcon from "../../../../../assets/iconForDashboard/withdraw.png";
import { Link } from "react-router-dom";
const InstructorFinance = () => {
  const [balance, setBalance] = useState(1500); // Replace with your balance data
  const [withdrawn, setWithdrawn] = useState(0); // Replace with your withdrawn data

  const { user } = useContext(AuthContext);

  const [instructorPayment, setInstructorPayment] = useState([]);

  console.log(instructorPayment);

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
      } catch (error) {
        console.error("Error fetching payment history:", error);
      }
    };
    fetchPaymentHistory();
  }, [user?.email ]);

  console.log(instructorPayment);

  const totalAmount = instructorPayment.reduce((total, payment) => {
    if (payment.paidStatus) {
      return total + payment.course.coursePrice;
    }
    return total;
  }, 0);

  // store the total amount , Current balance , totalwithdrawn in database
  const sendPaymentDataToServer = async () => {
    try {
      console.log("Sending payment data to server:", {
        totalAmount,
        withdrawn,
      });

      const response = await fetch(
        `http://localhost:5000/updateFinance/${user?.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            totalAmount,
            balance: totalAmount - withdrawn,
            withdrawn,
          }),
        }
      );

      if (response.ok) {
        console.log("Payment data sent to the server successfully.");
        // You can update state or perform other actions as needed.
      } else {
        console.error("Failed to send payment data to the server.");
      }
    } catch (error) {
      console.error("Error sending payment data:", error);
    }
  };

  // Watch for changes in payment-related state variables and trigger the sendPaymentDataToServer function
  useEffect(() => {
    sendPaymentDataToServer();
  }, [totalAmount, withdrawn, user?.email]);
  console.log(totalAmount);
  return (
    <div className="flex justify-between mt-6 space-x-4">
      <div className="w-1/2 bg-green-100 rounded-lg mobile:px-2 tablet:px-4 tablet:py-2 shadow-md">
        <div className="flex items-center mobile:justify-center  ">
          <HiCurrencyBangladeshi className="text-[#1bbf72fa] mobile:text-[24px] laptop:text-3xl desktop:text-5xl" />
          <span className="text-4xl laptop:text-3xl mobile:text-2xl   font-bold text-green-600">
            {" "}
            {totalAmount}
          </span>
        </div>
        <h2 className="text-xl mobile:text-[12px] font-Montserrat laptop:text-[14px] font-semibold tablet:mb-4 text-green-800 mobile:text-center">
          Available Balance
        </h2>
        <Link to="/dashboard/my-payments">
          <p className="font-mono text-[11px] tablet:text-sm flex items-center gap-1 font-bold ">
            Withdraw
            <img className="h-4" src={withdrawIcon} alt="" />
          </p>
        </Link>
      </div>
      <div className=" w-1/2 bg-red-100 rounded-lg mobile:px-2 tablet:px-4 tablet:py-2 shadow-md">
        <div className="flex items-center mobile:justify-center ">
          <HiCurrencyBangladeshi className="text-gray-600 mobile:text-[24px] laptop:text-3xl desktop:text-5xl" />
          <span className="text-4xl laptop:text-3xl mobile:text-2xl font-bold text-gray-600">
            {withdrawn}
          </span>
        </div>
        <h2 className="text-xl mobile:text-[12px] font-Montserrat  laptop:text-[14px] font-semibold tablet:mb-4 text-gray-700 mobile:text-center">
          Withdrawn
        </h2>
      </div>
    </div>
  );
};

export default InstructorFinance;
