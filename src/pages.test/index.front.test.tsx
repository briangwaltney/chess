import Home from "@/pages";
import { cleanup, render, screen } from "@testing-library/react";



describe("Index page", () => {

  afterEach(() => {
    cleanup();
  });

  it("displays layout", () => {
    render(<Home  />);
    expect(screen.getByTestId("layout")).not.toBeNull();
  });
});
