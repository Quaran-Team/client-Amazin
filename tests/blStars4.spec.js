import React from "react";
import GoodStar from "../src/components/RatingSummary/goodStar";
import renderer from "react-test-renderer";

// snapshot test if anything in component is changed this snapshot will need to be updated or this test changed

describe("This snapshot test should pass for 4 stars", () => {
  it("Should render as expected!", () => {
    const tree = renderer.create(<GoodStar />).toJSON();

    console.log(tree);

    expect(tree).toMatchSnapshot();
  });
});