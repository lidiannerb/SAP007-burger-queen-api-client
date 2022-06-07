/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ErrorMessages } from "./index";

describe ("it should render a error message" , () => {
  it ("render a error message ", () => {
    render (<ErrorMessages>conteudo</ErrorMessages>);
    const errorMessage = screen.getByText("conteudo");
    expect(errorMessage).toBeInTheDocument();
  });
});
