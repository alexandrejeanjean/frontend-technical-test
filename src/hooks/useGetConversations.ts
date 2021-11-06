import { useEffect, useState } from "react";
import useFetch from "use-http";
import { Conversation } from "../types/conversation";
import { API_ENDPOINT } from "../utils/contants";
import { getLoggedUserId } from "../utils/getLoggedUserId";

const useGetConversations = () => {
    const [conversations, setConversations] = useState<Conversation[]>([]);
    const { get, response, loading, error } = useFetch(API_ENDPOINT)
    const loggedUserId = getLoggedUserId();

    useEffect(() => { fetch() }, []);

    const fetch = async () => {
        const conversations = await get(`/conversations/${loggedUserId}`)
        if (response.ok) setConversations(conversations);
    }

    return { conversations, loading, error };
}

export default useGetConversations;