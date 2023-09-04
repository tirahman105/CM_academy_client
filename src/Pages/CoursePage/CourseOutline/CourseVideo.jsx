import React, { useState, useEffect } from "react";
import { BiLike, BiDislike, BiBookmark, BiCheck } from "react-icons/bi";
import ReactPlayer from "react-player";

const CourseVideo = ({
  sessionList,
  currentSessionIndex,
  onSessionChange,
  onNextSession,
  onPreviousSession,
}) => {
  const currentSession = sessionList[currentSessionIndex];
  const [videoUrl, setVideoUrl] = useState(currentSession.videoLink);

  useEffect(() => {
    setVideoUrl(currentSession.videoLink);
  }, [currentSession.videoLink]);

  const handlePrevious = () => {
    if (currentSessionIndex > 0) {
      onSessionChange(currentSessionIndex - 1);
    } else {
      onPreviousSession();
    }
  };

  const handleNext = () => {
    if (currentSessionIndex < sessionList.length - 1) {
      onSessionChange(currentSessionIndex + 1);
    } else {
      onNextSession();
    }
    setVideoUrl(sessionList[currentSessionIndex].videoLink);
  };

  const [likeStatus, setLikeStatus] = useState("none");
  const [bookmarked, setBookmarked] = useState(false);

  const handleLike = () => {
    if (likeStatus === "liked") {
      setLikeStatus("none");
    } else {
      setLikeStatus("liked");
      setBookmarked(false);
    }
  };

  const handleDislike = () => {
    if (likeStatus === "disliked") {
      setLikeStatus("none");
    } else {
      setLikeStatus("disliked");
      setBookmarked(false);
    }
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="p-4 rounded-lg">
      <div className="aspect-w-16 aspect-h-9 lg:aspect-h-[500px] boxShadowCourse">
        <ReactPlayer
          url={videoUrl}
          controls
          width="100%"
          height="609px"
          key={videoUrl}
        />
      </div>
      <div className=" bg-opacity-10 rounded-lg backdrop-blur-sm shadow-md flex flex-col md:flex-row px-4 py-2 bg-gray-700 mt-4 justify-between  font-Lexend">
        <div className="flex items-center gap-3">
          <p className="text-xl font-bold">Feedback</p>
          {likeStatus === "liked" ? (
            <BiCheck className={`text-3xl cursor-pointer`} onClick={handleLike} />
          ) : (
            <BiLike
              className={`text-3xl ${
                likeStatus === "disliked" ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              onClick={likeStatus === "disliked" ? null : handleLike}
            />
          )}
          {likeStatus === "disliked" ? (
            <BiCheck
              className={`text-3xl mt-2 cursor-pointer`}
              onClick={handleDislike}
            />
          ) : (
            <BiDislike
              className={`text-3xl mt-2 ${
                likeStatus === "liked" ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              onClick={likeStatus === "liked" ? null : handleDislike}
            />
          )}
        </div>
        <div className="flex items-center gap-3">
          <p className="text-xl font-bold">Bookmark</p>
          {bookmarked ? (
            <BiCheck
              className={`text-3xl cursor-pointer`}
              onClick={handleBookmark}
            />
          ) : (
            <BiBookmark
              className={`text-3xl cursor-pointer`}
              onClick={handleBookmark}
            />
          )}
        </div>
      </div>
      <div className="mt-3 w-full md:flex md:justify-between items-center gap-4 lg:gap-8 xl:gap-16">
        <div className="w-full md:w-3/5">
          <h3 className="text-[16px] md:text-2xl font-bold font-Raleway mt-3">
            {currentSession.sessionTitle}
          </h3>
        </div>
        <div className="mt-3 w-full md:w-2/5 flex flex-col md:flex-row gap-2">
          <button
            className="bg-[#1bbf722c] font-Lexend font-bold text-black  border-2 border-[#1bbf72e4] hover:border-white duration-300 rounded-md py-2 md:py-3 px-4 md:w-1/2"
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            className="bg-[#1bbf72e4] font-Lexend font-bold hover:border-white border-2  text-white rounded-md py-2 md:py-3 px-4 md:w-1/2"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseVideo;
