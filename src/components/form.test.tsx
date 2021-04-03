import React from "react";
import { render } from "@testing-library/react";

import Form from "./form";

test("form must start with no errors", () => {
  const { getByTestId } = render(<Form />);

  const errorWrap = getByTestId("error-wrap");

  expect(errorWrap.childElementCount).toBe(0);
});
