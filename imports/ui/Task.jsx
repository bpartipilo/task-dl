import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

class Task extends Component {
    render() {
        return (
            <tr>
            <td>{this.props.tasks.time}</td>
            <td>{this.props.tasks.asm}</td>
            <td>{this.props.tasks.task}</td>
            <td>{this.props.tasks.porter}</td>
            <td>{this.props.tasks.status}</td>
            <td>{this.props.tasks.notes}</td>
            <td>{this.props.tasks.username}</td>
            <td>{this.props.tasks.update}</td>
        </tr>
        );
    }
}

export default TaskContainer = withTracker(() => {
    return {

    };
})(Task);