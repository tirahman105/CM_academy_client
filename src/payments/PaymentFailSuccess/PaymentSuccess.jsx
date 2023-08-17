import { useParams, Link } from "react-router-dom";

const PaymentSuccess = () => {
    const { tranId } = useParams();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md" style={{ border: "2px solid #12C29F" }}>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment Successful!</h2>
                <p className="text-gray-600 mb-4">
                    Your payment for Transaction ID: <span className="font-semibold">{tranId}</span> has been successfully processed.
                </p>
                <p className="text-gray-600">
                    Thank you for choosing our services. You are now enrolled in the course.
                </p>
                <Link to="/" className="mt-6">
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Go to Your Courses
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default PaymentSuccess;
