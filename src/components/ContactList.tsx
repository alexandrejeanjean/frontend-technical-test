import useGetConversations from '../hooks/useGetConversations';
import Contact from './Contact';


const ContactList = () => {
  const { conversations, loading, error } = useGetConversations();

  return (
    <ul className='flex flex-col overflow-y-scroll list-height'>
      {conversations.map((contact) => (
        <li key={contact.id}>
          <Contact senderNickname={contact.senderNickname} />
        </li>
      ))}
    </ul>
  )
}

export default ContactList
