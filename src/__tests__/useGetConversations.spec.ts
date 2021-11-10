import { jest } from '@jest/globals';
import useGetConversations from '../hooks/useGetConversations';

const mockConversations = [
    {
        "id": 1,
        "recipientId": 2,
        "recipientNickname": "Jeremie",
        "senderId": 1,
        "senderNickname": "Thibaut",
        "lastMessageTimestamp": 1625637849
    },
    {
        "id": 2,
        "recipientId": 3,
        "recipientNickname": "Patrick",
        "senderId": 1,
        "senderNickname": "Thibaut",
        "lastMessageTimestamp": 1620284667
    },
    {
        "id": 3,
        "recipientId": 1,
        "recipientNickname": "Thibaut",
        "senderId": 4,
        "senderNickname": "Elodie",
        "lastMessageTimestamp": 1625648667
    }
];

jest.mock('../hooks/useGetConversations', () => ({
    useClientRect: () => [mockConversations, false, {}]
}));

/** @test {useGetConversations hook} */
describe('useGetConversations hook', () => {
    it('should return conversations list', () => {
        // const { conversations, loading, error } = useGetConversations();
        expect(useGetConversations).equal(mockConversations);
    })
});


