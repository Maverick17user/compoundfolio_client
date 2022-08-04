import SignUp from "./SignUp";
import { fireEvent, render, screen } from "@testing-library/react";
import Router from "next/router";

describe("<SignUp />", () => {
  it("Renders well", () => {
    render(<SignUp />);
  });

  it("Has *Google* sign up button", () => {
    render(<SignUp />);
    const googleAuthBtn = screen.getByTestId("googleAuthBtn");
    expect(googleAuthBtn).toBeInTheDocument();
  });

  it("Has *Create Account* sign up button", () => {
    render(<SignUp />);
    const signUpViaEmailBtn = screen.getByRole("button", { name: /Create Account/i });
    expect(signUpViaEmailBtn).toBeInTheDocument();
  });

  it("Has *Sign in* link", () => {
    render(<SignUp />);
    const signInRedirectBtn = screen.getByRole("a", { name: /Sign in/i });
    expect(signInRedirectBtn).toBeInTheDocument();
  });

  it("*Sign in* link leads to the sign in page", () => {
    const routerChangeStart = jest.fn();

    render(<SignUp />);
    const signInRedirectBtn = screen.getByRole("a", { name: /Sign in/i });
    expect(signInRedirectBtn).toBeInTheDocument();

    Router.events.on("routeChangeStart", routerChangeStart);

    fireEvent.click(signInRedirectBtn);
    expect(routerChangeStart).toHaveBeenCalledWith("/sugn-in");

    Router.events.off("routeChangeStart", routerChangeStart);
  });
});