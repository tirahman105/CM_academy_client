import React, { useEffect, useState } from "react";
import { useContext } from "react";
import ReactStars from "react-rating-stars-component";
import { AuthContext } from "../../../../providers/AuthProvider";

const RatingFeedbackForm = ({
  courseId,
  courseInstructor,
  courseTitle,
  courseCategory,
}) => {
  console.log(
    "for course page",
    courseId,
    courseInstructor,
    courseTitle,
    courseCategory
  );
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [hasSubmittedFeedback, setHasSubmittedFeedback] = useState(false);

  const { user } = useContext(AuthContext);
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  useEffect(() => {
    const fetchRatingAndFeedback = async () => {
      try {
        // Fetch rating and feedback for the current student and course
        const response = await fetch(
          `https://cm-academy-test-server-production.up.railway.app/ratingAndFeedback/${user?.email}/${courseId}`
        );
        const data = await response.json();

        if (data.length > 0) {
          // Student has already submitted feedback and rating
          setHasSubmittedFeedback(true);
        }
      } catch (error) {
        console.error("Error fetching rating and feedback:", error);
      }
    };

    fetchRatingAndFeedback();
  }, [user?.email, courseId]);

  const handleSubmit = async () => {
    // Validate the rating and feedback (e.g., check if they are not empty)
    if (rating === 0 || feedback.trim() === "") {
      alert("Please provide a rating and feedback.");
      return;
    }

    // Create a feedback object
    const feedbackData = {
      courseTitle,
      courseInstructor,
      courseId,
      rating,
      feedback,
      studentEmail: user?.email,
      studentName: user?.fullName,
      studentImage: user?.userImage,
      courseCategory,
    };

    try {
      // Call the API to submit feedback data to the server
      const response = await fetch(
        "https://cm-academy-test-server-production.up.railway.app/ratingAndFeedback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(feedbackData),
        }
      );

      if (response.status === 200) {
        // Feedback submitted successfully
        setHasSubmittedFeedback(true); // Update the state to trigger UI change
      } else {
        // Handle other response statuses (e.g., error handling)
        console.error("Failed to submit feedback.");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <div>
      {hasSubmittedFeedback ? (
        <p>Thank you for your feedback and rating.</p>
      ) : (
        <div>
          <h2 className="font-Raleway">Provide Feedback and Rating</h2>
          <ReactStars
            count={5}
            onChange={handleRatingChange}
            size={40}
            value={rating}
          />
          <textarea
            placeholder="Enter your feedback"
            value={feedback}
            onChange={handleFeedbackChange}
            className="w-full h-32 p-2 border border-gray-300 rounded-lg focus:outline-none text-gray-700 font-mono"
          />
          <button className="font-Lexend font-bold grBg   border border-[#36cbd3e6] hover:border-white duration-300 rounded-md py-1 md:py-1 px-2 md:w-1/3" onClick={handleSubmit}>Submit Feedback and Rating</button>
        </div>
      )}
    </div>
  );
};

export default RatingFeedbackForm;
