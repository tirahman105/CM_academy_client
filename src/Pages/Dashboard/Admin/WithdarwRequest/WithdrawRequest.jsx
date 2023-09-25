import React, { useState, useEffect } from "react";
import { CiViewList } from "react-icons/ci";

const WithdrawRequest = () => {
  const [showModal, setShowModal] = useState(false);
  const [withdrawalRequests, setWithdrawalRequests] = useState([]);
  const [bankDetails, setBankDetails] = useState({});

  const fetchWithdrawalRequests = async () => {
    try {
      const response = await fetch(
        "https://cm-academy-test-server-production.up.railway.app/getWithdrawRequests"
        );
        const data = await response.json();
        const sortedWithdrawHistory = data.sort((a, b) => {
          const dateA = new Date(a.timestamp);
          const dateB = new Date(b.timestamp);
          return dateB - dateA; // Sort in descending order
        });
        setWithdrawalRequests(sortedWithdrawHistory);
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {

    fetchWithdrawalRequests();
  }, []);

  const handleOpenModal = (instructorEmail) => {
    fetch(
      `https://cm-academy-test-server-production.up.railway.app/bank-account-setup/${instructorEmail}`
    )
      .then((response) => response.json())
      .then((data) => {
        setBankDetails(data);
        setShowModal(true);
      });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const approvedWithdrawals = withdrawalRequests.filter(
    (request) => request.withdrawStatus === true
  );
  const totalApprovedWithdrawals = approvedWithdrawals.length;
  console.log(totalApprovedWithdrawals);

  const unapprovedWithdrawals = withdrawalRequests.filter(
    (request) => request.withdrawStatus === false
  );
  const totalUnapprovedWithdrawals = unapprovedWithdrawals.length;
  console.log(totalUnapprovedWithdrawals);

  console.log(withdrawalRequests);
  const handleAction = async (id, action) => {
    console.log(id, action);
    try {
      const response = await fetch(
        `https://cm-academy-test-server-production.up.railway.app/updateWithdrawStatus/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ withdrawStatus: action === "approve" }), // Send true for "approve" and false for "hold"
        }
      );

      if (response.ok) {
        // Request successful, trigger a re-render by fetching updated data
        fetchWithdrawalRequests();
      } else {
        console.error("Error updating withdrawal status");
        // Handle errors as needed
      }
    } catch (error) {
      console.error("Error updating withdrawal status:", error);
      // Handle errors as needed
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-Lexend">
        Withdraw request by instructors to admin
      </h1>

      <div className="flex justify-between text-gray-700 items-center mt-4">
        <div className=" ">
          <h1 className="text-lg font-Lexend">
            Total Withdraw Request so far : {withdrawalRequests.length || 0}{" "}
          </h1>
          <h1 className="text-lg font-Lexend">
            Total Approved Withdraw Request : {totalApprovedWithdrawals || 0}{" "}
          </h1>

          <h1 className="text-lg font-Lexend">
            Total Unapproved Withdraw Request :{" "}
            {totalUnapprovedWithdrawals || 0}{" "}
          </h1>
        </div>
      </div>

      <div className="divider my-4"></div>

      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-100 text-gray-700 font-Lexend font-bold text-lg divide-x-2">
            <th className="px-4 py-2">Sl</th>
            <th className="px-4 py-2">Instructor name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Bank details</th>
            <th className="px-4 py-2">Withdraw amount</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {withdrawalRequests.map((request, index) => (
            <tr
              key={index}
              className="text-center font-semibold text-sm font-Lexend"
            >
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{request.name}</td>
              <td className="border px-4 py-2">{request.email}</td>
              <td className="border px-4 py-2">{request.timestamp}</td>
              <td className="border px-4 py-2 ">
                <button onClick={() => handleOpenModal(request.email)}>
                  <CiViewList className="text-5xl" />
                </button>
              </td>
              <td className="border px-6 py-2">{request.totalAmount} tk</td>
              <td
                className="border px-6 py-2"
              >
                <p className={` rounded-md  py-1 ${
                  request.withdrawStatus === true
                    ? "bg-[#1bbf723b] text-[#1bbf72ee]"
                    : "  text-[#bf1b1bc6] bg-[#bf1b1b4b]"
                }`}>

                {request.withdrawStatus === true ? "Approved" : "Pending"}
                </p>
              </td>
              <td className="border px-6 py-2">
                <select
                value="Select"
                  className="block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none"
                  onChange={(e) => handleAction(request._id, e.target.value)}
                >
                  <option className="p-2" >
                    Select
                  </option>
                  <option className="p-2" value="approve">
                    Approve
                  </option>
                  <option value="hold">Hold</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal modal-middle sm:modal-middle" open>
            <div
              method="dialog"
              className="modal-box  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
            >
              <div className=" mx-auto mb-2   font-Jost">
                <h1 className="">Account holder Name </h1>
                <p className="text-sm border rounded-md px-2 py-1">
                  {bankDetails[0]?.accountHolderName || "Not Added"}
                </p>
              </div>
              <div className=" mx-auto mb-2   font-Jost">
                <h1 className="">Account No.</h1>
                <p className="text-sm border rounded-md px-2 py-1">
                  {bankDetails[0]?.accountNo || "Not Added"}
                </p>
              </div>
              <div className=" mx-auto mb-2   font-Jost">
                <h1 className="">Routing Number</h1>
                <p className="text-sm border rounded-md px-2 py-1">
                  {bankDetails[0]?.routingNumber || "Not Added"}
                </p>
              </div>
              <div className=" mx-auto mb-2   font-Jost">
                <h1 className="">Bank Name</h1>
                <p className="text-sm border rounded-md px-2 py-1">
                  {bankDetails[0]?.bankName || "Not Added"}
                </p>
              </div>
              <div className=" mx-auto mb-2   font-Jost">
                <h1 className="">Bank Branch Name</h1>
                <p className="text-sm border rounded-md px-2 py-1">
                  {bankDetails[0]?.bankBranchName || "Not Added"}
                </p>
              </div>
              <div className=" mx-auto mb-2   font-Jost">
                <h1 className="">Phone Number</h1>
                <p className="text-sm border rounded-md px-2 py-1">
                  {bankDetails[0]?.phoneNumber || "Not Added"}
                </p>
              </div>

              <div className="modal-action">
                <button
                  type="button"
                  className="btn btn-error"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WithdrawRequest;
