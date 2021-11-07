import useGetConversationMessages from "../hooks/useGetConversationMessages";
import { ConversationId } from "../pages";
import DialogList from "./DialogList";
import Form from "./Form";
import Loading from "./Loading";

type Props = {
    conversationId: ConversationId
}

const Conversation = ({ conversationId }: Props) => {

    const { fetch: refetchMessages, messages, loading, error } = useGetConversationMessages({ conversationId });

    if (loading) {
        return (
            <div className="flex items-center justify-center w-full h-full">
                <Loading />
            </div>
        )
    }

    return (
        <>
            <DialogList messages={messages} />
            <div className="absolute bottom-0 left-0 w-full px-3">
                <Form conversationId={conversationId} refetchMessages={refetchMessages} />
            </div>
        </>
    );
}

export default Conversation;
