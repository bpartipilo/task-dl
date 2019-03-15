import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

class Task extends Component {
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
            <td>{this.props.task.update}</td>
        </tr>
        );
    }
}

export default TaskContainer = withTracker(() => {
    return {

    };
})(Task);