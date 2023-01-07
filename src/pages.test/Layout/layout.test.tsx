import Layout from "@/components/Layout";
import { cleanup, render, screen } from "@testing-library/react";



describe.skip("Layout", () => {

  afterEach(() => {
    cleanup();
  });

  it("display nothing", () => {
    render(<Layout  />);
    expect(screen.getByTestId("layout")).not.toBeNull();
  });
});
