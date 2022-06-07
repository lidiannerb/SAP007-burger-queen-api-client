/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Header } from "./index";

describe ("it should render a header", ()=> {
  it ("render a image correctly", () => {
    render (<Header />);
    const image = screen.getByRole("img");
    expect (image).toBeInTheDocument();
  });
});