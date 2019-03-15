import React from 'react';
import Tasks from './Tasks.jsx';
import Task from './Task.jsx';



class App extends React.Component {
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
        <button onClick = {this.updateState}>NEW</button>
        <Tasks />
    
      </div>
      );
   }
}
export default App;
