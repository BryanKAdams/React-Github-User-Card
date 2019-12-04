import React from 'react';
import './App.css';
import axios from 'axios'
import UserCard from './components/UserCard'

class App extends React.Component {

  state = {
    userData: [],
    followerData: [],
    ghUser: 'BryanKAdams',
  };

  componentDidMount() {
    axios.get('https://api.github.com/users/BryanKAdams')
      .then(response => {
        console.log(response)
        this.setState({ userData: response.data });
      })
    axios.get('https://api.github.com/users/BryanKAdams/followers')
      .then(response => {
        console.log(response)
        this.setState({ followerData: response.data });
      })
  }
  render() {
    return (
      <div className="container">

        <div className="card">
          <img alt={this.state.userData.avatar_url} src={this.state.userData.avatar_url} />
          <div className="card-info">
            <p className="name">{this.state.userData.name}</p>

            <p className="username">{this.state.userData.login}</p>
            <p>Location: {this.state.userData.location}</p>
            <p>Profile: {this.state.userData.html_url}</p>
            <p>Following: {this.state.userData.following}</p>
            <p>Follower: {this.state.userData.followers}</p>

          </div>
        </div>
        <UserCard followerData={this.state.followerData} />
      </div>

    );
  }
}

export default App;
