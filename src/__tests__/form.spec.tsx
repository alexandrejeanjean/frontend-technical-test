import { expect, jest } from '@jest/globals';
import { shallow } from 'enzyme';
import Form from "../components/Form";


const mockConversation = {
    id: 0,
    lastMessageTimestamp: 1636306788437,
    recipientId: 0,
    recipientNickname: "Théo Dort",
    senderId: 0,
    senderNickname: "Alexandre Jeanjean"
};

const refetchMessages = jest.fn();



/** @test {Form Component} */
describe('Form Component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Form conversation={mockConversation} refetchMessages={refetchMessages} />);
    });

    it('should render one <form>', () => {
        expect(wrapper.find('form')).toHaveLength(1);
    });

    it('should not render any <button>', () => {
        expect(wrapper.find('button')).toHaveLength(1);
    });

    it('should render 1 <label>', () => {
        expect(wrapper.find('label')).toHaveLength(2);
    });

    it('should render 1 <textarea>', () => {
        expect(wrapper.find('textarea')).toHaveLength(1);
    });

    it('match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
});
