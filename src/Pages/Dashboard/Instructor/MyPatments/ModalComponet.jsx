import React from "react";

const ModalComponent = ({ onClose, totalAmount, email, name }) => {
  console.log("email", email);
  // Function to handle closing the modal
  const handleClose = () => {
    onClose();
  };

  const handleConfirm = async () => {
    try {
      // Add the withdrawStatus field
      const dataToSend = {
        name,
        totalAmount,
        email,
        withdrawStatus: false,
      };

      // Send a POST request to your backend API endpoint
      const response = await fetch("https://cm-academy-test-server-production.up.railway.app/storeWData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        // Data stored successfully, close the modal or perform other actions

        onClose();
        alert("Withdrawal request submitted successfully")
      } else {
        console.error("Error confirming withdrawal");
        // Handle errors as needed
      }
    } catch (error) {
      console.error("Error confirming withdrawal:", error);
      // Handle errors as needed
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 rounded-md">
      <div className="bg-opacity-25 backdrop-blur-sm absolute inset-0 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg max-w-md w-full relative">
          <button
            className="absolute top-2 right-4 text-white hover:text-red-300 hover:scale-125 text-2xl z-50"
            onClick={handleClose}
          >
            &times;
          </button>

          <div className="relative">
            <div className="absolute inset-0 backdrop-blur-sm bg-opacity-100 z-10"></div>
            <div className="bg-[#1bbf72f6] text-white p-4 rounded-t relative z-20">
              <h2 className="text-xl font-semibold">Withdraw Funds</h2>
            </div>
          </div>

          <div className="p-4">
            <div className="mb-4">
              <p className="text-gray-600 text-sm">Total Amount:</p>
              <p className="text-lg font-semibold">{totalAmount} BDT</p>
            </div>
            <p className="text-lg font-semibold text-center mb-4">
              Are you sure you want to withdraw this amount?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-red-300 text-gray-700 font-semibold font-Poppins px-2 py-1.5 rounded-md hover:scale-105 transition-all"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                className="bg-[#1bbf723b] text-gray-600 font-semibold font-Poppins px-2 py-1.5 rounded-md hover:scale-105 transition-all"
                onClick={handleConfirm}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
