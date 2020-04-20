import React from 'react';
import './App.css';
import PlayerCard from './components/PlayerCard'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }

  Api = url => {
    fetch(url)
    .then(res => res.json() )
    .then(data => this.setState( { players: data } ))
    .catch(err => console.log(err))
  }

  componentDidMount = () => {
    this.Api('http://localhost:5000/api/players');
  }

  render() {
    return(
      <div>
        {this.state.players.map(player => {
          return <PlayerCard player={player} key={player.id} />
        })}
      </div>
    )
  }
}

export default App;
