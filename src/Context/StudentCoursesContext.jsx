import React, { createContext, useContext, useState } from 'react';

const StudentCoursesContext = createContext();

export function useStudentCourses() {
  return useContext(StudentCoursesContext);
}

export function StudentCoursesProvider({ children }) {
  const [studentCourses, setStudentCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStudentCourses = async (userEmail) => {
    try {
      const response = await fetch(
        `https://cm-academy-test-server-production.up.railway.app/orders/${userEmail}`
      );
      const data = await response.json();
      setStudentCourses(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching student courses:", error);
      setLoading(false);
    }
  };

  return (
    <StudentCoursesContext.Provider value={{ studentCourses, loading, fetchStudentCourses }}>
      {children}
    </StudentCoursesContext.Provider>
  );
}
