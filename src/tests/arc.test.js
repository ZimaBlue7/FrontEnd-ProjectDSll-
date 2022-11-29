import React from "react";
import { screen, render } from "@testing-library/react";


import { Pruebita } from "../components/Productos/pruebs.js";

describe("pruebs", () => {
    it("must display a title", () => {
        render(<Pruebita/>);
        expect(screen.getByText(/promociones/i)).toEqual(<h1>promociones</h1>)
    })
})