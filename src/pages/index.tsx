import Head from 'next/head'
import { FC, useState } from 'react'
import ContactList from '../components/ContactList'
import Conversation from '../components/Conversation'
import styles from '../styles/Home.module.css'
import { Conversation as IConversation } from "../types/conversation"

export type ConversationId = Pick<IConversation, "id">;

const Home: FC = () => {
  const year = new Date().getFullYear()
  const [selectedConversation, setSelectedConversation] = useState<ConversationId>(null);

  const handleConversationSelection = (conversationId) => {
    setSelectedConversation(conversationId);
  }


  return (
    <div>
      <Head>
        <title>Frontend Technical test - Leboncoin</title>
        <meta
          name='description'
          content='Frontend exercise for developpers who want to join us on leboncoin.fr'
        ></meta>
      </Head>

      <header><h1 className="w-full py-5 mx-auto text-3xl font-extrabold tracking-tight text-center text-indigo-900 bg-yellow-400 border-b-2 border-gray-100 sm:text-4xl">LebonMot</h1></header>

      <main className="w-full overflow-hidden main-container-height">
        <div className="flex h-full pb-3">
          <section className="w-1/2 border-r-2 border-gray-100">
            <h2 className="pt-5 pb-5 ml-3 text-3xl font-semibold text-yellow-600 border-b-2 border-gray-100">Messages</h2>
            <ContactList handleConversationSelection={handleConversationSelection} />
          </section>
          <section className="relative w-1/2">
            <Conversation conversationId={selectedConversation} />
          </section>
        </div>
      </main>

      <footer className={styles.footer}>&copy; leboncoin - {year}</footer>
    </div>
  )
}

export default Home
