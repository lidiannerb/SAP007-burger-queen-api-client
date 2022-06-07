/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "./index";

describe("It should render a UL with a elements", () => {
  it("Render a UL with elements", () => {
    render(<Card />);
    const card = screen.getByText("elemento");

    expect(card).toBeInTheDocument();
  });
});