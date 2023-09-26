import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";

const ChatRequest = () => {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);

  // Check if location.state exists and contains courseId
  const courseId = location.state?.courseId || null;
  const courseTitle = location.state?.courseTitle || null;
  console.log("courseTitle", courseTitle);

  useEffect(() => {
    if (courseId) {
      console.log("Fetching messages for course: ", courseId);
      fetch(
        `https://cm-academy-test-server-production.up.railway.app/api/messages/${courseId}`
      )
        .then((response) => {
          console.log("Response received: ", response);
          return response.json();
        })
        .then((data) => {
          console.log("Received messages: ", data);
          setMessages(data);
        })
        .catch((error) => {
          console.error("Error fetching messages:", error);
        });
    }
  }, [courseId]); // Add courseId as a dependency

  const handleViewMsg = ({ courseId, userId, userName, userEmail }) => {
    console.log(courseId, userId);
    console.log(user?.email);
    navigate("/dashboard/chat-w-student", {
      state: { courseId, userId, userName, userEmail },
    });
  };
  console.log(messages);
  return (
    <div className="px-2">
      <h1 className="font-Lexend mb-5 text-gray-700"> All Chat Request </h1>

      <p className="text-lg font-light mb-4 text-gray-700 font-Lexend mt-4">
        View messages from students related to your courses. You can respond to
        student queries and provide assistance as needed.
      </p>

      <hr />
     

      {/*<!-- Component: Warning Alert With Icon - Title - Text --> */}
      <div
        className="flex w-full items-start gap-4 rounded border mt-6 border-amber-100 bg-amber-50 px-4 py-3 text-sm text-amber-500"
        role="alert"
      >
        {/*  <!-- Icon --> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          role="graphics-symbol"
          aria-labelledby="title-07 desc-07"
        >
          <title id="title-07">Icon title</title>
          <desc id="desc-07">A more detailed description of the icon</desc>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        {/*  <!-- Text --> */}
        <div>
          <h3 className="mb-2 font-semibold">
          Please Report Student Misbehavior!
          </h3>
          <p>
          If a student misbehaves, please report it via the <span className="font-bold italic">Support Ticket </span> feature with their <span className="font-bold italic">Student ID</span>. We take all reports seriously and will investigate promptly. Your safety matters to us.
          </p>
        </div>
      </div>
      {/*<!-- End Warning Alert With Icon - Title - Text --> */}


      {messages.length === 0 && (
        <div className="flex justify-center items-center h-96">
          <h1 className="text-2xl font-bold text-gray-500">
            There is no request yet!
          </h1>
        </div>
      )}
      <div className="grid grid-cols-2">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message rounded-md  border-2 mb-2 mt-6  ${
              message.sender === "student" ? " " : "self-start"
            }`}
          >
            <div className="  mb-4 px-4 py-1 mr-5 ">
              <p className=" overflow-hidden font-Lexend text-lg ">
                {courseTitle}
              </p>
              <p className=" mt-4 text-sm font-Lexend font-light">Student Id : {message.userId}</p>
            </div>
            <button
              onClick={() =>
                handleViewMsg({
                  courseId: message.courseId,
                  userId: message.userId,
                  userName: message.userName,
                  userEmail: message.userEmail,
                })
              }
              className="border-2 mt-2 ml-2 text-sm font-Lexend font-medium rounded-lg px-2 py-1 mb-2"
            >
              View message
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatRequest;
