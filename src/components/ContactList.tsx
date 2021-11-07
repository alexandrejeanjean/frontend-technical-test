import useGetConversations from '../hooks/useGetConversations';
import { Conversation } from '../types/conversation';
import Contact from './Contact';

type Props = {
  handleConversationSelection: (conversation: Conversation) => void;
}

const ContactList = ({ handleConversationSelection }: Props) => {
  const { conversations, loading, error } = useGetConversations();

  return (
    <ul className='flex flex-col overflow-y-scroll list-height'>
      {conversations.map((conversation) => (
        <li key={conversation.id}>
          <Contact conversation={conversation} handleConversationSelection={handleConversationSelection} />
        </li>
      ))}
    </ul>
  )
}

export default ContactList
