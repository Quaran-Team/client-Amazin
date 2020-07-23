import React from "react";
import LowStar from "../src/components/RatingSummary/lowStar";
import renderer from "react-test-renderer";

// snapshot test if anything in component is changed this snapshot will need to be updated or this test changed

describe("This snapshot test should pass for 2 stars", () => {
  it("Should render as expected!", () => {
    const tree = renderer.create(<LowStar />).toJSON();

    console.log(tree);

    expect(tree).toMatchSnapshot();
  });
});