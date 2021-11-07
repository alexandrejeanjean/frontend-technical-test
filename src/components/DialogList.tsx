import { Conversation } from '../types/conversation';
import { Message } from '../types/message';
import Dialog from './Dialog';

type Props = {
    messages: Message[];
    conversation: Conversation;
}

const DialogList = ({ messages, conversation }: Props) => {
    const reverseMessageArray = messages.reverse();
    return (
        <ul className='flex flex-col-reverse p-3 overflow-y-scroll message-list-height'>
            {reverseMessageArray.map((message) => (
                <li key={message.id}>
                    <Dialog key={message.id} message={message} conversation={conversation} />
                </li>
            ))}
        </ul>
    )
}

export default DialogList;
