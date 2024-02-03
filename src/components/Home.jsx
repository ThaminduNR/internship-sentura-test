import React from "react";

function Home() {
  return (
    <div className="flex justify-center">
      <form className="mt-[100px]">
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
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-800">
          Save
        </button>
      </form>
    </div>
  );
}

export default Home;
