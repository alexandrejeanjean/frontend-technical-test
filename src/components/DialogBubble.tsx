import { Message } from "../types/message";
import { getLoggedUserId } from "../utils/getLoggedUserId";

const DialogBubble = ({ body, authorId }: Partial<Message>) => {
  const loggedUserId = getLoggedUserId();
  if (authorId === loggedUserId) {
    return (
      <>
        <span className="text-xs font-medium text-gray-600">Author name</span>
        <div className="max-w-sm px-3 py-2 mb-2 bg-gray-100 rounded-t-lg rounded-br-lg ">
          <p className="text-blue-900">{body}</p>
        </div>
      </>
    );
  }
  return (
    <>
      <span className="text-xs font-medium text-gray-600">Author name</span>
      <div className="max-w-sm px-3 py-2 mb-2 bg-blue-100 rounded-t-lg rounded-bl-lg ">
        <p className="text-blue-900">{body}</p>
      </div>
    </>
  );
}

export default DialogBubble;
