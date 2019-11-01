//Libraries
import React from 'react';
import axios from "axios";
//Components
import PlayerList from './components/PlayerList';
import Header from './components/Header'

export const url = 'http://localhost:5000/api/players'

class App extends React.Component {
  state = {
    players: [],
  }

  componentDidMount() {
    axios
      .get(url)
      .then(res => {
        this.setState({
          players: res.data,
        })
      })
      .catch(err => {
        console.error('Error', err)
      })
  }

  render() {
    return (
      <div className='container'>
        <Header />
        {this.state.players.length === 0 ? <h2>Loading...</h2> :
         <PlayerList players={this.state.players} />
      }
       
      </div>
    )
  }
}
export default App;

