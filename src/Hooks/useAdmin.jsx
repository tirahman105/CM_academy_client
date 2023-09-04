import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);

  useEffect(() => {
    const checkIsAdmin = async () => {
      if (!user) {
        setIsAdmin(false); // User is not logged in, set default value
        setIsAdminLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://cm-academy-test-server-production.up.railway.app/users/admin/${user.email}`,
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
          setIsAdmin(data.admin);
        } else {
          console.error("Failed to check Admin status");
        }
      } catch (error) {
        console.error("Error checking Admin status:", error);
      } finally {
        setIsAdminLoading(false);
      }
    };

    checkIsAdmin();
  }, [user]);

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
