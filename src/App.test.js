import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from './App';
configure({ adapter: new Adapter() });


it("renders without crashing", () => {
    shallow(<App />);
});
  
  it("renders App header", () => {
    const wrapper = shallow(<App />);
    const header = <h1>Library</h1>;
    expect(wrapper.contains(header)).toEqual(true);
  });