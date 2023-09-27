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
    <div className="p-4 rounded-lg  sm:mx-auto backdrop-blur-md border bg-[#ced2d810] text-white boxShadowCourse border-[#36cbd330]">
      <div className="tablet:h-[500px] mobile:h-[300px] ">
        <ReactPlayer
          url={videoUrl}
          controls
          width="100%"
          height="100%"
          key={videoUrl}
        />
      </div>
      <div className=" bg-opacity-10 rounded-lg backdrop-blur-sm shadow-md flex  md:flex-row px-4 py-2 border-[#36cbd330]  border mt-4 justify-between  font-Lexend">
        <div className="flex items-center gap-3">
          <p className="text-[12px] sm:text-sm font-bold">Feedback</p>
          {likeStatus === "liked" ? (
            <BiCheck className={`text-[14px] sm:text-lg cursor-pointer text-[#36cbd3e6]`} onClick={handleLike} />
          ) : (
            <BiLike
              className={`text-[14px] sm:text-lg text-[#36cbd3e6] ${
                likeStatus === "disliked" ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              onClick={likeStatus === "disliked" ? null : handleLike}
            />
          )}
          {likeStatus === "disliked" ? (
            <BiCheck
              className={`text-[14px] sm:text-lg mt-2 cursor-pointer text-[#36cbd3e6]`}
              onClick={handleDislike}
            />
          ) : (
            <BiDislike
              className={`text-[14px] sm:text-lg mt-2 text-[#36cbd3e6] ${
                likeStatus === "liked" ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              onClick={likeStatus === "liked" ? null : handleDislike}
            />
          )}
        </div>
        <div className="flex items-center gap-3">
          <p className="text-[12px] sm:text-sm font-bold">Bookmark</p>
          {bookmarked ? (
            <BiCheck
              className={`text-[14px] sm:text-lg cursor-pointer text-[#36cbd3e6] `}
              onClick={handleBookmark}
            />
          ) : (
            <BiBookmark
              className={`text-[14px] sm:text-lg cursor-pointer text-[#36cbd3e6]`}
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
        <div className="mt-3 w-full md:w-2/5 flex sm:flex-col justify-end md:flex-row gap-2">
          <button
            className=" font-Lexend font-bold grBg mobile:text-[12px] tablet:text-[12px]  border border-[#36cbd3e6] hover:border-white duration-300 rounded-md py-1 md:py-1 px-2 md:w-1/3"
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            className=" font-Lexend font-bold grBg mobile:text-[12px] tablet:text-[12px]  border-[#36cbd3e6] border text-white rounded-md py-1 md:py-1 px-2 md:w-1/3"
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