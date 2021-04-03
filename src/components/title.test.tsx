import React from "react";
import { render } from "@testing-library/react";

import faker from "faker";
import Title from "./title";

test("tilte must have children printed as text", () => {
  const randomText = faker.lorem.words(30);

  const { getByText } = render(<Title>{randomText}</Title>);

  expect(getByText(randomText)).not.toBe(null);

  // act(() => {
  //   render(<Title>batata</Title>);
  // });
  // const secondElement = screen.getByText("batata");
  // expect(secondElement).toBeInTheDocument();

  // act(() => {
  //   render(<Title>batata</Title>, container);
  // });
  // expect(container.textContent).toBe("batata");

  // render(<Title>{randomText}</Title>);/
  // const linkElement = screen.getByText(randomText);
  // expect(linkElement).toBeInTheDocument();
});
