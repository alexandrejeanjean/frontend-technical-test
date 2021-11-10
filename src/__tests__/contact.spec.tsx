
import { expect, jest } from '@jest/globals';
import { mount } from 'enzyme';
import Contact from "../components/Contact";

const mockConversation = {
    id: 0,
    lastMessageTimestamp: 1636306788437,
    recipientId: 0,
    recipientNickname: "Théo Dort",
    senderId: 0,
    senderNickname: "Alexandre Jeanjean"
};

const handleConversationSelection = jest.fn();

/** @test {Contact Component} */
describe('Contact Component', () => {
    it('should render without crashing', () => {
        const wrapper = mount(<Contact conversation={mockConversation} handleConversationSelection={handleConversationSelection} />);

        expect(wrapper.find('button')).toHaveLength(1);
    });

    it('should display the good value', () => {
        const wrapper = mount(<Contact conversation={mockConversation} handleConversationSelection={handleConversationSelection} />);

        expect((wrapper).prop('conversation')).toEqual({
            id: 0,
            lastMessageTimestamp: 1636306788437,
            recipientId: 0,
            recipientNickname: "Théo Dort",
            senderId: 0,
            senderNickname: "Alexandre Jeanjean"
        });
    });

});
