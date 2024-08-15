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

function App() {
  return (
    <>
      {/* <Routing/> */}
      <Counter />

      <CheckCont />
    </>
  );
}

export default App;
