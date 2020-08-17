import React from "react";
import TopBar from "../src/components/TopBar/TopBar";
import ReactDom from "react-dom";
import { cleanup } from "@testing-library/react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

// this here is gold
afterEach(cleanup);
// it kills anything after each test so need to unmount

// basic crash test

describe("This component test should render without crashing", () => {
  it("Should render TopBar as expected!", () => {
    const div = document.createElement("div");
    ReactDom.render(<TopBar />, div);
  });
});
