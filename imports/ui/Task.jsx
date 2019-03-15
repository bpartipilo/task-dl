import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

class Task extends Component {
    constructor(props) {
        super(props);
        
    
        this.updateState = this.updateState.bind(this);
     };
     updateState() {
        console.log ("hello")
     }
    render() {
        return (
            <tr>
            <td>{this.props.task.time}</td>
            <td>{this.props.task.asm}</td>
            <td>{this.props.task.task}</td>
            <td>{this.props.task.porter}</td>
            <td>{this.props.task.status}</td>
            <td>{this.props.task.notes}</td>
            <td>{this.props.task.username}</td>
            <td><button onClick = {this.updateState}>UPDATE</button></td>
        </tr>
        );
    }
}

export default TaskContainer = withTracker(() => {
    return {

    };
})(Task);