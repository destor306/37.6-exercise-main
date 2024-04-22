import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

//caption, src, currNum, totalNum
it('should render', ()=>{
    render(<Card caption="Test Card" src="test.com" currNum={1} totalNum={3}/>)

})

it('should match snapshot', ()=>{
    const {asFragment} = render(<Card caption="Test Card" src="test.com" currNum={1} totalNum={3}/>)
    expect(asFragment()).toMatchSnapshot();
})