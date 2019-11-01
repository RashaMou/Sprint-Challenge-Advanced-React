//Libraries
import React from 'react';
import axios from "axios";
//Components
import PlayerList from './components/PlayerList';


class App extends React.Component {
  state = {
    players: []
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        console.log(res.data)
        this.setState({players: res.data})
      })
      .catch(err => {
        console.error('Error', err)
      })
  }

  render() {
    return (
      <div>
        <header>
          <h1>Women's World Cup 2019</h1>
        </header>
        <PlayerList players={this.state.players}/>
      </div>
    )
  }
}
export default App;

