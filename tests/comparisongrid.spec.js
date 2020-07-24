import React from 'react';
import ReactDOM from 'react-dom';
import ComparisonGrid from '../src/components/ComparisonGrid/ComparisonGrid.jsx';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ComparisonGrid/>, div);
})