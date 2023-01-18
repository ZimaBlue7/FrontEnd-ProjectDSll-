import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from "@testing-library/react";
import Inventario from "./Inventario";

test('renders contents', () => {
    const inventario = {
        content: 'this is a test',
        important: true
    }

    const view = render(<Inventario inventario={inventario} />)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    view.getByText('this is a test')

    // view.debug() for the view of render
})