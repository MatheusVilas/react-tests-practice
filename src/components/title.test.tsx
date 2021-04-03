import React from "react";
import { render } from "@testing-library/react";

import faker from "faker";
import Title from "./title";

test("tilte must have children printed as text", () => {
  const randomText = faker.lorem.words(30);

  const { getByText } = render(<Title>{randomText}</Title>);

  expect(getByText(randomText)).not.toBe(null);
});
