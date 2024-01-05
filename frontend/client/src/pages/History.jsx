import * as React from "react";
import axios from "axios";

import Header from "../components/Header";
import { formatDateToLocalTime } from "../utils/time";
import { Link } from "react-router-dom";
import { useUser } from "../contexts/AuthContext";

const ListHistory = () => {
  const [histories, setHistories] = React.useState([]);

  const { user } = useUser();

  React.useEffect(() => {
    const handleGetMyHistory = async () => {
      const { data: histories } = await axios.post(
        "http://127.0.0.1:5000/api/history/find-by-user-id",
        {
          userId: user.id,
        }
      );

      setHistories(histories);
    };
    handleGetMyHistory();
  }, []);

  return (
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
            Title
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Type
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Result
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {histories.map((history) => (
          <tr key={history._id}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={history.video_thumbnail_url}
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <a
                    href={history.video_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="text-sm font-medium text-gray-900">
                      {history.channel_name}
                    </div>
                  </a>
                  {/* <div className="text-sm text-gray-500">
                    jane.cooper@example.com
                  </div> */}
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{history.video_title}</div>
              <div className="text-sm text-gray-500">
                {formatDateToLocalTime(history.createdAt)}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {history.is_live ? "Live Stream" : "Static"}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <Link to={`/video/${history.video_id}`}>Analyst</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const HistoryPage = () => {
  return (
    <div className="w-full flex flex-col p-3 bg-gray-800 text-gray-200">
      <Header />
      <div className="flex mt-12">
        <div className="max-w-5xl m-auto">
          <h1 className="text-center mb-10 text-3xl">
            History Youtube analyst
          </h1>
          <ListHistory />
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
