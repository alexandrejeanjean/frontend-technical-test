import Head from 'next/head'
import { FC, useState } from 'react'
import ContactList from '../components/ContactList'
import Conversation from '../components/Conversation'
import styles from '../styles/Home.module.css'
import { Conversation as IConversation } from "../types/conversation"

export enum VIEW {
  LIST = 'list',
  CONVERSATION = 'conversation',
}

const Home: FC = () => {
  const year = new Date().getFullYear()
  const [selectedConversation, setSelectedConversation] = useState<IConversation>(null);
  const [view, setView] = useState(VIEW.LIST);

  const handleConversationSelection = (conversation) => {
    setView(VIEW.CONVERSATION);
    setSelectedConversation(conversation);
  }

  return (
    <>
      <Head>
        <title>Frontend Technical test - Leboncoin</title>
        <meta
          name='description'
          content='Frontend exercise for developpers who want to join us on leboncoin.fr'
        ></meta>
      </Head>

      <header>
        <h1 className="w-full py-5 mx-auto text-3xl font-extrabold tracking-tight text-center text-indigo-900 bg-yellow-400 border-b-2 border-gray-100 sm:text-4xl">LebonMot</h1>
      </header>

      <main>

        {/* Desktop view */}
        <div className="flex w-full h-full pb-3 overflow-hidden main-container-height lgd:hidden">
          <section className="w-1/2 border-r-2 border-gray-100">
            <h2 className="pt-5 pb-5 ml-3 text-3xl font-semibold text-yellow-600 border-b-2 border-gray-100">Messages</h2>
            <ContactList handleConversationSelection={handleConversationSelection} />
          </section>
          <section className="relative w-1/2">
            <Conversation conversation={selectedConversation} setView={(view) => setView(view)} />
          </section>
        </div>

        {/* Mobile view */}
        <div className="h-full pb-3 overflow-hidden main-container-height lg:hidden">
          <section className="border-r-2 border-gray-100">
            {view === 'list' &&
              <>
                <h2 className="pt-5 pb-5 ml-3 text-3xl font-semibold text-yellow-600 border-b-2 border-gray-100">Messages</h2>
                <ContactList handleConversationSelection={handleConversationSelection} />
              </>
            }
          </section>
          <section className="relative w-full h-full">
            {view === 'conversation' && <Conversation conversation={selectedConversation} setView={setView} />}
          </section>
        </div>

      </main >

      <footer className={styles.footer}>&copy; leboncoin - {year}</footer>
    </>
  )
}

export default Home
