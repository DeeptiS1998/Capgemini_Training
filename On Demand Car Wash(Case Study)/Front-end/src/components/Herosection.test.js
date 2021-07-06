
import { render,unmountComponentAtNode } from "react-dom";
import {act} from "react-dom/test-utils";
import Herosection from "./Herosection";

let box=null;

beforeEach(() =>{
    box = document.createElement("div");
    document.body.appendChild(box);
});

afterEach(() =>{
    unmountComponentAtNode(box);
    box.remove();
    box = null;
})

describe("<Herosection />", () => {
    it("Should have text 'Switch Wash Car Service'", () => {
                act(() =>{
                        render(<Herosection/>,box);
                });
                expect(box.textContent).toBe("Switch Wash Car Service");
    });
 });