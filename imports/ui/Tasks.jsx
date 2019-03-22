import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { TasksCollection } from '/imports/api/tasks.js';
import Task from './Task.jsx';
import UpdateDialog from './UpdateModal';


data = [{ _id: 1, name: 'Austin', task: 'Get shit done '}, { _id: 2, name: 'Bryan', task: 'Done with shit' }, { name: "other", task: "this" }]

class Tasks extends Component {
    State = {
        isOpen: false
      }
       constructor(props) {
          super(props);
          
          this.state = {
             data: ''
          }
        };
    renderTasks() {
        return this.props.tasks.map((task) => (
            <Task key={task._id} task={task} callbackFromParent={this.myCallback}/>
        ));
    }

    myCallback = (dataFromChild) => {
        console.log('this is a test, id: ' +dataFromChild._id);
        console.log('data from child 2 ' +dataFromChild.asm);
        this.state.data=dataFromChild;
        this.setState({isOpen: true});
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
                <UpdateDialog isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
                <h1>{this.state.data._id}</h1>
                {this.state.data.asm}</UpdateDialog>
            </div>
        );
    }
}
export default withTracker(() => {
    return {
        tasks: TasksCollection.find({}).fetch(),
    };
})(Tasks);