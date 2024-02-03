import React, { useState,useEffect } from "react";
import axios from "axios";

function Home() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://b2282ce850984b03acdd516836693353.weavy.io/api/users",

          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer wys_ZQpIvKGlPdxPxyG936kdU20O3N8Dkm07N2Zp",
            },
          }
        );

        setUserList(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleIdChange = (event) => {
    setId(event.target.value.trim());
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", id, name, email);

    let data = JSON.stringify({
      uid: id.toString(),
      name,
      email,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://b2282ce850984b03acdd516836693353.weavy.io/api/users",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer wys_ZQpIvKGlPdxPxyG936kdU20O3N8Dkm07N2Zp",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <form className="mt-[100px]" onSubmit={handleSubmit}>
        <div>
          <label>
            User ID:
            <input
              type="text"
              name="id"
              value={id}
              onChange={handleIdChange}
              placeholder="Enter your ID"
              className="border-slate-400 border p-1 rounded-md mx-3"
            />
          </label>
          <label>
            User Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your Name"
              className="border-slate-400 border p-1 rounded-md mx-3"
            />
          </label>
          <label>
            User Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="border-slate-400 border p-1 rounded-md mx-5"
            />
          </label>
        </div>
        <div className="mt-[50px]">
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-800 mx-4"
          >
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
            {userList.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
