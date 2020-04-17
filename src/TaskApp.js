import React from 'react';

import { useTask } from './hooks';
import { AddTask, ListTask } from './component';

export const TaskApp = () => {
  const {
    task,
    setTask,
    listTask,
    error,
    addTask,
    removeTask
  } = useTask();

  // error css
  const errorStyle = {color: 'red'};

  return (
      <div>

        <AddTask
            task={task}
            setTask={setTask}
            addTask={addTask}
        />

        {/* if error is valid than display it */}
        {error && <p style={errorStyle}>{error}</p>}

        <ListTask
            listTask={listTask}
            removeTask={removeTask}
        />

      </div>
  );
};
