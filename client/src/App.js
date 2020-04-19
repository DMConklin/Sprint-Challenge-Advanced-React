import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }

  Api = url => {
    fetch(url)
    .then(res => this.setState( { players: res.json() } ) )
    .catch(err => console.log(err))
  }

  componentDidMount = () => {
    this.Api('http://localhost:5000/api/players');
  }

  render() {
    return(
      <div>

      </div>
    )
  }
}

export default App;
