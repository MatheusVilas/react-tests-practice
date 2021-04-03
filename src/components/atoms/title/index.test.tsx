import React from "react";
import { getQueriesForElement } from "@testing-library/react";
import Title from "./index";
import faker from "faker";

import * as ReactDOM from "react-dom";

test("tilte must have children printed as text", () => {
  const root = document.createElement("div");
  const randomText = faker.lorem.words(30);

  ReactDOM.render(<Title>{randomText}</Title>, root);

  const { getByText } = getQueriesForElement(root);

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
