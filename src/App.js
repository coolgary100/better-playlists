import React, { Component } from "react";
import "./App.css";

let defaultStyle = {
  color: "blue"
};
let fakeServerData = {
  user: {
    name: "Gary",
    playlists: [
      {
        name: "My Favorites",
        songs: [
          { name: "Beat It", duration: 1345 },
          { name: "Cannelloni Makaroni", duration: 1236 },
          { name: "Rosa Helikopter", duration: 70000 }
        ]
      },
      {
        name: "Discover Weekly",
        songs: [
          { name: "Beat It", duration: 1345 },
          { name: "Cannelloni Makaroni", duration: 1236 },
          { name: "Rosa Helikopter", duration: 70000 }
        ]
      },
      {
        name: "Another playlist - the best!",
        songs: [
          { name: "Beat It", duration: 1345 },
          { name: "Cannelloni Makaroni", duration: 1236 },
          { name: "Rosa Helikopter", duration: 70000 }
        ]
      },
      {
        name: "Playlist - yeah!",
        songs: [
          { name: "Beat It", duration: 1345 },
          { name: "Cannelloni Makaroni", duration: 1236 },
          { name: "Rosa Helikopter", duration: 70000 }
        ]
      }
    ]
  }
};

class PlayListCounter extends Component {
  render() {
    return (
      <div style={{ width: "40%", display: "inline-block" }}>
        <h2 style={defaultStyle}>{this.props.playlists.length} playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs);
    }, []);
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration;
    }, 0);
    return (
      <div style={{ width: "40%", display: "inline-block" }}>
        <h2 style={defaultStyle}>{Math.round(totalDuration / 60)} hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img />
        <input type="text" />
        Filter
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, display: "inline-block", width: "10%" }}>
        <img />
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = { serverData: {} };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        serverData: fakeServerData
      });
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ? (
          <div>
            <h1 style={{ ...defaultStyle, fontSize: "54px" }}>
              {this.state.serverData.user.name}'s Playlist
            </h1>
            <PlayListCounter
              playlists={
                this.state.serverData.user &&
                this.state.serverData.user.playlists
              }
            />
            <HoursCounter
              playlists={
                this.state.serverData.user &&
                this.state.serverData.user.playlists
              }
            />
            <Filter />
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
          </div>
        ) : (
          <h1 style={defaultStyle}>Loading...</h1>
        )}
      </div>
    );
  }
}

export default App;
