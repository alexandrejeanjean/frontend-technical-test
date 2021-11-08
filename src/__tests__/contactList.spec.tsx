
import { shallow } from 'enzyme';
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

const handleConversationSelection = jest.fn();

/** @test {Contact List Component} */
describe('Contact List Component', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<ContactList handleConversationSelection={handleConversationSelection} />);

        expect(wrapper.find('ul')).toHaveLength(1);
    });
});
