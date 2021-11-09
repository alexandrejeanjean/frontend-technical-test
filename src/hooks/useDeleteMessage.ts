import useFetch from "use-http";
import { API_ENDPOINT } from "../server/contants";


type Props = {
    messageId: number;
}

const useDeleteMessage = () => {
    const { del, response, loading, error } = useFetch(API_ENDPOINT);

    const deleteMessage = async ({ messageId }: Props) => {
        const deleteMsg = await del(`/message/${messageId}`);
        if (response.ok) console.log("DELETE SUCCESS");
    }

    return { deleteMessage, response, loading, error };
}

export default useDeleteMessage;