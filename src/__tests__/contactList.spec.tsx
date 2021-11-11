import { expect, jest } from '@jest/globals';
import { shallow } from 'enzyme';
import ContactList from '../components/ContactList';


const handleConversationSelection = jest.fn();

/** @test {ContactList Component} */
describe('ContactList Component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ContactList handleConversationSelection={handleConversationSelection} />);
    });

    it('should render without crashing', () => {
        expect(wrapper.find('ul')).toHaveLength(1);
    });

    it('match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

});

