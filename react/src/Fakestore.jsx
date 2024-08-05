import React, { useEffect, useState } from "react";
import axios from "axios";
const Fakestore = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setData(response.data);
    };
    fetchdata();
  }, []);

  return (
    <>
      {data.map((item) => {
        return <img src={item.image}></img>;
      })}
    </>
  );
};

export default Fakestore;
