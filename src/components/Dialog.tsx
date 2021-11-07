import { Message } from "../types/message";
import { getLoggedUserId } from "../utils/getLoggedUserId";

const Dialog = ({ body, authorId, ...props }: Partial<Message>) => {
  const loggedUserId = getLoggedUserId();
  if (authorId === loggedUserId) {
    return (
      <>
        <span className="text-xs font-medium text-gray-600">{authorId}</span>
        <div className="flex justify-end max-w-full mb-2 ">
          <p className="max-w-sm px-3 py-2 text-blue-900 bg-blue-100 rounded-t-lg rounded-bl-lg ">{body}</p>
        </div>
      </>
    );
  }
  return (
    <>
      <span className="text-xs font-medium text-gray-600">{authorId}</span>
      <div className="max-w-full mb-2 ">
        <p className="max-w-sm px-3 py-2 text-blue-900 bg-gray-100 rounded-t-lg rounded-br-lg">{body}</p>
      </div>
    </>
  );
}

export default Dialog;
