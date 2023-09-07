// import React, { useContext, useState } from "react";
// import DashboardTopNav from "../../Shared/DashboardTopNav/DashboardTopNav";
// import { AuthContext } from "../../../../providers/AuthProvider";

// const BankAccountSetup = () => {
//   const { user } = useContext(AuthContext);
//   const [bankDetails, setBankDetails] = useState({});

//   const initialFormData = {
//     InstructorEmail: user?.email,
//     email: "",
//     accountHolderName: "",
//     accountNo: "",
//     routingNumber: "",
//     bankName: "",
//     bankBranchName: "",
//     phoneNumber: "",
//   };

//   const [formData, setFormData] = useState({ ...initialFormData });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("https://cm-academy-test-server-production.up.railway.app/bank-account-setup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert("Bank account setup data submitted successfully");
//         // Clear the form fields by resetting formData to its initial state
//         setFormData({ ...initialFormData });
//         // Optionally, you can redirect the user to a success page or perform other actions.
//       } else {
//         console.error("Error submitting bank account setup data");
//         // Handle errors as needed
//       }
//     } catch (error) {
//       console.error("Error submitting bank account setup data:", error);
//       // Handle errors as needed
//     }
//   };

//   fetch(
//     `https://cm-academy-test-server-production.up.railway.app/bank-account-setup/${user?.email}`
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       setBankDetails(data);
//       console.log("data", data);
//     });
//     return (
//         <div>
           
//             <div className='w-2/4 mx-auto pt-10'>
//                 <h1 className='text-center text-2xl bg-gray-200 my-2 mb-5'>Bank Account Setup</h1>
//                 <form onSubmit={handleSubmit}>
//                     <div className='flex gap-3 items-center mx-auto mb-2'>
//                         <h1 className='w-1/2'>Email</h1>
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleInputChange}
//                             placeholder="Enter your email"
//                             className="w-1/2 input input-bordered h-8"
//                         />
//                     </div>
//                     <div className='flex gap-3 items-center mx-auto mb-2'>
//                         <h1 className='w-1/2'>Account holder Name</h1>
//                         <input
//                             type="text"
//                             name="accountHolderName"
//                             value={formData.accountHolderName}
//                             onChange={handleInputChange}
//                             placeholder="Enter account holder name"
//                             className="w-1/2 input input-bordered h-8"
//                         />
//                     </div>
//                     <div className='flex gap-3 items-center mx-auto mb-2'>
//                         <h1 className='w-1/2'>Account No.</h1>
//                         <input
//                             type="text"
//                             name="accountNo"
//                             value={formData.accountNo}
//                             onChange={handleInputChange}
//                             placeholder="Enter account number"
//                             className="w-1/2 input input-bordered h-8"
//                         />
//                     </div>
//                     <div className='flex gap-3 items-center mx-auto mb-2'>
//                         <h1 className='w-1/2'>Routing Number</h1>
//                         <input
//                             type="number"
//                             name="routingNumber"
//                             value={formData.routingNumber}
//                             onChange={handleInputChange}
//                             placeholder="Enter routing number"
//                             className="w-1/2 input input-bordered h-8"
//                         />
//                     </div>
//                     <div className='flex gap-3 items-center mx-auto mb-2'>
//                         <h1 className='w-1/2'>Bank Name</h1>
//                         <input
//                             type="text"
//                             name="bankName"
//                             value={formData.bankName}
//                             onChange={handleInputChange}
//                             placeholder="Enter bank name"
//                             className="w-1/2 input input-bordered h-8"
//                         />
//                     </div>
//                     <div className='flex gap-3 items-center mx-auto mb-2'>
//                         <h1 className='w-1/2'>Bank Branch Name</h1>
//                         <input
//                             type="text"
//                             name="bankBranchName"
//                             value={formData.bankBranchName}
//                             onChange={handleInputChange}
//                             placeholder="Enter bank branch name"
//                             className="w-1/2 input input-bordered h-8"
//                         />
//                     </div>
//                     <div className='flex gap-3 items-center mx-auto mb-2'>
//                         <h1 className='w-1/2'>Phone Number</h1>
//                         <input
//                             type="number"
//                             name="phoneNumber"
//                             value={formData.phoneNumber}
//                             onChange={handleInputChange}
//                             placeholder="Enter phone number"
//                             className="w-1/2 input input-bordered h-8"
//                         />
//                     </div>
//                     <div className='flex justify-center'>
//                         <button type="submit" className='ml-16 p-1 my-2 bg-green-500 rounded'>
//                             Submit
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default BankAccountSetup;


