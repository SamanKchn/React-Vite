import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import List from "./components/List";

export default function App() {

  const list = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "10" , '11'];


  return (
    <>
    <div className="container mt-3">
      <List list={list} title="Alphabetic"/>
    </div>
    </>
  );
}
