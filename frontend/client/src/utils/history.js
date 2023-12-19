import axios from "axios";

export const createHistory = ({ userId, videoId }) => {
  axios
    .post(`http://127.0.0.1:5000/api/history/create`, {
      userId,
      video_id: videoId,
    })
    .then(() => {
      console.log("create history successful");
    });
};
