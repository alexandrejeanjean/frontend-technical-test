import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import Send from "../assets/send-message.png";
import usePostMessage from '../hooks/usePostMessage';
import { Conversation } from '../types/conversation';
import { getLoggedUserId } from '../utils/getLoggedUserId';

type Props = {
    conversation: Conversation;
    refetchMessages: () => void;
}

const Form = ({ conversation, refetchMessages }: Props) => {
    if (!conversation) return null;

    const handleError = useErrorHandler();

    const [message, setMessage] = useState('');
    const [formErrorMessage, setFormErrorMessage] = useState('');
    const senderId = getLoggedUserId();

    const { postMessage, error } = usePostMessage({ conversationId: conversation.id, authorId: senderId, message: message });

    if (error) {
        handleError(error);
    }

    const resetMessage = () => setMessage('');

    useEffect(() => {
        if (conversation.id) resetMessage();
    }, [conversation])


    const handleChange = (event) => {
        const value = event.target.value;
        if (value && formErrorMessage.length > 0) {
            setFormErrorMessage('');
        }
        setMessage(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (message.length === 0) {
            return setFormErrorMessage("Veuillez saisir au moins 1 caractère pour envoyer le message");
        }

        postMessage().then(() => {
            resetMessage();
            refetchMessages();
        }).catch(error => {
            handleError(error);
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="messageInput" className="font-bold text-indigo-700">Message</label>
            <div className="relative mt-1.5">
                <label className="sr-only">"Votre message"</label>
                <textarea placeholder="" id="messageInput" name="message" value={message} onChange={handleChange} className="w-full min-h-[50px] pt-3 pl-5 pr-10 bg-gray-100 rounded-md" data-cy="textarea-message" />
                <button type="submit" className="inline-flex items-center justify-center absolute right-0 top-1/2 w-8 h-8 p-1.5 mr-2.5 bg-primary-blue rounded-full transform -translate-y-1/2" data-cy="submit-button">
                    <span className="sr-only">Envoyer le message</span>
                    <Image className="transform -rotate-45" src={Send} alt="logo d'un avion en papier" />
                </button>
                {formErrorMessage && <span className="mt-2 text-sm text-red-500">{formErrorMessage}</span>}
            </div>
        </form>
    )
}

export default Form;