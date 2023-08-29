import { useState, useEffect, useContext } from 'react';
import { SlCalender } from 'react-icons/sl';
import { AuthContext } from '../../../../providers/AuthProvider';


const StudentPayment = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const { user } = useContext(AuthContext)
    const [paymentHistory, setPaymentHistory] = useState([]);

    console.log(paymentHistory);




    useEffect(() => {
        const fetchPaymentHistory = async () => {
            try {
                const response = await fetch(`http://localhost:5000/orders`);
                const data = await response.json();

                // Filter payment history based on user's email
                const userPaymentHistory = data.filter(order => order?.order?.studentEmail === user?.email);
                setPaymentHistory(userPaymentHistory);
            } catch (error) {
                console.error('Error fetching payment history:', error);
            }
        };
        fetchPaymentHistory();
    }, [user]);






    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 768); // Adjust this breakpoint as needed
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize); // Listen for window resize events

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);
    

    return (
        <div className="p-4">
            {isSmallScreen ? (
                // Card for small screens
                paymentHistory.map(payment => (
                    <div key={payment._id} className="bg-white shadow-md rounded-lg p-4 mb-4">
                        <h2 className="text-2xl font-bold mb-3">{payment.course.title}</h2>
                        <div className="flex justify-start items-center gap-3 text-gray-500">
                            <SlCalender />
                            <p>{payment.order.date}</p>
                        </div>
                        <p className="font-semibold mt-1 overflow-hidden">{payment.transactionId}</p>
                        <div className="divider"></div>
                        <div className="flex justify-between items-center">
                            <p className="text-xl font-bold">{payment.course.coursePrice}</p>
                            <p className="font-bold">Bkash</p>
                            <p className="btn btn-sm bg-[#12C29F] flex justify-center">
                                {payment.paidStatus ? 'Complete' : 'Pending'}
                            </p>
                        </div>
                    </div>
                ))
            ) : (
                // Table for large screens
                <table className="table-auto w-full">
                    <thead>
                        <tr className='bg-gray-100 text-[#12C29F] font-bold divide-x-2'>
                            <th className="px-4 py-2">Course</th>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Payment Method</th>
                            <th className="px-4 py-2">Amount</th>
                            <th className="px-4 py-2">Invoice No.</th>
                            <th className="px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {paymentHistory.map(payment => (
                            <tr key={payment._id}
                                className="text-center font-semibold">
                                <td className="border px-4 py-2">{payment.course.title} </td>
                                <td className="border px-4 py-2"> {payment.order.date}</td>
                                <td className="border px-4 py-2">Bkash</td>
                                <td className="border px-4 py-2"> {payment.course.coursePrice}</td>
                                <td className="border px-4 py-2">{payment.transactionId} </td>
                                <td className="border px-4 py-2">
                                    <div
                                        className={`p-2 rounded-md text-lg bg-[#12C29F] border-0 text-white ${payment.paidStatus ? 'opacity-100' : 'opacity-50'
                                            }`}
                                    >
                                        {payment.paidStatus ? 'Complete' : 'Pending'}
                                    </div>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            )
            }
        </div >
    );
};

export default StudentPayment;
