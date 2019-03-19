import React from 'react';
import Tasks from './Tasks.jsx';
import Task from './Task.jsx';
import Dialog from './Modal'




class App extends React.Component {
  State = {
    isOpen: false
  }
   constructor(props) {
      super(props);
      
      this.state = {
         data: 'Initial data...'
      }
      this.updateState = this.updateState.bind(this);
   };
   updateState() {
      this.setState({data: 'Data updated...'})
   }
   render() {
      return (
        <div>
        <h1>This is the tasks page</h1>
        <div className="App">
        <button onClick={(e) => this.setState({ isOpen: true })}>New Task</button>

        <Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
        This is where you add tasks
        </Dialog>
        <Tasks />

        </div>
    
        </div>
    
      );
   }
}
export default App;
