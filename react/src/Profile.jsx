import React from "react";
import { useSelector } from "react-redux";
const Profile = () => {
  const { login, userData } = useSelector((state) => state.user);
  console.log(login);
  return <div>{login ? JSON.stringify(userData) : "user not login"}</div>;
};

export default Profile;
