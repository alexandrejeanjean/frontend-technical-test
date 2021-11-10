import { expect, jest } from '@jest/globals';
import { mount } from 'enzyme';
import Dialog from "../components/Dialog";

const refetchMessages = jest.fn();

const mockConversation = {
    "id": 1,
    "recipientId": 2,
    "recipientNickname": "Jeremie",
    "senderId": 1,
    "senderNickname": "Thibaut",
    "lastMessageTimestamp": 1625637849
};

const mockMessage = {
    "id": 1,
    "conversationId": 1,
    "timestamp": 1625637849,
    "authorId": 1,
    "body": "Bonjour c'est le premier message de la première conversation"
};

/** @test {Dialog Component} */
describe('Dialog Component', () => {
    it('should render without crashing', () => {
        const wrapper = mount(<Dialog message={mockMessage} conversation={mockConversation} refetchMessages={refetchMessages} />);
        expect(wrapper.find('p')).toHaveLength(1);
    });

    it('should display the good value', () => {
        const wrapper = mount(<Dialog message={mockMessage} conversation={mockConversation} refetchMessages={refetchMessages} />);

        expect((wrapper).prop('message')).toEqual({
            "id": 1,
            "conversationId": 1,
            "timestamp": 1625637849,
            "authorId": 1,
            "body": "Bonjour c'est le premier message de la première conversation"
        });
    });

});