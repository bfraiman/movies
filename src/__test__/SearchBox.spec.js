import React from "react";
import { render } from "@testing-library/react";
import SearchBox from "../components/SearchBox";

it("should take a snapshot", () => {
  const { asFragment } = render(<SearchBox placeholder="placeholder"/>);

  expect(asFragment(<SearchBox placeholder="placeholder"/>)).toMatchSnapshot();
});

