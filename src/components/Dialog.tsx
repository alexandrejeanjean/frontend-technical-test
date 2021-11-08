import useDeleteMessage from "../hooks/useDeleteMessage";
import { useModal } from "../hooks/useModal";
import { Conversation } from "../types/conversation";
import { Message } from "../types/message";
import { getLoggedUserId } from "../utils/getLoggedUserId";
import { ConfirmationModal } from "./ConfirmationModal";
import { Modal } from "./Modal";

type Props = {
  message: Message;
  conversation: Conversation;
  refetchMessages: () => void;
}

const Dialog = ({ message, conversation, refetchMessages }: Props) => {
  const loggedUserId = getLoggedUserId();

  const { isShown, toggle } = useModal();

  const { deleteMessage, loading, error } = useDeleteMessage();

  const onConfirm = () => {
    console.log(message)
    deleteMessage({ messageId: message.id }).then(() => {
      refetchMessages();
    }).catch(error => {
      console.log("error", error);
    }).finally(() => toggle());
  }

  const onCancel = () => toggle();

  const isMyMessage = message.authorId === loggedUserId;

  if (isMyMessage) {
    return (
      <>
        <div className="flex flex-col items-end">

          <div className="relative max-w-full mb-2 group ">
            <p className="max-w-sm px-3 py-2 text-blue-900 bg-blue-100 rounded-t-lg rounded-bl-lg">{message.body}</p>
            <button type="button" onClick={toggle} className="absolute z-10 top-[-6px] right-0 text-center bg-red-500 text-white w-[100px] h-[15px] rounded-lg text-xs invisible group-hover:visible">Supprimer</button>
          </div>
          <Modal
            isShown={isShown}
            hide={toggle}
            headerText="Confirmation"
            modalContent={
              <ConfirmationModal
                onConfirm={onConfirm}
                onCancel={onCancel}
                message="Etes-vous sur de vouloir supprimer ce message ?"
              />
            }
          />
        </div>

      </>
    );
  }
  return (
    <>
      <div className="max-w-full mb-2 ">
        <p className="max-w-sm px-3 py-2 text-blue-900 bg-gray-100 rounded-t-lg rounded-br-lg">{message.body}</p>
      </div>
    </>
  );
}

export default Dialog;
