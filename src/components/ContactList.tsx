import useGetConversations from '../hooks/useGetConversations';
import { Conversation } from '../types/conversation';
import Contact from './Contact';
import Loading from './Loading';

type Props = {
  handleConversationSelection: (conversation: Conversation) => void;
}

const ContactList = ({ handleConversationSelection }: Props) => {
  const { conversations, loading, error } = useGetConversations();

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Loading />
      </div>
    )
  }

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
