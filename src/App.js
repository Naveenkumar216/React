import React from "react";
import "./App.css";
import Greets from "./components/Greets";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      <Message></Message>
      {/* <Greets name="Bruce" heroName="Batman">
        <p>This childern props</p>
      </Greets>
      <Greets name="Diana" heroName="Wonder women">
        <button>Action</button>
      </Greets>
      <Greets name="Clark" heroName="Superman" />
      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Diana" heroName="Wonder women" />
  <Welcome name="Clark" heroName="Superman" />*/}
      {/*<Hello />*/}
    </div>
  );
}

export default App;
