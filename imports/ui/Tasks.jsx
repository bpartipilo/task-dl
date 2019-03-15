import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { TasksCollection } from '/imports/api/tasks.js';
import Task from './Task.jsx';


data = [{ _id: 1, name: 'Austin', task: 'Get shit done '}, { _id: 2, name: 'Bryan', task: 'Done with shit' }, { name: "other", task: "this" }]

class Tasks extends Component {

    renderTasks() {
        return this.props.tasks.map((task) => (
            <Task key={task._id} task={task} />
        ));
    }

    render() {
        return (
            <div>
                    <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>ASM</th>
                            <th>Task</th>
                            <th>Porter</th>
                            <th>Status</th>
                            <th>Notes</th>
                            <th>Username</th>
                            <th>Update</th>
                        </tr>
                        </thead>
                    <tbody>
                        {this.renderTasks()}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default withTracker(() => {
    return {
        tasks: TasksCollection.find({}).fetch(),
    };
})(Tasks);