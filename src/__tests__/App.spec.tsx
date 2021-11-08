import { act, render, screen } from "@testing-library/react";
import App from "../pages";

describe("App", () => {
  it("should render correctly App", () => {
    render(<App />)
    act(() =>
      expect(
        screen.getByText(/leboncoin/)
      ).toBeInTheDocument()
    );
  })
})