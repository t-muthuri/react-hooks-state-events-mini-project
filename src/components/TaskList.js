import React from "react";
import { TASKS } from "../data";
import Task from "./Task";

function TaskList({onRemoveTask}) {

  return (
    <div className="tasks">
      {TASKS.map((data) => (
          <Task
            key={data.text}
            text={data.text}
            category={data.category}
            onRemoveTask={data.onRemoveTask}
            />
        ))};
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
