import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useStudent = () => {
  const { user } = useContext(AuthContext);
  const [isStudent, setIsStudent] = useState(false);
  const [isStudentLoading, setIsStudentLoading] = useState(true);

  useEffect(() => {
    const checkIsStudent = async () => {
      if (!user) {
        setIsStudent(false); // User is not logged in, set default value
        setIsStudentLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://cm-academy-test-server-production.up.railway.app/users/student/${user.email}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              // Include any necessary authentication headers here
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setIsStudent(data.student);
        } else {
          console.error("Failed to check student status");
        }
      } catch (error) {
        console.error("Error checking student status:", error);
      } finally {
        setIsStudentLoading(false);
      }
    };

    checkIsStudent();
  }, [user]);

  return [isStudent, isStudentLoading];
};

export default useStudent;
