import React from "react";

const Header = () => {
  return (
    <header className="max-w-8xl w-full bg-transparent text-gray-200 divide-y ml-18 border-b">
      <div className="flex justify-between items-center h-14 mx-4">
        <div className="-ml-3">
          <img
            src="https://www.cdnlogo.com/logos/y/57/youtube-icon.svg"
            className="w-20 h-8 aspect-auto"
          />
        </div>

        <div className="flex items-center justify-center space-x-4">
          <button>
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-blue-300 overflow-hidden object-cover">
                <img
                  className="object-cover"
                  src="https://images.unsplash.com/photo-1570724061670-86a53c509dee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                  alt=""
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
