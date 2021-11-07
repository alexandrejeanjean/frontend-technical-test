import { useEffect, useState } from "react";
import useFetch, { CachePolicies } from "use-http";
import { API_ENDPOINT } from "../server/contants";
import { Message } from "../types/message";

type Props = {
    conversationId: number;
}

const useGetConversationMessages = ({ conversationId }: Props) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const { get, response, loading, error } = useFetch(API_ENDPOINT, {
        cacheLife: 0,
        cachePolicy: CachePolicies.NO_CACHE,
    })

    useEffect(() => { fetch() }, [conversationId]);

    const fetch = async () => {
        const messages = await get(`/messages/${conversationId}`)
        if (response.ok) setMessages(messages);
    }

    return { fetch, messages, loading, error };
}

export default useGetConversationMessages;