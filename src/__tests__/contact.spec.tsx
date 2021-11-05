
import { mount } from 'enzyme';
import Contact from "../components/Contact";

/** @test {Contact Component} */
describe('Contact Component', () => {
    it('should render without crashing', () => {
        const wrapper = mount(<Contact senderNickname="Alex Jeanjean" />);

        expect(wrapper.find('p')).toHaveLength(1);
    });

    it('should display the good value', () => {
        const wrapper = mount(<Contact senderNickname="Alex Jeanjean" />);

        expect((wrapper).prop('senderNickname')).toEqual("Alex Jeanjean");
    });

});
