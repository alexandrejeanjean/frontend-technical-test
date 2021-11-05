
import { mount } from 'enzyme';
import Contact from '../components/Contact';
import ContactList from "../components/ContactList";

const listMock = [{
    id: 0,
    recipientId: 0,
    recipientNickname: "Recipient nickname",
    senderId: 0,
    senderNickname: "Alexandre Jeanjean"
}, {
    id: 1,
    recipientId: 1,
    recipientNickname: "Recipient nickname",
    senderId: 1,
    senderNickname: "Océane Olmi"
}]

/** @test {Contact List Component} */
describe('Contact List Component', () => {
    it('should render without crashing', () => {
        const wrapper = mount(<ContactList list={listMock} />);
        expect(wrapper.find('ul')).toHaveLength(1);
    });

    it('should display the good length of values', () => {
        const wrapper = mount(<ContactList list={listMock} />);
        expect(wrapper.find(Contact)).toHaveLength(2);
    });

});
