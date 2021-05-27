/**
 * @jest-environment jsdom
 */

import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import renderer from "react-test-renderer";
import NextLink from "../../components/link";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("renders link", () => {
  const tree = renderer.create(
    <NextLink content={"Home"} href={"/"} locale={"vi"} />
  );
  expect(tree.toJSON()).toMatchSnapshot();
});

it("renders link", () => {
  act(() => {
    ReactDOM.render(
      <NextLink content={"Home"} href={"/"} locale={"vi"} />,
      container
    );
  });
  const a = container.querySelector("a");
  expect(a.textContent).toBe("Home");
});
