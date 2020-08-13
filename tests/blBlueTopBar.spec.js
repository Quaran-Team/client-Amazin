import React from "react";
import BlueSecondTopLine from "../src/components/SecondTopLine/BlueSecondTopline";
import ReactDom from "react-dom";
import { cleanup } from "@testing-library/react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

// this here is gold
afterEach(cleanup);
// it kills anything after each test so need to unmount

// basic crash test 1 star

describe("This component test should render 2nd blue top bar without crashing", () => {
  it("Should render as expected!", () => {
    const div = document.createElement("div");
    ReactDom.render(<BlueSecondTopLine />, div);
  });
});
