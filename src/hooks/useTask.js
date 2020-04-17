import React, { useState, useEffect } from 'react';

export const useTask = () => {

  // create the states
  const [task, setTask] = useState('');
  const [error, setError] = useState('');
  const [listTask, setListTask] = useState([]);

  // once listTask changes, clean the task.
  useEffect(() => setTask(''), [listTask]);

  // add a task also verify duplicate task and display an error.
  const addTask = () => {
    let errorMsg = '';

    const taskFound = listTask.find(t => t === task);

    !taskFound
        ? setListTask(listTask.concat(task))
        : errorMsg = 'Task already added!!';

    setError(errorMsg);
  };

  // remove task given one.
  const removeTask = task => {
    setListTask(prevState => prevState.filter(t => t !== task));
    setError('');
  };

  return {
    task,
    setTask,
    listTask,
    error,
    addTask,
    removeTask,
  };
};
