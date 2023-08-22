  
import React, { useState } from 'react';
import { BiLike, BiDislike, BiBookmark, BiCheck } from 'react-icons/bi';

const CourseVideo = ({ videoList, currentModuleIndex, onModuleChange, onNextModule, onPreviousModule }) => {
  const currentVideo = videoList[currentModuleIndex];

  const handlePrevious = () => {
    if (currentModuleIndex > 0) {
      onModuleChange(currentModuleIndex - 1);
    } else {
      onPreviousModule();
    }
  };

  const handleNext = () => {
    if (currentModuleIndex < videoList.length - 1) {
      onModuleChange(currentModuleIndex + 1);
    } else {
      onNextModule();
    }
  };

  const [likeStatus, setLikeStatus] = useState('none'); // 'none', 'liked', 'disliked'
  const [bookmarked, setBookmarked] = useState(false);

  const handleLike = () => {
    if (likeStatus === 'liked') {
      setLikeStatus('none');
    } else {
      setLikeStatus('liked');
      setBookmarked(false); // Reset bookmarked state
    }
  };

  const handleDislike = () => {
    if (likeStatus === 'disliked') {
      setLikeStatus('none');
    } else {
      setLikeStatus('disliked');
      setBookmarked(false); // Reset bookmarked state
    }
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  const resetInteractions = () => {
    setLikeStatus('none');
    setBookmarked(false);
  };


  return (
    <div className="p-4 rounded-lg">
      <div className="aspect-w-16 aspect-h-9 lg:aspect-h-12">
        <iframe
          title="Course Video"
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${currentVideo.videoUrl}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="bg-gray-500 flex flex-col md:flex-row p-4 mt-4 justify-between text-white">
      
      <div className="flex items-center gap-3">
        <p className="text-xl font-bold">Feedback</p>
        {likeStatus === 'liked' ? (
          <BiCheck className={`text-3xl cursor-pointer`} onClick={handleLike} />
        ) : (
          <BiLike
            className={`text-3xl ${likeStatus === 'disliked' ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            onClick={likeStatus === 'disliked' ? null : handleLike}
          />
        )}
        {likeStatus === 'disliked' ? (
          <BiCheck className={`text-3xl mt-2 cursor-pointer`} onClick={handleDislike} />
        ) : (
          <BiDislike
            className={`text-3xl mt-2 ${likeStatus === 'liked' ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            onClick={likeStatus === 'liked' ? null : handleDislike}
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
          <h3 className="text-[16px] md:text-xl font-semibold mt-3">{currentVideo.module}</h3>
        </div>
        <div className="mt-3 w-full md:w-2/5 flex flex-col md:flex-row gap-2">
          <button className="btn btn-outline btn-secondary py-2 md:py-3 px-4 md:w-1/2" onClick={handlePrevious}>
            Previous
          </button>
          <button className="bg-green-500 text-white rounded-md py-2 md:py-3 px-4 md:w-1/2" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseVideo;

