import type { FC } from 'react'
import Contact from '../../components/Contact'
import ContactList from '../../components/ContactList'
import DialogBubble from '../../components/Dialog'
import Form from '../../components/Form'

const listMock = [{
  id: 0,
  recipientId: 0,
  recipientNickname: "Recipient nickname",
  senderId: 0,
  senderNickname: "Alexandre Jeanjean"
}, {
  id: 1,
  recipientId: 1,
  recipientNickname: "Recipient nickname",
  senderId: 1,
  senderNickname: "Océane Olmi"
}]

const mockMessageSender = {
  "id": 1,
  "conversationId": 1,
  "timestamp": 1625637849,
  "authorId": 1,
  "body": "Bonjour c'est le premier message de la première conversation"
};

const mockMessageRecipient = {
  "id": 1,
  "conversationId": 1,
  "timestamp": 1625637849,
  "authorId": 2,
  "body": "Bonjour c'est le second message de la première conversation"
};

const DesignSystem: FC = () => {
  return (
    <main className='p-10'>
      <div className='bg-gray-50'>
        <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between'>
          <h1 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            <span className='block text-indigo-600'>Design system</span>
          </h1>
        </div>
      </div>
      <div className='mt-8 '>
        <h2 className='px-4 py-8 text-3xl font-extrabold tracking-tight text-gray-900 bg-gray-50 sm:text-4xl'>
          <span className='block text-indigo-600'>Contact item</span>
        </h2>
        <Contact conversation={listMock[0]} handleConversationSelection={console.log} />
      </div>

      <div className='mt-8 '>
        <h2 className='px-4 py-8 text-3xl font-extrabold tracking-tight text-gray-900 bg-gray-50 sm:text-4xl'>
          <span className='block text-indigo-600'>Contact List</span>
        </h2>
        <ContactList handleConversationSelection={console.log} />
      </div>

      <div className='relative mt-8 z-99'>
        <h2 className='px-4 py-8 mb-8 text-3xl font-extrabold tracking-tight text-gray-900 bg-gray-50 sm:text-4xl'>
          <span className='block text-indigo-600'>Form</span>
        </h2>
        <Form conversation={listMock[0]} refetchMessages={console.log} />
      </div>

      <div className='mt-8'>
        <h2 className='px-4 py-8 mb-8 text-3xl font-extrabold tracking-tight text-gray-900 bg-gray-50 sm:text-4xl'>
          <span className='block text-indigo-600'>Dialog bubble</span>
        </h2>
        <DialogBubble conversation={listMock[0]} message={mockMessageSender} />
        <DialogBubble conversation={listMock[0]} message={mockMessageRecipient} />
      </div>


    </main>
  )
}

export default DesignSystem
