import { useMemo } from 'react';
import { Conversation } from '../types/conversation';
import { Message } from '../types/message';
import Dialog from './Dialog';

type Props = {
    messages: Message[];
    conversation: Conversation;
    refetchMessages: () => void;
}

const DialogList = ({ messages, conversation, refetchMessages }: Props) => {
    const reverseMessageArray = useMemo(() => {
        if (messages) {
            return messages.reverse()
        }
        return [];

    }, [messages]);
    return (
        <ul className='flex flex-col-reverse p-3 overflow-y-scroll message-list-height' data-cy="conversation-list">
            {reverseMessageArray.map((message) => (
                <li key={message.id} data-cy="conversation-list-item">
                    <Dialog message={message} conversation={conversation} refetchMessages={refetchMessages} />
                </li>
            ))}
        </ul>
    )
}

export default DialogList;
