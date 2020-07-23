import React from "react";
import BadStar from "../src/components/RatingSummary/badStar";
import renderer from "react-test-renderer";

// snapshot test if anything in component is changed this snapshot will need to be updated or this test changed

describe("This snapshot test should pass for 1 star", () => {
  it("Should render as expected!", () => {
    const tree = renderer.create(<BadStar />).toJSON();

    console.log(tree);

    expect(tree).toMatchSnapshot();
  });
});
