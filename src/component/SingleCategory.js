import React from 'react';
import TaskList from './TaskList';
import CategoryTitle from './CategoryTitle';


class SingleCategory extends React.Component {

    constructor(props){
        super(props)

    }


  render(){
  return (

    <div className="SingleCategory" >
       <TaskList listeTaches={this.props.taskList}/>
       <CategoryTitle title={this.props.title}/>

       <button className="Ajout" onClick={this.props.tache}>+</button>

    </div>
  );
}
}

export default SingleCategory;
