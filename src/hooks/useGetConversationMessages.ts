import { useEffect, useState } from "react";
import useFetch from "use-http";
import { Message } from "../types/message";
import { API_ENDPOINT } from "../utils/contants";

type Props = {
    conversationId: number;
}

const useGetConversationMessages = ({ conversationId }: Props) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const { get, response, loading, error } = useFetch(API_ENDPOINT)

    useEffect(() => { fetch() }, [conversationId]);

    const fetch = async () => {
        const messages = await get(`/messages/${conversationId}`)
        if (response.ok) setMessages(messages);
    }


    return { messages, loading, error };
}

export default useGetConversationMessages;