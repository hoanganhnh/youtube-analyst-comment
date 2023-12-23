import * as React from "react";
import Avatar from "react-avatar";

import { formatDateToLocalTime } from "../utils/time";
import { useSocket } from "../contexts/SocketContext";
import { useViewer } from "../contexts/ViewerContext";

const ListCommentStaticVideo = () => {
  const [messages, setMessages] = React.useState([]);
  const messagesContainerRef = React.useRef(null);
  const { socket } = useSocket();
  const { setVideo, setVideoDetails } = useViewer();

  React.useEffect(() => {
    if (socket.current) {
      socket.current.on("liveComment", (data) => {
        setMessages((prevMessages) => {
          const newMessages = [data, ...prevMessages];
          return newMessages;
        });
      });
    }

    return () => {
      setVideo(null);
      setVideoDetails({});
    };
  }, [socket.current]);

  return (
    <div ref={messagesContainerRef} className="h-full overflow-y-auto py-10">
      {messages.map((message, index) => (
        <VideoComment key={index} data={message} />
      ))}
    </div>
  );
};

function VideoComment({ data }) {
  const {
    message_author_name,
    message_dt,
    message_content,
    type_comment,
    author_photo_url,
    author_channel_id,
  } = data;

  return (
    <div
      className={`${
        type_comment === "NEG"
          ? "bg-red-200"
          : type_comment === "POS"
          ? "bg-green-200"
          : "bg-blue-200"
      }  rounded-lg p-2 shadow-md my-1 text-gray-800 text-xs`}
    >
      <div className="flex justify-between space-x-2 items-center space-y-1">
        <a
          href={`https://www.youtube.com/channel/${author_channel_id}`}
          target="_blank"
        >
          <Avatar
            className="flex"
            name={message_author_name}
            src={author_photo_url}
            round
            size="30"
          />
        </a>
        <div className="flex flex-1 gap-2 flex-wrap">
          <span className="text-gray-600">
            {formatDateToLocalTime(message_dt)}
          </span>
          <span className="text-gray-800 font-semibold">
            {message_author_name}:
          </span>
          <span className="text-gray-700 ">{message_content}</span>
        </div>
      </div>
    </div>
  );
}

export default ListCommentStaticVideo;
