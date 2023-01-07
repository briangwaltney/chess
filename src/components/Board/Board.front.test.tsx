
import Board from "@/components/Board";
import { cleanup, render, screen } from "@testing-library/react";



describe.skip("Board", () => {

  afterEach(() => {
    cleanup();
  });

  it("displays", () => {
    render(<Board  />);
    expect(screen.getByTestId("chessBoard")).not.toBeNull();
  });


});
