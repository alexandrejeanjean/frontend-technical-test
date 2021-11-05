import { Conversation } from "../types/conversation"
import Contact from './Contact'


type Props = {
  list: Conversation[];
}

const ContactList = ({ list }: Props) => {
  return (
    <ul className='flex flex-col'>
      {list.map((contact) => (
        <Contact key={contact.id} senderNickname={contact.senderNickname} />
      ))}
    </ul>
  )
}

export default ContactList
