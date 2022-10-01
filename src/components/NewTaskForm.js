import React, {useState} from "react";

function NewTaskForm({addTask, categories}) {

  const [task, setTask] = useState(""); //Initial state is an empty string
  const [category, setCategory] = useState("Code"); //initial state is "Code" , filter the tasks according to the categories

  function handleSubmit(e){
    e.preventDefault() //prevent the page from reloading when the new task is added
    addTask({task, category});
    setTask("");
    setCategory ("Code");
  }

  const submitNew = categories.map((data)=><option key={data}>{data}</option>)
  
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      {/* add event listeners for new tasks */}
      <label>
        Details
        <input type="text" name="text" value={task} onChange={(e)=> setTask(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e)=>setCategory(e.target.value)}>{submitNew }
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
