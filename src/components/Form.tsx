import Image from 'next/image';
import { useEffect, useState } from 'react';
import Send from "../assets/send-message.png";
import usePostMessage from '../hooks/usePostMessage';
import { Conversation } from '../types/conversation';
import { getLoggedUserId } from '../utils/getLoggedUserId';

type Props = {
    conversationId: Pick<Conversation, "id">;
    refetchMessages: () => void;
}

const Form = ({ conversationId, refetchMessages }: Props) => {

    if (!conversationId) return null;

    const [message, setMessage] = useState('');
    const authorId = getLoggedUserId();

    const { postMessage, response, loading, error } = usePostMessage({ conversationId: conversationId, authorId: authorId, message: message });


    const resetMessage = () => setMessage('');

    useEffect(() => {
        if (conversationId) resetMessage();
    }, [conversationId])


    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postMessage().then(() => {
            resetMessage();
            refetchMessages();
        }).catch(error => {
            console.log("error", error);
        })

    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="messageInput" className="font-bold text-indigo-700">Message</label>
            <div className="relative mt-1.5">
                <label className="sr-only">"Votre message"</label>
                <textarea placeholder=""
                    id="messageInput" name="message" value={message} onChange={handleChange} className="w-full min-h-[50px] pt-3 pl-5 pr-10 bg-gray-100 rounded-md" />
                <button type="submit" className="inline-flex items-center justify-center absolute right-0 top-1/2 w-8 h-8 p-1.5 mr-2.5 bg-primary-blue rounded-full transform -translate-y-1/2">
                    <span className="sr-only">Envoyer le message</span>
                    <Image className="transform -rotate-45" src={Send} alt="logo d'un avion en papier" />
                </button>
            </div>
        </form>
    )
}

export default Form;