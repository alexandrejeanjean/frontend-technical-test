import Image from 'next/image';
import { useState } from 'react';
import Send from "../assets/send-message.png";

const Form = () => {
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="messageInput" className="font-bold text-primary-blue">Message</label>
            <div className="relative mt-1.5">
                <label className="sr-only">"Votre message"</label>
                <input type="textarea" placeholder=""
                    id="messageInput" name="message" value={message} onChange={handleChange} className="w-full min-h-[50px] pl-5 pr-10 bg-gray-50 rounded-full" />
                <button type="submit" className="inline-flex items-center justify-center absolute right-0 top-1/2 w-8 h-8 p-1.5 mr-2.5 bg-primary-blue rounded-full transform -translate-y-1/2">
                    <span className="sr-only">Envoyer le message</span>
                    <Image className="transform -rotate-45" src={Send} alt="logo d'un avion en papier" />
                </button>
            </div>
        </form>
    )
}

export default Form;