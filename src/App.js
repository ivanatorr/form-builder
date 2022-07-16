import logo from "./logo.svg";
import "./App.css";
import MyBuilder from "./MyBuilder";
// import { Editor } from "@craftjs/core";
import { Text } from "./components/Text";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <MyBuilder />
      {/* <Editor resolver={{ Text }}></Editor>; */}
    </>
  );
}

export default App;
