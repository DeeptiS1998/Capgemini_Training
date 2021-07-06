import { render,unmountComponentAtNode } from "react-dom";
import {act} from "react-dom/test-utils";
import Footer from "./Footer";


let container = null;

beforeEach(() =>{
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() =>{
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

describe("<Footer />", () => {
   it("Should have text 'Switch Wash: An on demand car wash app @2021'", () => {
               act(() =>{
                       render(<Footer/>,container);
               });
               expect(container.textContent).toBe("Switch Wash: An on demand car wash app @2021");
   });
});