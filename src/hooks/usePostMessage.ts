import useFetch from "use-http";
import { API_ENDPOINT } from "../server/contants";


type Props = {
    conversationId: number;
    authorId: number;
    message: string;
}

const usePostMessage = ({ conversationId, authorId, message }: Props) => {
    const { post, response, loading, error } = useFetch(API_ENDPOINT)

    const params = { authorId: authorId, conversationId: conversationId, body: message, timestamp: Date.now(), };

    const postMessage = async () => {
        const message = await post(`/messages/${conversationId}`, params);
        if (response.ok) console.log("POST SUCCESS");
    }

    return { postMessage, response, loading, error };
}

export default usePostMessage;