// import React, { useContext, useState } from "react";
// import DashboardTopNav from "../../Shared/DashboardTopNav/DashboardTopNav";
// import { AuthContext } from "../../../../providers/AuthProvider";

// const BankAccountSetup = () => {
//   const { user } = useContext(AuthContext);
//   const [bankDetails, setBankDetails] = useState({});

//   const initialFormData = {
//     InstructorEmail: user?.email,
//     email: "",
//     accountHolderName: "",
//     accountNo: "",
//     routingNumber: "",
//     bankName: "",
//     bankBranchName: "",
//     phoneNumber: "",
//   };

//   const [formData, setFormData] = useState({ ...initialFormData });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("https://cm-academy-test-server-production.up.railway.app/bank-account-setup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert("Bank account setup data submitted successfully");
//         // Clear the form fields by resetting formData to its initial state
//         setFormData({ ...initialFormData });
//         // Optionally, you can redirect the user to a success page or perform other actions.
//       } else {
//         console.error("Error submitting bank account setup data");
//         // Handle errors as needed
//       }
//     } catch (error) {
//       console.error("Error submitting bank account setup data:", error);
//       // Handle errors as needed
//     }
//   };

//   fetch(
//     `https://cm-academy-test-server-production.up.railway.app/bank-account-setup/${user?.email}`
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       setBankDetails(data);
//       console.log("data", data);
//     });
//     return (
//         <div>
           
//             <div className='w-2/4 mx-auto pt-10'>
//                 <h1 className='text-center text-2xl bg-gray-200 my-2 mb-5'>Bank Account Setup</h1>
                // <form onSubmit={handleSubmit}>
                //     <div className='flex gap-3 items-center mx-auto mb-2'>
                //         <h1 className='w-1/2'>Email</h1>
                //         <input
                //             type="email"
                //             name="email"
                //             value={formData.email}
                //             onChange={handleInputChange}
                //             placeholder="Enter your email"
                //             className="w-1/2 input input-bordered h-8"
                //         />
                //     </div>
                //     <div className='flex gap-3 items-center mx-auto mb-2'>
                //         <h1 className='w-1/2'>Account holder Name</h1>
                //         <input
                //             type="text"
                //             name="accountHolderName"
                //             value={formData.accountHolderName}
                //             onChange={handleInputChange}
                //             placeholder="Enter account holder name"
                //             className="w-1/2 input input-bordered h-8"
                //         />
                //     </div>
                //     <div className='flex gap-3 items-center mx-auto mb-2'>
                //         <h1 className='w-1/2'>Account No.</h1>
                //         <input
                //             type="text"
                //             name="accountNo"
                //             value={formData.accountNo}
                //             onChange={handleInputChange}
                //             placeholder="Enter account number"
                //             className="w-1/2 input input-bordered h-8"
                //         />
                //     </div>
                //     <div className='flex gap-3 items-center mx-auto mb-2'>
                //         <h1 className='w-1/2'>Routing Number</h1>
                //         <input
                //             type="number"
                //             name="routingNumber"
                //             value={formData.routingNumber}
                //             onChange={handleInputChange}
                //             placeholder="Enter routing number"
                //             className="w-1/2 input input-bordered h-8"
                //         />
                //     </div>
                //     <div className='flex gap-3 items-center mx-auto mb-2'>
                //         <h1 className='w-1/2'>Bank Name</h1>
                //         <input
                //             type="text"
                //             name="bankName"
                //             value={formData.bankName}
                //             onChange={handleInputChange}
                //             placeholder="Enter bank name"
                //             className="w-1/2 input input-bordered h-8"
                //         />
                //     </div>
                //     <div className='flex gap-3 items-center mx-auto mb-2'>
                //         <h1 className='w-1/2'>Bank Branch Name</h1>
                //         <input
                //             type="text"
                //             name="bankBranchName"
                //             value={formData.bankBranchName}
                //             onChange={handleInputChange}
                //             placeholder="Enter bank branch name"
                //             className="w-1/2 input input-bordered h-8"
                //         />
                //     </div>
                //     <div className='flex gap-3 items-center mx-auto mb-2'>
                //         <h1 className='w-1/2'>Phone Number</h1>
                //         <input
                //             type="number"
                //             name="phoneNumber"
                //             value={formData.phoneNumber}
                //             onChange={handleInputChange}
                //             placeholder="Enter phone number"
                //             className="w-1/2 input input-bordered h-8"
                //         />
                //     </div>
                //     <div className='flex justify-center'>
                //         <button type="submit" className='ml-16 p-1 my-2 bg-green-500 rounded'>
                //             Submit
                //         </button>
                //     </div>
                // </form>
