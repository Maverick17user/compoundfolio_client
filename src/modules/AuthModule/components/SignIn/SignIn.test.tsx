import SignIn from "./SignIn";
import { fireEvent, render, screen } from "@testing-library/react";
import Router from "next/router";

describe("<SignIn />", () => {
  it("Renders well", () => {
    render(<SignIn />);
  });

  it("Has *Google* sign in button", () => {
    render(<SignIn />);
    const googleAuthBtn = screen.getByTestId("googleAuthBtn");
    expect(googleAuthBtn).toBeInTheDocument();
  });

  it("Has *Sign In* sign up button", () => {
    render(<SignIn />);
    const signInViaEmailBtn = screen.getByRole("button", { name: /Sign In/i });
    expect(signInViaEmailBtn).toBeInTheDocument();
  });

  it("Has *Sign up* link", () => {
    render(<SignIn />);
    const signUpRedirectBtn = screen.getByRole("a", { name: /Sign up/i });
    expect(signUpRedirectBtn).toBeInTheDocument();
  });

  it("*Sign up* link leads to the sign up page", () => {
    const routerChangeStart = jest.fn();

    render(<SignIn />);
    const signUpRedirectBtn = screen.getByRole("a", { name: /Sign up/i });
    expect(signUpRedirectBtn).toBeInTheDocument();

    Router.events.on("routeChangeStart", routerChangeStart);

    fireEvent.click(signUpRedirectBtn);
    expect(routerChangeStart).toHaveBeenCalledWith("/sugn-up");

    Router.events.off("routeChangeStart", routerChangeStart);
  });
});