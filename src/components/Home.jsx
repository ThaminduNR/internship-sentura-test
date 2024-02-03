import React, { useState } from "react";

function Home() {

const [id, setId] = useState("");
const [name, setName] = useState("");
const [email, setEmail] = useState("");




  return (
    <div className="flex justify-center flex-col items-center">
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
      <div className="mt-10">
        <table className="table-auto border-separate">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
            <tr>
              <td>02</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr>
              <td>03</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
