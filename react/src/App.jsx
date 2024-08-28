import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Todo } from "./Todo";
import Counter from "./Counter";
import Form from "./Form";
import Header from "./Header";
import Routing from "./Routing";
import Fakestore from "./Fakestore";
import "bootstrap/dist/css/bootstrap.min.css";
import CheckCont from "./CheckCont";
import Hero from "./Hero";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Routing />
      <ToastContainer />
    </>
  );
}

export default App;
