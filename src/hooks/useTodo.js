import React, { useState, useEffect } from "react";

export const useTodo = () => {
  const [task, setTask] = useState("");
  const [listTask, setListTask] = useState([]);

  useEffect(() => {
    setTask("");
  }, [listTask]);

  const filterTask = type => {
    tasks.filter(t => t.type === type);
  };

  const addTask = () => {
    setListTask(listTask.concat(task));
  };

  return {
    listTask,
    setTask,
    addTask,
    filterTask
  };
};
