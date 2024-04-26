import { render, screen } from "@testing-library/react";
import Button from "./button";

test("button variant prop must be either primary or transparent", () => {
  render(<Button />);
  const buttonVariantPropValue = screen.getAllByTestId("button");
  expect(buttonVariantPropValue).toEqual("primary" || "transparent");
});
