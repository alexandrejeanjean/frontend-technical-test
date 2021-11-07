import { getLoggedUserId } from "../utils/getLoggedUserId";

const Dialog = ({ message, conversation }) => {
  const loggedUserId = getLoggedUserId();

  const isMyMessage = message.authorId === loggedUserId;

  if (isMyMessage) {
    return (
      <div className="flex flex-col items-end">
        <div className="max-w-full mb-2 ">
          <p className="max-w-sm px-3 py-2 text-blue-900 bg-blue-100 rounded-t-lg rounded-bl-lg">{message.body}</p>
        </div>
      </div>
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
