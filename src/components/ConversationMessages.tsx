import useGetConversationMessages from '../hooks/useGetConversationMessages';
import DialogBubble from './DialogBubble';

type Props = {
    conversationId: number;
}

const ConversationMessages = ({ conversationId }: Props) => {
    if (!conversationId) return null;

    const { messages, loading, error } = useGetConversationMessages({ conversationId });


    return (
        <ul className='flex flex-col overflow-y-scroll list-height'>
            {messages.map((message) => (
                <li key={message.id}>
                    <DialogBubble key={message.id} body={message.body} authorId={message.authorId} />
                </li>
            ))}
        </ul>
    )
}

export default ConversationMessages
