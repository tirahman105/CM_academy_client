import React, { useState, useEffect } from "react";
import { HiCurrencyBangladeshi } from "react-icons/hi";
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
                        className="max-w-full bg-gray-100 rounded-lg mobile:px-1 mobile:py-2 tablet:px-2 tablet:py-1 flex mobile:space-x-1 items-center desktop:space-x-6 tablet:space-x-6 laptop:space-x-2  mt-2"
                    >
                        <img src={moneyLogo} alt="" className='tablet:w-20 tablet:h-20 mobile:w-10 mobile:h-10 laptop:w-14 laptop:h-14 desktop:w-20 desktop:h-20 object-cover rounded-md transition-transform duration-300 transform hover:scale-110' />
                        <div className="flex-1 min-w-[100px]">
                            <p className="text-gray-900 mobile:text-[14px] tablet:text-sm font-bold desktop:text-lg truncate">
                                {request.name}
                            </p>
                            <p className="text-sm text-gray-600 truncate">
                                {request.email}
                            </p>
                            
                        </div>
                        <div className="flex items-center">
                            <HiCurrencyBangladeshi className="text-gray-600 text-sm" />
                            <p className="text-gray-600 text-sm font-bold">{request.totalAmount}</p>
                        </div>
                        <button
                            className="border-2 hover:bg-black hover:text-white border-black text-black mobile:text-[12px] mobile:px-1  tablet:px-4 tablet:py-2 text-sm rounded-lg transition duration-300"
                            onClick={() => handleOpenModal(request.email)}
                        >
                            Details
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
                <div className="fixed inset-0 flex items-center justify-center z-50 ">
                    <div className="modal modal-bottom tablet:modal-middle mobile:px-3  pb-5" open>
                        <div method="dialog" className="modal-box bg-slate-200 sm:w-1/2 tablet:w-1/2 lg:w-1/4 xl:w-1/4 ">
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
