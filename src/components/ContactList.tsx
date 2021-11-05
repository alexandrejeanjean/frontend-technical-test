import { Conversation } from "../types/conversation"
import Contact from './Contact'


type Props = {
  list: Conversation[];
}

const ContactList = ({ list }: Props) => {
  return (
    <ul className='flex flex-col'>
      {list.map((contact) => (
        <li>
          <Contact key={contact.id} senderNickname={contact.senderNickname} />
        </li>
      ))}
    </ul>
  )
}

export default ContactList
