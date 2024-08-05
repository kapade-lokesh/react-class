import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Todo } from "./Todo";
import Counter from "./Counter";
import Form from "./Form";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import Routing from "./Routing";
import Fakestore from "./Fakestore";

function App() {
  return (
    <>
      {/* <Routing/> */}
       <Fakestore/>
    </>
  );
}

export default App;
