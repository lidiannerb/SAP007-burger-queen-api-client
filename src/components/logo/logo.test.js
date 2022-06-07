/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Logo } from "./index";

describe ("it should render a logo", ()=> {
  it ("render a logo correctly", () => {
    render (<Logo />);
    const logo = screen.getByRole("img");
    expect (logo).toBeInTheDocument();
  });
});