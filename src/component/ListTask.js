import React from 'react';

export const ListTask = props => {
  const {listTask, removeTask} = props;

  // task list.
  const taskStyle = {
    width: '12em',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.5em'
  };

  return (
      <div>
        <p>Tasks to do:</p>

        {
          listTask && listTask.map(task => {
            return (
                <div style={taskStyle} key={task}>
                  <label>{task}</label>&nbsp;
                  <button onClick={() => removeTask(task)}>
                    Remove
                  </button>
                </div>
            );
          })
        }
      </div>
  );

};
