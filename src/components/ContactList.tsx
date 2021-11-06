import useGetConversations from '../hooks/useGetConversations';
import Contact from './Contact';

type Props = {
  handleConversationSelection: (conversationId: number) => void;
}

const ContactList = ({ handleConversationSelection }: Props) => {
  const { conversations, loading, error } = useGetConversations();

  return (
    <ul className='flex flex-col overflow-y-scroll list-height'>
      {conversations.map((conversation) => (
        <li key={conversation.id}>
          <Contact senderNickname={conversation.senderNickname} conversationId={conversation.id} handleConversationSelection={handleConversationSelection} />
        </li>
      ))}
    </ul>
  )
}

export default ContactList
