import { useEffect, useState } from "react";
import useFetch from "use-http";
import { Conversation } from "../types/conversation";
import { getLoggedUserId } from "../utils/getLoggedUserId";

const useGetConversations = () => {
    const [conversations, setConversations] = useState<Conversation[]>([]);
    const { get, response, loading, error } = useFetch('http://localhost:3005')
    const loggedUserId = getLoggedUserId();

    useEffect(() => { initializeConversations() }, []);

    const initializeConversations = async () => {
        const conversations = await get(`/conversations/${loggedUserId}`)
        if (response.ok) setConversations(conversations);
    }

    return { conversations, loading, error };
}

export default useGetConversations;