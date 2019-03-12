import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

data = [{ _id: 1, name: 'Austin', task: 'Get shit done '}, { _id: 2, name: 'Bryan', task: 'Done with shit' }, { name: "other", task: "this" }]

class Tasks extends Component {

    renderData() {
        return Data.map((task) => (
            <div>
                <td>{task.name}</td>
                <td>{task.task}</td>
            </div>
        ));

    }

    render() {
        return (
            <div>
                <div class='col-md-12'>
                    <table className="table table-bordered">
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
                        <tr>
                            <td>Bryan</td>
                            <td>Meet with Austin</td>
                        </tr>
                    </table>
                </div>
            </div>


        );



    }


}

export default Tasks = withTracker(() => {
    return {};
})(Tasks);