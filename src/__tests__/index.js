import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

test("search form could be used", async () => {
  render(<App />);

  const input = await screen.findByRole("textbox");
  const button = await screen.findByRole("button");

  fireEvent.change(input, { target: { value: "matrix" } });
  fireEvent.click(button);

  const title = await screen.findByText("matrix");
  expect(title).toBeVisible();
});
