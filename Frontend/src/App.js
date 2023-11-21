import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";

class task {
  constructor(sno, name, discription) {
    this.sno = sno;
    this.name = name;
    this.discription = discription;
  }
}

function App() {
  let [taskList, setTaskList] = useState([]);
  let [showForm, setShowForm] = useState(false);
  let [taskName, setTaskName] = useState("");
  let [taskDiscription, setTaskDiscription] = useState("");
  let [id, setId] = useState(1);

  useEffect(() => {
    const v = localStorage.getItem("currentList");
    const v2 = JSON.parse(v);
    if (v2) setTaskList(v2);
    let n = localStorage.getItem("currentId");
    if (n) setId(++n);
  }, []);

  let addTask = (e) => {
    e.preventDefault();
    let newTask = new task(id, taskName, taskDiscription);
    let updatedList = taskList;
    updatedList.push(newTask);
    setTaskList(updatedList);
    setId(id + 1);
    const localList = JSON.stringify(taskList);
    localStorage.setItem("currentList", localList);
    localStorage.setItem("currentId", id);
    setShowForm(false);
  };

  let deleteTask = async (sno) => {
    let updatedList = [];
    for (let el of taskList) {
      if (el.sno !== sno) {
        updatedList.push(el);
      }
    }
    setTaskList(updatedList);
    console.log(updatedList);
    if (updatedList.length === 0) {
      localStorage.clear();
    } else {
      const localList = JSON.stringify(updatedList);
      await localStorage.setItem("currentList", localList);
    }
  };

  return (
    <div className="App">
      <Header setShowForm={setShowForm} showForm={showForm} />
      {showForm && (
        <form onSubmit={addTask}>
          <input
            type="text"
            required
            onChange={(e) => {
              setTaskName(e.target.value);
            }}
            placeholder="Task name"
          />
          <input
            type="textArea"
            onChange={(e) => {
              setTaskDiscription(e.target.value);
            }}
            placeholder="Description"
          />
          <button type="submit">Submit</button>
        </form>
      )}

      <List taskList={taskList} deleteTask={deleteTask} />
    </div>
  );
}
export default App;
