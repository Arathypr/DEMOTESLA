import React, { useState } from "react";

function SignUp() {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen w-[100%]">
        <div className="bg-white p-10 rounded-lg  lg:w-[40%] ssm:w-[65%]   ">
          {isSignUp ? (
            <>
              <h2 className="text-center text-2xl font-bold mb-4">
                Create an Account
              </h2>
              <form>
                <div className="mb-4">
                  <label className="block mb-1">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Password</label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700"
                >
                  Sign Up
                </button>
                <div className="mt-4 text-center">
                  <span>Already have an account?</span>
                  <button
                    onClick={handleToggle}
                    className="text-blue-500 hover:underline ml-1"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              <h2 className="text-center text-2xl font-bold mb-4">Sign In</h2>
              <form>
                <div className="mb-4">
                  <label className="block mb-1">Email</label>
                  <input
                    type="text"
                    placeholder="Enter email"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Password</label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="flex items-center mb-4">
                  <input type="checkbox" id="remember" className="mr-2" />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700"
                >
                  Sign in
                </button>
                <div className="mt-4 text-center">
                  <a href="#" className="text-blue-500 hover:underline">
                    Forgot password?
                  </a>
                </div>
                <div className="mt-4 text-center">
                  <span>Do you have an account?</span>
                  <button
                    onClick={handleToggle}
                    className="text-blue-500 hover:underline ml-1"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default SignUp;
