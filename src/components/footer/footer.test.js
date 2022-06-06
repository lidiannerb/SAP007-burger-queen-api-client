/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Footer } from "./index";

describe("It should render a footer correctly", () => {
  it("Render a footer", () => {
    render(<Footer />);
    const footerLink = screen.getAllByRole("link");

    expect(footerLink.length).toEqual(2);
  });
});