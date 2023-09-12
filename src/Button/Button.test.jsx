import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button", () => {
  it("should render the expected text", () => {
    
    const { getByText } = render(<Button label="Click me" />);
    expect(getByText("Click me")).toBeInTheDocument();
  });
});
