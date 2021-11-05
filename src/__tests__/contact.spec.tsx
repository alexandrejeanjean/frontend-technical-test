
import { mount } from 'enzyme';
import Contact from "../components/Contact";

/** @test {Contact Component} */
describe('Contact Component', () => {
    it('should render without crashing', () => {
        const wrapper = mount(<Contact name="Alex Jeanjean" />);

        expect(wrapper.find('p')).toHaveLength(1);
        expect(wrapper.find('p')).toHaveValue("Alex Jeanjean");
    });
});
