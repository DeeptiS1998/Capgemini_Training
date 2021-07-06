import { render,unmountComponentAtNode } from "react-dom";
import {act} from "react-dom/test-utils";
import PayCash from "./PayCash";

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

describe("<PayCash />", () => {
    it("Should have text 'Pay Using Cash to the washer after your service is done. '", () => {
                act(() =>{
                        render(<PayCash/>,box);
                });
                expect(box.textContent).toBe("Pay Using Cash to the washer after your service is done. ");
    });
 });