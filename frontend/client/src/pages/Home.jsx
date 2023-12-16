import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import { useUser } from "../contexts/AuthContext";

const HomePage = () => {
  const { isAuthen } = useUser();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuthen) {
      navigate("/login");
    }
  }, [isAuthen]);

  return (
    <div className="w-full flex flex-col p-3 bg-gray-800 text-gray-200 h-screen">
      <Header />
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="mb-5">
          <Link to="live-static" className="p-6 hover:underline">
            Video Static
          </Link>
        </div>
        <div>
          <Link to="live-stream" className="hover:underline">
            Video Live Stream
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
