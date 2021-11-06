import Head from 'next/head'
import type { FC } from 'react'
import ContactList from '../components/ContactList'
import Form from '../components/Form'
import styles from '../styles/Home.module.css'

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
},
{
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
},
{
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
},
{
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
},
{
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
},
{
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
}
]


const Home: FC = () => {
  const year = new Date().getFullYear()

  return (
    <div>
      <Head>
        <title>Frontend Technical test - Leboncoin</title>
        <meta
          name='description'
          content='Frontend exercise for developpers who want to join us on leboncoin.fr'
        ></meta>
      </Head>

      <header><h1 className="w-full py-5 mx-auto text-3xl font-extrabold tracking-tight text-center text-indigo-900 bg-yellow-400 border-b-2 border-gray-100 sm:text-4xl">LebonMessager</h1></header>

      <main className="w-full overflow-hidden main-container-height">
        <div className="flex h-full pb-3">
          <section className="w-1/2 border-r-2 border-gray-100">
            <h2 className="pt-5 pb-5 ml-3 text-3xl font-semibold text-yellow-600 border-b-2 border-gray-100">Messages</h2>
            <ContactList list={listMock} />
          </section>
          <section className="relative w-1/2">
            <div className="absolute bottom-0 left-0 w-full px-3">
              <Form />
            </div>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>&copy; leboncoin - {year}</footer>
    </div>
  )
}

export default Home
