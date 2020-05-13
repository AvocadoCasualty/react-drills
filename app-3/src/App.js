import React, {Component} from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      filterString: '',
      list: ["keyboard", "laptop", "notebook", "mouse", "coffee mug"]
    }
  }
  handleChange(filter){
    this.setState({filterString: filter })
  }
  render() {
    let thingsOnMyDesk = this.state.list
        .filter((element, index)=> {
          return element.includes(this.state.filterString)
        })
        .map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    return (
        <div className="App">
          <input onChange={e => this.handleChange(e.target.value)} type='text' />
          {thingsOnMyDesk}
        </div>
    );
  }
}
export default App;
