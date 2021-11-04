import type { FC } from 'react'
import Contact from './contact'

const List = [{ name: 'Alexandre Jeanjean' }, { name: 'Océane Olmi' }]

const ContactList: FC = () => {
  return (
    <ul className='flex flex-col'>
      {List.map((contact, id) => (
        <Contact key={'contact_' + id} name={contact.name} />
      ))}
    </ul>
  )
}

export default ContactList
