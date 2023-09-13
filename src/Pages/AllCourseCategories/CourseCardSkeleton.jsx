import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import the CSS for shimmering effect
import { motion } from "framer-motion";

function CourseCardSkeleton() {
  const cardAnimation = {
    initial: { y: 10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -10, opacity: 0 },
    transition: { duration: 0.2 },
  };

  // const imageAnimation = {
  //   initial: { opacity: 0 },
  //   animate: { opacity: 1 },
  //   transition: { delay: 0.2 },
  // };

  // const instructorAnimation = {
  //   initial: { opacity: 0 },
  //   animate: { opacity: 1 },
  //   transition: { delay: 0.3 },
  // };

  // const titleAnimation = {
  //   initial: { opacity: 0, y: 10 },
  //   animate: { opacity: 1, y: 0 },
  //   transition: { delay: 0.2 },
  // };

  // const priceAnimation = {
  //   initial: { opacity: 0 },
  //   animate: { opacity: 1 },
  //   transition: { delay: 0.4 },
  // };

  // const detailsAnimation = {
  //   initial: { opacity: 0 },
  //   animate: { opacity: 1 },
  //   transition: { delay: 0.5 },
  // };

  return (
    <SkeletonTheme baseColor="#d1d1d1">
      <motion.div {...cardAnimation} className="rounded-lg duration-700 shadow-md border-4 backdrop-blur-md bg-opacity-25 space-y-2">
        <motion.div  className="relative">
          <Skeleton height={176} />
          <motion.div  className="shadow-md text-xs w-56 border-2 text-white bg-opacity-80 backdrop-blur-md flex items-center gap-2 absolute rounded-e-md px-4 py-[4px] bottom-3 z-10">
            <Skeleton circle width={24} height={24} />
            <Skeleton width={100} />
          </motion.div>
        </motion.div>
        <motion.div  className="px-5 h-14">
          <Skeleton height={20} width={200} />
        </motion.div>
        <motion.div  className="flex items-center gap-1 px-4">
          <Skeleton width={24} height={24} />
          <Skeleton width={80} />
        </motion.div>
        <motion.div  className="font-mono h-14 flex justify-between px-4 items-center">
          <div className="flex items-center justify-center gap-1">
            <Skeleton circle width={18} height={18} />
            <Skeleton width={60} />
          </div>
          <div className="flex items-center justify-center gap-1">
            <Skeleton circle width={18} height={18} />
            <Skeleton width={40} />
          </div>
          <div className="flex items-center justify-center gap-1">
            <Skeleton circle width={18} height={18} />
            <Skeleton width={40} />
          </div>
        </motion.div>
        <div className="bg-gray-400 h-[1px]"></div>
        <div className="py-2 flex justify-between px-4">
          <Skeleton height={32} width={96} />
          <Skeleton height={32} width={64} />
        </div>
      </motion.div>
    </SkeletonTheme>
  );
}

export default CourseCardSkeleton;
