import { useEffect, useState } from "react";
import useFetch from "use-http";
import { Message } from "../types/message";

type Props = {
    conversationId: number;
}

const useGetConversationMessages = ({ conversationId }: Props) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const { get, response, loading, error } = useFetch('http://localhost:3005')

    useEffect(() => { fetch() }, [conversationId]);

    const fetch = async () => {
        const messages = await get(`/messages/${conversationId}`)
        if (response.ok) setMessages(messages);
    }


    return { messages, loading, error };
}

export default useGetConversationMessages;