/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Input } from "./index";

describe ("it should render a input", ()=> {
  it ("render a input correctly", () => {
    render (<Input placeholder="email" />);
    const input = screen.getByPlaceholderText("email");
    expect (input).toBeInTheDocument();
  });
});