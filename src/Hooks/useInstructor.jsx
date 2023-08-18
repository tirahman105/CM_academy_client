import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useInstructor = () => {
  const { user } = useContext(AuthContext);
  const [isInstructor, setIsInstructor] = useState(false);
  const [isInstructorLoading, setIsInstructorLoading] = useState(true);

  useEffect(() => {
    const checkIsInstructor = async () => {
      if (!user) {
        setIsInstructor(false); // User is not logged in, set default value
        setIsInstructorLoading(false);
        return;
      }

      try {
        const response = await fetch(`https://cm-academy-test-server-production.up.railway.app/users/instructor/${user.email}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Include any necessary authentication headers here
          },
        });

        if (response.ok) {
          const data = await response.json();
          setIsInstructor(data.instructor); // Use data.instructor instead of data.teacher
        } else {
          console.error("Failed to check instructor status");
        }
      } catch (error) {
        console.error("Error checking instructor status:", error);
      } finally {
        setIsInstructorLoading(false);
      }
    };

    checkIsInstructor();
  }, [user]);

  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
