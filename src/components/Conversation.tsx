import useGetConversationMessages from "../hooks/useGetConversationMessages";
import { Conversation as IConversation } from "../types/conversation";
import DialogList from "./DialogList";
import Form from "./Form";
import Loading from "./Loading";

type Props = {
    conversation: IConversation;
}

const Conversation = ({ conversation }: Props) => {

    if (!conversation) return null;

    const { fetch: refetchMessages, messages, loading, error } = useGetConversationMessages({ conversationId: conversation.id });

    if (loading) {
        return (
            <div className="flex items-center justify-center w-full h-full">
                <Loading />
            </div>
        )
    }

    return (
        <>
            <div className="flex justify-center w-full py-[22px] border-b-2 border-gray-100 align-center ">
                <div className='flex items-center justify-center w-8 h-8 mr-3 bg-indigo-700 rounded-full'>
                    <p className="font-medium text-white">{conversation.senderNickname[0]}</p>
                </div>
                <h2 className="text-2xl font-semibold text-yellow-600 ">{conversation.senderNickname}</h2>
            </div>
            <DialogList messages={messages} />
            <div className="absolute bottom-0 left-0 w-full px-3">
                <Form conversation={conversation} refetchMessages={refetchMessages} />
            </div>
        </>
    );
}

export default Conversation;
