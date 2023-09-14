import React from "react";
import { render, screen } from "@testing-library/react";
<<<<<<< HEAD
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter as Router
=======
import { BrowserRouter as Router } from "react-router-dom"; 
>>>>>>> main
import "@testing-library/jest-dom";

import CourseCard from "./CourseCard";

describe("CourseCard Component", () => {
  const course = {
    courseThumbnail: "https://example.com/course-thumbnail.jpg",
    instructor: "John Doe",
    title: "Introduction to React",
    coursePrice: 10.99,
  };

  it("renders course card with correct information", () => {
    render(
<<<<<<< HEAD
      <Router> {/* Wrap your component in Router */}
=======
      <Router> 
>>>>>>> main
        <CourseCard course={course} />
      </Router>
    );

    const thumbnailElement = screen.getByAltText("");
    expect(thumbnailElement).toBeInTheDocument();

    const instructorElement = screen.getByText(course.instructor);
    expect(instructorElement).toBeInTheDocument();

    const titleElement = screen.getByText(course.title);
    expect(titleElement).toBeInTheDocument();

    const priceElement = screen.getByText(`${course.coursePrice}.00`);
    expect(priceElement).toBeInTheDocument();

    const enrollButtonElement = screen.getByText("Enroll Now");
    expect(enrollButtonElement).toBeInTheDocument();

    const detailsButtonElement = screen.getByText("Details");
    expect(detailsButtonElement).toBeInTheDocument();
  });

  // You can add more test cases as needed
});
