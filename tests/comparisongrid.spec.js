import React from 'react';
import ReactDOM from 'react-dom';
import ComparisonGrid from '../src/components/ComparisonGrid/ComparisonGrid.jsx';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ComparisonGrid/>, div);
})

it("renders component correctly", () => {
    const { getByTestId } = render(<ComparisonGrid/>);
    expect(getByTestId('comparisonGrid')).toHaveTextContent("Category");
})

it("matches snapshot", () => {
    const tree = renderer.create(<ComparisonGrid/>).toJSON();
    expect(tree).toMatchSnapshot();
})

//don't forget to update the snapshot so that tests pass

