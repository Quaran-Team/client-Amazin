import React from 'react';
import ReactDOM from 'react-dom';
import CustomerReviews from '../src/components/CustomerReviews/CustomerReviews';

import { render } from '@testing-library/react';

import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";


it("it renders", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CustomerReviews/>, div);
})

it("matches snapshot", () => {
    const tree = renderer.create(<CustomerReviews/>).toJSON();
    expect(tree).toMatchSnapshot();
})