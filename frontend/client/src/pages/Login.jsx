import * as React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <div className="mb-4">
          <label htmlFor="email" className="text-gray-600 block mb-2">
            email
          </label>
          <input
            required
            type="text"
            id="email"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="text-gray-600 block mb-2">
            Password
          </label>
          <input
            required
            type="password"
            id="password"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleLogin}
          >
            Login
          </button>

          <Link to="/signup" className="ml-4 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
