import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            list: ["keyboard", "laptop", "notebook", "mouse", "coffee mug"]
        }
    }


    render() {
        let thingsOnMyDesk = this.state.list.map((element, index) => {
            return <h2 key={index}>{element}</h2>
        })
        return <div className="App">{thingsOnMyDesk}</div>
    }
}


export default App;
