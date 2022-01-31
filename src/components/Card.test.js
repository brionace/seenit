import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { Card } from './Card'

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without content", () => {
  act(() => {
    render(<Card />, container);
  });
  expect(container.textContent).toBe("");

  /* const content = {appearance: [],
better_call_saul_appearance: [4, 5],
birthday: "Unknown",
category: "Better Call Saul",
char_id: 116,
img: "https://vignette.wikia.nocookie.net/breakingbad/images/8/85/LaloProfileBCS.png/revision/latest?cb=20180925050152",
name: "Eduardo Salamanca",
nickname: "Lalo",
occupation: ['Cartel Member'],
portrayed: "Tony Dalton",
status: "Alive"}

  act(() => {
    render(<Card content={content} />, container);
  });
  expect(container.textContent).toBe(content); */

  /* act(() => {
    render(<Card content={content} />, container);
  });
  expect(container.textContent).toBe("Hello, Margaret!"); */
});