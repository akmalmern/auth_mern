import axios from "axios";
import { useEffect, useState } from "react";

const Contact = () => {
  const [use, setUsers] = useState([]);
  axios.defaults.withCredentials = true;
  const getAll = async () => {
    let res = await axios.get("http://localhost:5000/all", {
      withCredentials: true,
    });
    setUsers(res.data.users);
  };
  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      {use.map((elem, index) => (
        <div className="div" key={index}>
          <h1 className="text h1">{elem.email}</h1>
        </div>
      ))}
    </>
  );
};

export default Contact;
