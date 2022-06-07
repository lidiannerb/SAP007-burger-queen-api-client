/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { LayoutForm } from "./index";

describe ("it should render a element", ()=> {
  it ("render a element correctly", () => {
    render (<LayoutForm>conteudo</LayoutForm>);
    const layout = screen.getByText("conteudo");
    expect (layout).toBeInTheDocument();
  });
});