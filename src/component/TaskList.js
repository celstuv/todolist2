import React from 'react';
import SingleTask from './SingleTask';


class TaskList extends React.Component {
    constructor(props){
        super(props)
    }
  render(){
    const taskList = this.props.listeTaches.map((task, index)=>{
        return <SingleTask taskName={task.name}/>
        })
  return (
    <div className="">
      {taskList}

    </div>

  );

}
}

export default TaskList;
