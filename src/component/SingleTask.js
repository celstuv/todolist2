import React from 'react';


class SingleTask extends React.Component {

  state = {
    checked:false
  }
    constructor(props){
        super(props)
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e) {
      this.setState( { checked: !this.state.checked});
    }

  render(){
    let className =''
    if (this.state.checked) className = 'stroke'
    console.log(className);

  return (
    <li className="{className}">
      <input type="checkbox" onChange={this.handleOnChange}/>
      {this.props.taskName}

        <button>Edit</button>
        <button>Delete</button>

    </li>
  );
}
}

export default SingleTask;
