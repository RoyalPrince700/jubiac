import React, { useState } from "react";
import ROLE from "../common/role";
import { IoMdClose } from "react-icons/io";
import SummaryApi from "../common";
import { toast } from "react-toastify";

const ChangeUserRole = ({
  name,
  email,
  role,
  userId,
  onClose,
  callFunc, // This line reruns the API so changes reflect immediately
}) => {
  const [userRole, setUserRole] = useState(role);

  const handleOnChangeSelect = (e) => {
    setUserRole(e.target.value);
  };

  const updateUserRole = async () => {
    const fetchResponse = await fetch(SummaryApi.updateUser.url, {
      method: SummaryApi.updateUser.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        role: userRole,
      }),
    });
    const responseData = await fetchResponse.json();

    if (responseData.success) {
      toast.success(responseData.message);
      onClose();
      callFunc(); // Rerun the API to reflect changes immediately
    } else {
      toast.error(responseData.message);
    }
  };

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-800 text-white w-full max-w-md mx-4 rounded-lg shadow-lg p-6 relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
          onClick={onClose}
        >
          <IoMdClose size={24} />
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center">Change User Role</h2>

        <div className="space-y-4">
          <p className="text-sm">
            <span className="font-medium">Name:</span> {name}
          </p>
          <p className="text-sm">
            <span className="font-medium">Email:</span> {email}
          </p>

          <div className="flex flex-col space-y-2">
            <label htmlFor="role" className="text-sm font-medium">
              Role
            </label>
            <select
              id="role"
              className="bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={userRole}
              onChange={handleOnChangeSelect}
            >
              {Object.values(ROLE).map((el) => (
                <option value={el} key={el}>
                  {el}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition"
          onClick={updateUserRole}
        >
          Change Role
        </button>
      </div>
    </div>
  );
};

export default ChangeUserRole;
