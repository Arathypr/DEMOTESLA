import React from "react";

function DemoDrive() {
  return (
    <div className="p-6 max-w-lg mx-auto bg-white  mt-10 rounded-md">
      <h1 className="text-3xl font-semibold mb-4">Demo Drive Model Y</h1>
      <p className="mb-6">
        Experience Full Self-Driving (Supervised), Learn About Charging and Get
        All Your Questions Answered
      </p>
      <form>
        <div className="mb-4">
          <label
            htmlFor="zipCode"
            className="block text-sm font-medium text-gray-700"
          >
            Zip Code:
          </label>
          <input
            type="text"
            id="zipCode"
            placeholder="Enter Zip Code"
            required
            className="mt-1 block  px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4 flex gap-4">
          <div className="w-1/2">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <div className="mb-4 flex gap-4">
          <div className="w-1/2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number:
            </label>
            <div className="flex items-center mt-1">
              <input
                type="text"
                id="phoneNumber"
                placeholder="(201) 555-0123"
                required
                className="ml-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              required
              className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-indigo-500"
            />
            <span className="ml-2 text-sm text-gray-700">
              By continuing, I agree to the{" "}
              <a
                href="/terms-and-conditions"
                className="text-blue-500 hover:underline"
              >
                Terms and Conditions
              </a>
            </span>
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Find Location and Time
          </button>
        </div>
      </form>
    </div>
  );
}

export default DemoDrive;