//             </div>
//         </div>
//     );
// };

// export default BankAccountSetup;


import React, { useContext, useState, useEffect } from "react";
import DashboardTopNav from "../../Shared/DashboardTopNav/DashboardTopNav";
import { AuthContext } from "../../../../providers/AuthProvider";

const BankAccountSetup = () => {
  const { user } = useContext(AuthContext);
  const [bankDetails, setBankDetails] = useState({});
  const [showForm, setShowForm] = useState(true); // State to control whether to show the form

  const initialFormData = {
    InstructorEmail: user?.email,
    email: "",
    accountHolderName: "",
    accountNo: "",
    routingNumber: "",
    bankName: "",
    bankBranchName: "",
    phoneNumber: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://cm-academy-test-server-production.up.railway.app/bank-account-setup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Bank account setup data submitted successfully");
        // Clear the form fields by resetting formData to its initial state
        setFormData({ ...initialFormData });
        // Optionally, you can redirect the user to a success page or perform other actions.
      } else {
        console.error("Error submitting bank account setup data");
        // Handle errors as needed
      }
    } catch (error) {
      console.error("Error submitting bank account setup data:", error);
      // Handle errors as needed
    }
  };

  useEffect(() => {
    // Fetch bank details here and update the state accordingly
    fetch(
      `https://cm-academy-test-server-production.up.railway.app/bank-account-setup/${user?.email}`
    )
      .then((response) => response.json())
      .then((data) => {
        setBankDetails(data);
        console.log("data", data);
        // Check if bankDetails is not empty and set showForm accordingly
        setShowForm(Object.keys(data).length === 0);
      });
  }, [user?.email]);

  return (
    <div>
      <div className="w-2/4 mx-auto pt-10">
        {showForm ? (
          <>
            <h1 className="text-center text-2xl bg-gray-200 my-2 mb-5">
              Bank Account Setup
            </h1>
            <form onSubmit={handleSubmit}>
                    <div className='flex gap-3 items-center mx-auto mb-2'>
                        <h1 className='w-1/2'>Email</h1>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            className="w-1/2 input input-bordered h-8"
                        />
                    </div>
                    <div className='flex gap-3 items-center mx-auto mb-2'>
                        <h1 className='w-1/2'>Account holder Name</h1>
                        <input
                            type="text"
                            name="accountHolderName"
                            value={formData.accountHolderName}
                            onChange={handleInputChange}
                            placeholder="Enter account holder name"
                            className="w-1/2 input input-bordered h-8"
                        />
                    </div>
                    <div className='flex gap-3 items-center mx-auto mb-2'>
                        <h1 className='w-1/2'>Account No.</h1>
                        <input
                            type="text"
                            name="accountNo"
                            value={formData.accountNo}
                            onChange={handleInputChange}
                            placeholder="Enter account number"
                            className="w-1/2 input input-bordered h-8"
                        />
                    </div>
                    <div className='flex gap-3 items-center mx-auto mb-2'>
                        <h1 className='w-1/2'>Routing Number</h1>
                        <input
                            type="number"
                            name="routingNumber"
                            value={formData.routingNumber}
                            onChange={handleInputChange}
                            placeholder="Enter routing number"
                            className="w-1/2 input input-bordered h-8"
                        />
                    </div>
                    <div className='flex gap-3 items-center mx-auto mb-2'>
                        <h1 className='w-1/2'>Bank Name</h1>
                        <input
                            type="text"
                            name="bankName"
                            value={formData.bankName}
                            onChange={handleInputChange}
                            placeholder="Enter bank name"
                            className="w-1/2 input input-bordered h-8"
                        />
                    </div>
                    <div className='flex gap-3 items-center mx-auto mb-2'>
                        <h1 className='w-1/2'>Bank Branch Name</h1>
                        <input
                            type="text"
                            name="bankBranchName"
                            value={formData.bankBranchName}
                            onChange={handleInputChange}
                            placeholder="Enter bank branch name"
                            className="w-1/2 input input-bordered h-8"
                        />
                    </div>
                    <div className='flex gap-3 items-center mx-auto mb-2'>
                        <h1 className='w-1/2'>Phone Number</h1>
                        <input
                            type="number"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            placeholder="Enter phone number"
                            className="w-1/2 input input-bordered h-8"
                        />
                    </div>
                    <div className='flex justify-center'>
                        <button type="submit" className='ml-16 p-1 my-2 bg-green-500 rounded'>
                            Submit
                        </button>
                    </div>
                </form>
          </>
        ) : (
          <>
          <h1 className="text-center text-2xl bg-gray-200 my-2 mb-5">
            Bank Account information
          </h1>
          <form onSubmit={handleSubmit}>
                  <div className='flex gap-3 items-center mx-auto mb-2'>
                      <h1 className='w-1/2'>Email</h1>
                      <input
                          type="email"
                          name="email"
                          defaultValue={user?.email || ""}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          className="w-1/2 input input-bordered h-8"
                      />
                  </div>
                  <div className='flex gap-3 items-center mx-auto mb-2'>
                      <h1 className='w-1/2'>Account holder Name</h1>
                      <input
                          type="text"
                          name="accountHolderName"
                          defaultValue={bankDetails[0]?.accountHolderName || ""}
                          onChange={handleInputChange}
                          placeholder="Enter account holder name"
                          className="w-1/2 input input-bordered h-8"
                          readOnly
                      />
                  </div>
                  <div className='flex gap-3 items-center mx-auto mb-2'>
                      <h1 className='w-1/2'>Account No.</h1>
                      <input
                          type="text"
                          name="accountNo"
                          defaultValue={bankDetails[0]?.accountNo || ""}
                          onChange={handleInputChange}
                          placeholder="Enter account number"
                          className="w-1/2 input input-bordered h-8"
                          readOnly
                      />
                  </div>
                  <div className='flex gap-3 items-center mx-auto mb-2'>
                      <h1 className='w-1/2'>Routing Number</h1>
                      <input
                          type="number"
                          name="routingNumber"
                          defaultValue={bankDetails[0]?.routingNumber || ""}
                          onChange={handleInputChange}
                          placeholder="Enter routing number"
                          className="w-1/2 input input-bordered h-8"
                          readOnly
                      />
                  </div>
                  <div className='flex gap-3 items-center mx-auto mb-2'>
                      <h1 className='w-1/2'>Bank Name</h1>
                      <input
                          type="text"
                          name="bankName"
                          defaultValue={bankDetails[0]?.bankName || ""}
                          onChange={handleInputChange}
                          placeholder="Enter bank name"
                          className="w-1/2 input input-bordered h-8"
                          readOnly
                      />
                  </div>
                  <div className='flex gap-3 items-center mx-auto mb-2'>
                      <h1 className='w-1/2'>Bank Branch Name</h1>
                      <input
                          type="text"
                          name="bankBranchName"
                          defaultValue={bankDetails[0]?.bankBranchName || ""}
                          onChange={handleInputChange}
                          placeholder="Enter bank branch name"
                          className="w-1/2 input input-bordered h-8"
                          readOnly
                      />
                  </div>
                  <div className='flex gap-3 items-center mx-auto mb-2'>
                      <h1 className='w-1/2'>Phone Number</h1>
                      <input
                          type="number"
                          name="phoneNumber"
                          defaultValue={bankDetails[0]?.phoneNumber || ""}
                          onChange={handleInputChange}
                          placeholder="Enter phone number"
                          className="w-1/2 input input-bordered h-8"
                          readOnly
                      />
                  </div>
                  <div className='flex justify-center'>
                      <button type="submit" className='ml-16 p-1 my-2 bg-green-500 rounded'>
                          Submit
                      </button>
                  </div>
              </form>
        </>
        )}
      </div>
    </div>
  );
};

export default BankAccountSetup;
