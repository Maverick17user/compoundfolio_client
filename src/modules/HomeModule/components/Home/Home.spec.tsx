import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./Home";
import Router from "next/router";

describe("<Home />", () => {
  it("Renders well", () => {
    render(<Home />);
  });

  it("Has *Let's try button*", () => {
    render(<Home />);
    const tryBtn = screen.getByRole("button", { name: /Let's try/i });
    expect(tryBtn).toBeInTheDocument();
  });

  // jest.mock('next/link', () => ({ children }) => children);
  it("*Let's try button* leads to the sign up page", () => {
    const spies: any = {};
    spies.routerChangeStart = jest.fn();

    render(<Home />);
    const tryBtn = screen.getByRole("button", { name: /Let's try/i });
    expect(tryBtn).toBeInTheDocument();

    Router.events.on("routeChangeStart", spies.routerChangeStart);

    fireEvent.click(tryBtn);
    expect(spies.routerChangeStart).toHaveBeenCalledWith("/sugn-up");

    Router.events.off("routeChangeStart", spies.routerChangeStart);
  });
});
