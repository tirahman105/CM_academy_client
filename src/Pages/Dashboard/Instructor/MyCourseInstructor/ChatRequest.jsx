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

  console.log("courseId", courseId);

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

  const handleViewMsg = ({ courseId, userId }) => {
    console.log(courseId, userId);
    console.log(user?.email);
    navigate("/dashboard/chat-w-student", { state: { courseId, userId } });
  };

  return (
    <div>
      <h1 className="font-Lexend mb-5"> All Chat Request </h1>
      <hr />

      {messages.length === 0 && (
        <div className="flex justify-center items-center h-96">
          <h1 className="text-2xl font-bold text-gray-500">
            There is no request yet!
          </h1>
        </div>
      )}
      <div>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message rounded-md  border-2 mb-2   ${
              message.sender === "student" ? " " : "self-start"
            }`}
          >
            <div className="  mb-4 px-4 py-1 mr-5 ">
              <p className=" overflow-hidden ">
                Your Course Id : {message.courseId}
              </p>
              <p className=" mt-4 timestamp">Student Id : {message.userId}</p>
            </div>
            <button
              onClick={() =>
                handleViewMsg({
                  courseId: message.courseId,
                  userId: message.userId,
                })
              }
              className="border-2 mt-2 ml-2 rounded-lg px-2 py-1 mb-2"
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
