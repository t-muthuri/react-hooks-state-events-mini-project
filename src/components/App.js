import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  //setState
  const [task, setTask] = useState(TASKS); //Initial state is from the array datt provided
  const [category, setCategory] = useState("All"); //initial state is "All" , all the tasks are loaded

  function handleRemoveTask(removeTask) {
    setTask(task.filter((data) => data.text !== removeTask));
  }
  const tasksShown = TASKS.filter(
    (data) => category === "All" || data.category === category
  );

  function addTask(data){
    setTask([...task, data])
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      {/* pass down the props from the parent comp */}
      <CategoryFilter
        categories={CATEGORIES}
        selectedCat={category}
        onSelectCat={setCategory}
      />
      <NewTaskForm addTask={addTask} categories={CATEGORIES.filter((data)=>data !== "All")} />
      <TaskList onRemoveTask={handleRemoveTask} tasks={tasksShown} />
    </div>
  );
}

export default App;
