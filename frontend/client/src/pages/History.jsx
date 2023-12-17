import React from "react";

import Header from "../components/Header";

const ListHistory = () => {
  return (
    <table class="min-w-full divide-y divide-gray-200 overflow-x-auto">
      <thead class="bg-gray-50">
        <tr>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Youtube Video
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Title
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Status
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Role
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Email
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10">
                <img
                  class="h-10 w-10 rounded-full"
                  src="https://i.pravatar.cc/150?img=1"
                  alt=""
                />
              </div>
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">Jane Cooper</div>
                <div class="text-sm text-gray-500">jane.cooper@example.com</div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">
              Regional Paradigm Technician
            </div>
            <div class="text-sm text-gray-500">Optimization</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              Active
            </span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            Admin
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            jane.cooper@example.com
          </td>
          <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
            <a href="#" class="text-indigo-600 hover:text-indigo-900">
              Edit
            </a>
            <a href="#" class="ml-2 text-red-600 hover:text-red-900">
              Delete
            </a>
          </td>
        </tr>

        <tr>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10">
                <img
                  class="h-10 w-10 rounded-full"
                  src="https://i.pravatar.cc/150?img=1"
                  alt=""
                />
              </div>
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">Jane Cooper</div>
                <div class="text-sm text-gray-500">jane.cooper@example.com</div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">
              Regional Paradigm Technician
            </div>
            <div class="text-sm text-gray-500">Optimization</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              Active
            </span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            Admin
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            jane.cooper@example.com
          </td>
          <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
            <a href="#" class="text-indigo-600 hover:text-indigo-900">
              Edit
            </a>
            <a href="#" class="ml-2 text-red-600 hover:text-red-900">
              Delete
            </a>
          </td>
        </tr>

        <tr>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10">
                <img
                  class="h-10 w-10 rounded-full"
                  src="https://i.pravatar.cc/150?img=1"
                  alt=""
                />
              </div>
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">Jane Cooper</div>
                <div class="text-sm text-gray-500">jane.cooper@example.com</div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">
              Regional Paradigm Technician
            </div>
            <div class="text-sm text-gray-500">Optimization</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              Active
            </span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            Admin
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            jane.cooper@example.com
          </td>
          <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
            <a href="#" class="text-indigo-600 hover:text-indigo-900">
              Edit
            </a>
            <a href="#" class="ml-2 text-red-600 hover:text-red-900">
              Delete
            </a>
          </td>
        </tr>

        <tr>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10">
                <img
                  class="h-10 w-10 rounded-full"
                  src="https://i.pravatar.cc/150?img=1"
                  alt=""
                />
              </div>
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">Jane Cooper</div>
                <div class="text-sm text-gray-500">jane.cooper@example.com</div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">
              Regional Paradigm Technician
            </div>
            <div class="text-sm text-gray-500">Optimization</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              Active
            </span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            Admin
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            jane.cooper@example.com
          </td>
          <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
            <a href="#" class="text-indigo-600 hover:text-indigo-900">
              Edit
            </a>
            <a href="#" class="ml-2 text-red-600 hover:text-red-900">
              Delete
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const HistoryPage = () => {
  return (
    <div className="w-full flex flex-col p-3 bg-gray-800 text-gray-200 h-screen">
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
