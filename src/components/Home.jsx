import React from "react";

function Home() {
  return (
    <div className="flex justify-center">
      <form className="mt-[100px]">
        <div>
          <label>
            User ID:
            <input
              type="text"
              className="border-slate-400 border p-1 rounded-md  mx-3"
            />
          </label>
          <label>
            User Name:
            <input
              type="text"
              className="border-slate-400 border p-1 rounded-md mx-3"
            />
          </label>
          <label>
            User Email:
            <input
              type="text"
              className="border-slate-400 border p-1 rounded-md mx-5"
            />
          </label>
        </div>
        <div className="mt-[50px]">
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-800 mx-4">
            Save
          </button>
          <button className="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-blue-800 mx-4">
            Update
          </button>
          <button className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-blue-800">
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}

export default Home;
