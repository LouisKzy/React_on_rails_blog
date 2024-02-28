import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./NavBar";

describe("NavBar component", () => {
  const renderNavBar = () => {
    render(<NavBar />, { wrapper: MemoryRouter });
  };

  test("renders both links", () => {
    // affiche la navbar
    renderNavBar();
    // cherche que les "liens existent"
    expect(screen.getByText("Posts Lists")).toBeInTheDocument();
    expect(screen.getByText("New Post")).toBeInTheDocument();
  });
});
