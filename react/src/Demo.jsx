import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const Demo = () => {
  const [allusers, setUsers] = useState([]);
  const fetchuser = async () => {
    const response = axios.get("http://localhost:8080/api/user/allusers");
    toast.promise(response, {
      pending: "Loading data",
      success: "data fetched",
    });

    const apiresponse = (await response).data;

    setUsers(apiresponse);
  };

  useEffect(() => {
    fetchuser();
  }, []);

  return <div>{JSON.stringify(allusers)}</div>;
};

export default Demo;
