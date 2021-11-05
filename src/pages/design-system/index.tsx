import type { FC } from 'react'
import Contact from '../../components/Contact'
import ContactList from '../../components/ContactList'
import DialogBubble from '../../components/DialogBubble'
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

const DesignSystem: FC = () => {
  return (
    <main className='p-10'>
      <div className='bg-gray-50'>
        <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between'>
          <h1 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            <span className='block text-indigo-600'>Design system</span>
          </h1>
          {/* <div className='flex mt-8 lg:mt-0 lg:flex-shrink-0'>
            <div className='inline-flex rounded-md shadow'>
              <a
                href='#'
                className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700'
              >
                Get started
              </a>
            </div>
            <div className='inline-flex ml-3 rounded-md shadow'>
              <a
                href='#'
                className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md hover:bg-indigo-50'
              >
                Learn more
              </a>
            </div>
          </div> */}
        </div>
      </div>
      <div className='mt-8 '>
        <h2 className='px-4 py-8 text-3xl font-extrabold tracking-tight text-gray-900 bg-gray-50 sm:text-4xl'>
          <span className='block text-indigo-600'>Contact item</span>
        </h2>
        <Contact senderNickname='Name Surname' />
      </div>

      <div className='mt-8 '>
        <h2 className='px-4 py-8 text-3xl font-extrabold tracking-tight text-gray-900 bg-gray-50 sm:text-4xl'>
          <span className='block text-indigo-600'>Contact List</span>
        </h2>
        <ContactList list={listMock} />
      </div>

      <div className='mt-8'>
        <h2 className='px-4 py-8 mb-8 text-3xl font-extrabold tracking-tight text-gray-900 bg-gray-50 sm:text-4xl'>
          <span className='block text-indigo-600'>Form message</span>
        </h2>
        <Form />
      </div>

      <div className='mt-8'>
        <h2 className='px-4 py-8 mb-8 text-3xl font-extrabold tracking-tight text-gray-900 bg-gray-50 sm:text-4xl'>
          <span className='block text-indigo-600'>Dialog bubble</span>
        </h2>
        <DialogBubble body="Hello leboncoin, nice to meet you" authorId={0} />
        <DialogBubble body="Hello leboncoin, nice to meet you" authorId={1} />
      </div>


    </main>
  )
}

export default DesignSystem
