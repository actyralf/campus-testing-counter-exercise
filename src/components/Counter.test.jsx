import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Counter } from "./Counter";

describe("Counter", () => {
  it("should show 1 after clicking on increment", () => {
    const { getByRole, getByTestId } = render(
      <Counter initialValue={0} onSubmit={() => {}} />
    );
    const button = getByRole("button", { name: "Increment" });
    const counterDisplay = getByTestId("counter-display");
    expect(counterDisplay.textContent).toBe("0");
    fireEvent.click(button);
    expect(counterDisplay.textContent).toBe("1");
  });
  it("should not show values < 0", () => {
    const { getByRole, getByTestId } = render(
      <Counter initialValue={0} onSubmit={() => {}} />
    );
    const button = getByRole("button", { name: "Decrement" });
    const counterDisplay = getByTestId("counter-display");
    expect(counterDisplay.textContent).toBe("0");
    fireEvent.click(button);
    expect(counterDisplay.textContent).toBe("0");
  });
  it("should not show values > 10", () => {
    const { getByRole, getByTestId } = render(
      <Counter initialValue={0} onSubmit={() => {}} />
    );
    const button = getByRole("button", { name: "Increment" });
    const counterDisplay = getByTestId("counter-display");
    expect(counterDisplay.textContent).toBe("0");
    for (let i = 0; i < 20; i++) {
      fireEvent.click(button);
    }
    expect(counterDisplay.textContent).toBe("10");
  });
});
