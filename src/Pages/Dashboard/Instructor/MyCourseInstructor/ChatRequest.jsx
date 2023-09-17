import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChatRequest = ({ courseId }) => {
  const [messages, setMessages] = useState([]);

  const navigate = useNavigate();
  console.log(messages);
  useEffect(() => {
    // Fetch messages from the server when the component mounts
    fetchMessages();
  }, [courseId]);

  const fetchMessages = () => {
    // Fetch messages from the server based on userId and courseId
    fetch(`https://cm-academy-test-server-production.up.railway.app/api/messages/${courseId}`)
      .then((response) => response.json())
      .then((data) => {
        setMessages(data);
      })
      .catch((error) => {
        console.error("Error fetching messages:", error);
      });
  };
  // console.log(messages);

  const handleViewMsg = ({ courseId, userId }) => {
    console.log(courseId, userId);

    navigate("/dashboard/chat-w-student", { state: { courseId, userId } });
    
  };

  return (
    <div>
      <h1> All request Chatdff</h1>

      <div>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message rounded-md  border-2 mb-2   ${
              message.sender == "student" ? " " : "self-start"
            }`}
          >
            <div className="  mb-4 px-4 py-1 mr-5 ">
              <p className=" overflow-hidden ">
                Youre Course Id : {message.courseId}
              </p>

              <p className=" mt-4 timestamp">student Id : {message.userId}</p>
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
