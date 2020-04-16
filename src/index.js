import React, { useState } from 'react';
import { render } from 'react-dom';

const MyApp = () => {
  const [task, setTask] = useState('');
  const [listTask, setListTask] = useState([]);
  const [error, setError] = useState('');

  const addTask = () => {
    let errorMsg = '';
    const taskFound = listTask.find((t) => t === task);
    if (!taskFound) {
      setListTask(listTask.concat(task));
      setTask('');
    } else {
      errorMsg = 'Task already added!!';
    }
    setError(errorMsg);
  };

  const removeTask = (task) => {
    setListTask((prevState) => prevState.filter((t) => t !== task));
  };

  const errorStyle = {color: 'red'};
  const taskStyle = {
    width: '12em',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.5em'
  };

  return (
      <div>
        <label htmlFor="task">Task: </label>
        <input id="task" maxLength="15" value={task} onChange={(e) => setTask(e.target.value)}/>
        <button onClick={() => addTask()}>Add</button>
        {error && <p style={errorStyle}>{error}</p>}
        <p>To do tasks!</p>
        {listTask &&
        listTask.map((t) => {
          return (
              <div style={taskStyle} key={t}>
                <label>{t}</label>&nbsp;
                <button onClick={() => removeTask(t)}>Remove</button>
              </div>
          );
        })}
      </div>
  );
};

render(<MyApp/>, document.getElementById('root'));
