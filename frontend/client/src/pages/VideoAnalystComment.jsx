import * as React from "react";
import { useParams } from "react-router-dom";
import { Pie } from "react-chartjs-2";

import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

import Header from "../components/Header";
import axios from "axios";
import { formatDateToLocalTime } from "../utils/time";

const ListComment = ({ comments }) => {
  return (
    <div
      className="overflow-x-hidden overflow-y-scroll"
      style={{ maxHeight: "480px" }}
    >
      <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Youtube Video Channel
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Content
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Type
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {comments.map((comment) => (
            <tr key={comment._id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <a
                      href={`https://www.youtube.com/channel/${comment.author_channel_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="h-10 w-10 rounded-full"
                        src={comment.author_photo_url}
                        alt={comment.message_author_name}
                      />
                    </a>
                  </div>
                  <div className="ml-4">
                    <a
                      href={`https://www.youtube.com/channel/${comment.author_channel_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="text-sm font-medium text-gray-900">
                        {comment.message_author_name}
                      </div>
                    </a>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {comment.message_content}
                </div>
                <div className="text-sm text-gray-500">
                  {formatDateToLocalTime(comment.message_dt)}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 ${
                    comment.type_comment === "POS"
                      ? "text-green-800"
                      : "text-red-600"
                  }`}
                >
                  {comment.type_comment === "POS" ? "Positive" : "Negative"}
                </span>
              </td>
              {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <Link to={`/video/${history.video_id}`}>Analyst</Link>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const VideoAnalystComment = () => {
  const [comments, setComments] = React.useState([]);
  const [data, setData] = React.useState({ countNEG: 0, countPOS: 0 });

  const { videoId } = useParams();

  React.useEffect(() => {
    const handleGetAnalystComments = async () => {
      try {
        const { data } = await axios.post(
          `http://127.0.0.1:5000/api/comment/all`,
          {
            videoId,
          }
        );

        console.log(data);
        setComments(data.comments);
        setData({ countNEG: data.countNEG, countPOS: data.countPOS });
      } catch (error) {}
    };
    handleGetAnalystComments();
  }, [videoId]);

  return (
    <div className="w-full flex flex-col p-3 bg-gray-800 text-gray-200 h-screen">
      <Header />
      <div className="flex mt-6">
        <div className="max-w-5xl m-auto">
          <ListComment comments={comments} />
          <div
            className="w-7/12 mt-5 flex items-center"
            style={{ minHeight: "320px" }}
          >
            <Pie
              data={{
                labels: ["Negative", "Positive"],
                datasets: [
                  {
                    data: [data.countNEG, data.countPOS],
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                    ],
                  },
                ],
              }}
            />
            <div>Total: {data.countNEG + data.countPOS} comments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoAnalystComment;
