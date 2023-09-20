import React, { useState, useEffect } from "react";
import { HiCurrencyBangladeshi } from "react-icons/hi";
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';
import moneyLogo from '../../../../assets/money-icon.png'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const UpdatedWithdrawRequest = () => {
    const [showModal, setShowModal] = useState(false);
    const [withdrawalRequests, setWithdrawalRequests] = useState([]);

    console.log(withdrawalRequests)

    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const withdrawaToDisplay = withdrawalRequests.slice(startIndex, endIndex);

    const totalPages = Math.ceil(withdrawalRequests.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const [bankDetails, setBankDetails] = useState({});

    useEffect(() => {
        // Fetch withdrawal request data from the API
        const fetchWithdrawalRequests = async () => {
            try {
                const response = await fetch(
                    "https://cm-academy-test-server-production.up.railway.app/getWithdrawRequests"
                ); // Update the API endpoint as needed
                if (response.ok) {
                    const data = await response.json();
                    setWithdrawalRequests(data);
                } else {
                    console.error("Error fetching withdrawal requests");
                }
            } catch (error) {
                console.error("Error fetching withdrawal requests:", error);
            }
        };

        fetchWithdrawalRequests();
    }, []); // Empty dependency array to run this effect only once on component mount

    const handleOpenModal = (InstructorEmail) => {
        // https://cm-academy-test-server-production.up.railway.app/bank-account-setup/instructorEmail
        fetch(
            `https://cm-academy-test-server-production.up.railway.app/bank-account-setup/${InstructorEmail}`
        )
            .then((response) => response.json())
            .then((data) => {
                setBankDetails(data);
                console.log("data", data);
            });

        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <div>
            <div>
                {withdrawaToDisplay.map((request, index) => (
                    <div
                        key={index}
                        className="max-w-full bg-gray-100 rounded-lg p-4 flex items-center space-x-4 mt-2"
                    >
                        <img src={moneyLogo} alt="" className='w-20 h-20 object-cover rounded-md transition-transform duration-300 transform hover:scale-110' />
                        <div className="flex-1">
                            <p className="text-gray-900 font-bold text-lg">
                                {request.name}
                            </p>
                            <p className="text-sm text-gray-600">
                                {request.email}
                            </p>
                            <p className="text-sm text-gray-600">
                                {request.phoneNumber}
                            </p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <HiCurrencyBangladeshi />
                            <p className="text-gray-600 text-sm">{request.totalAmount} tk</p>
                        </div>
                        <button
                            className="border-2 hover:bg-black hover:text-white border-black text-black text-base px-4 py-2 rounded-lg transition duration-300"
                            onClick={() => handleOpenModal(request.email)}
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>

            <div className="mt-4 flex justify-center">
            <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="mr-2 tablet:px-3 tablet:py-1 bg-gray-200 rounded-md"
        >
            <GrFormPrevious></GrFormPrevious>
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
            <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`mx-1 px-3 py-1 text-sm ${
                    currentPage === index + 1
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-200'
                } rounded-md`}
            >
                {index + 1}
            </button>
        ))}
                <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="ml-2 tablet:px-3 tablet:py-1 bg-gray-200 rounded-md"
            >
                <p className="text-green-600">
                    <GrFormNext />
                </p>
            </button>
            </div>


            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="modal modal-bottom sm:modal-middle" open>
                        <div method="dialog" className="modal-box bg-slate-200 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
                            <div className="flex gap-3 items-center mx-auto mb-2">
                                <h1 className="w-1/2">Account holder Name </h1>
                                <input
                                    type="text"
                                    placeholder=""
                                    defaultValue={bankDetails[0]?.accountHolderName || ""}
                                    className="w-1/2 input input-bordered h-8"
                                />
                            </div>
                            <div className="flex gap-3 items-center mx-auto mb-2">
                                <h1 className="w-1/2">Account No.</h1>
                                <input
                                    type="text"
                                    placeholder=""
                                    defaultValue={bankDetails[0]?.accountNo || ""}
                                    className="w-1/2 input input-bordered h-8"
                                />
                            </div>
                            <div className="flex gap-3 items-center mx-auto mb-2">
                                <h1 className="w-1/2">Routing Number</h1>
                                <input
                                    type="text"
                                    placeholder=""
                                    defaultValue={bankDetails[0]?.routingNumber || ""}
                                    className="w-1/2 input input-bordered h-8"
                                />
                            </div>
                            <div className="flex gap-3 items-center mx-auto mb-2">
                                <h1 className="w-1/2">Bank Name</h1>
                                <input
                                    type="text"
                                    placeholder=""
                                    defaultValue={bankDetails[0]?.bankName || ""}
                                    className="w-1/2 input input-bordered h-8"
                                />
                            </div>
                            <div className="flex gap-3 items-center mx-auto mb-2">
                                <h1 className="w-1/2">Bank Branch Name</h1>
                                <input
                                    type="text"
                                    placeholder=""
                                    defaultValue={bankDetails[0]?.bankBranchName || ""}
                                    className="w-1/2 input input-bordered h-8"
                                />
                            </div>
                            <div className="flex gap-3 items-center mx-auto mb-2">
                                <h1 className="w-1/2">Phone Number</h1>
                                <input
                                    type="text"
                                    placeholder=""
                                    defaultValue={bankDetails[0]?.phoneNumber || ""}
                                    className="w-1/2 input input-bordered h-8"
                                />
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

export default UpdatedWithdrawRequest;
