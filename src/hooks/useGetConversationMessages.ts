import { useEffect, useState } from "react";
import useFetch from "use-http";
import { Message } from "../types/message";
import { getLoggedUserId } from "../utils/getLoggedUserId";

type Props = {
    conversationId: number;
}

const useGetConversationMessages = ({ conversationId }: Props) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const { get, response, loading, error } = useFetch('http://localhost:3005')
    const loggedUserId = getLoggedUserId();

    useEffect(() => { initializeConversations() }, []);

    const initializeConversations = async () => {
        const messages = await get(`/conversations/${loggedUserId}/${conversationId}`)
        if (response.ok) setMessages(messages);
    }

    return { messages, loading, error };
}

export default useGetConversationMessages;