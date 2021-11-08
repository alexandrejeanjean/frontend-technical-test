import { useErrorHandler } from 'react-error-boundary';
import useGetConversations from '../hooks/useGetConversations';
import { Conversation } from '../types/conversation';
import Contact from './Contact';
import Loading from './Loading';

type Props = {
  handleConversationSelection: (conversation: Conversation) => void;
}

const ContactList = ({ handleConversationSelection }: Props) => {
  const { conversations, loading, error } = useGetConversations();

  const handleError = useErrorHandler();

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Loading />
      </div>
    )
  }

  if (error) {
    handleError(error);
  }

  return (
    <ul className='flex flex-col overflow-y-scroll list-height' data-cy="contact-list">
      {conversations.map((conversation) => (
        <li key={conversation.id}>
          <Contact conversation={conversation} handleConversationSelection={handleConversationSelection} />
        </li>
      ))}
    </ul>
  )
}

export default ContactList
