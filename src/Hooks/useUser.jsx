
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../providers/AuthProvider";

// const useUser = () => {
//   const { user } = useContext(AuthContext);
//   const [isUser, setIsUser] = useState(false);
//   const [isUserLoading, setIsUserLoading] = useState(true);

//   useEffect(() => {
//     const checkIsStudent = async () => {
//       if (!user) {
//         setIsUser(false); // User is not logged in, set default value
//         setIsUserLoading(false);
//         return;
//       }

//       try {
//         const response = await fetch(
//           `https://cm-academy-test-server-production.up.railway.app/users/${user.email}`,
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               // Include any necessary authentication headers here
//             },
//           }
//         );

//         if (response.ok) {
//           const data = await response.json();
//           setIsUser(data.student);
//         } else {
//           console.error("Failed to check student status");
//         }
//       } catch (error) {
//         console.error("Error checking student status:", error);
//       } finally {
//         setIsUserLoading(false);
//       }
//     };

//     checkIsStudent();
//   }, [user]);

//   return [isUser, isUserLoading];
// };

// export default useUser;
