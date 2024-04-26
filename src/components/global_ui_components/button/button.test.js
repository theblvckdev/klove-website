import { render, screen } from "@testing-library/react";
import Button from "./button";

test("button variant prop must be either primary or transparent", () => {
  render(<Button />);
  const buttonVariantProp = screen.getAllByTestId("button");
  expect(buttonVariantProp).toEqual("primary" || "transparent");
});
