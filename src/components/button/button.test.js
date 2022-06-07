/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./index";

describe("It should render a button correctly", () => {
  it("Render a button correctly", () => {
    render(<Button>conteudo</Button>);
    const button = screen.getByText("conteudo");

    expect(button).toBeInTheDocument();
  });
});
