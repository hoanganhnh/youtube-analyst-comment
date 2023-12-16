import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="max-w-8xl w-full bg-transparent text-gray-200 divide-y ml-18 border-b">
      <div className="flex justify-between items-center h-14 mx-4">
        <div className="ml-3">
          <Link to="/">
            <img
              src="https://www.cdnlogo.com/logos/y/57/youtube-icon.svg"
              className="w-20 h-8 aspect-auto"
            />
          </Link>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <button>
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-blue-300 overflow-hidden object-cover">
                <img
                  className="object-cover"
                  src="/avatar-placeholder.png"
                  alt="avatar"
                />
              </div>
              <div className="ml-3">hoang anh</div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
