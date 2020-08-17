import React from "react";
import PhotoGallery from "../src/components/PhotoGallery/PhotoGallery";
import ReactDom from "react-dom";
import { cleanup } from "@testing-library/react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

// this here is gold
afterEach(cleanup);
// it kills anything after each test so need to unmount

// basic crash test

describe("This component test should render for without crashing", () => {
  it("Photo Gallery should render as expected!", () => {
    const div = document.createElement("div");
    ReactDom.render(<PhotoGallery />, div);
  });
});
