import React from 'react';

export const AddTask = props => {
  const {task, setTask, addTask} = props;

  return (
      <div>
        <label htmlFor="task">Task:&nbsp;</label>
        <input id="task" maxLength="15"
               value={task}
               onChange={(e) => setTask(e.target.value)}/>
        &nbsp;
        <button onClick={() => addTask()}>Add</button>
      </div>
  );

};