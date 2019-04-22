import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer, inject } from 'mobx-react';
import { AppProps, AppState } from './interfaces/App';

@inject('store')
@observer
class App extends Component<AppProps, AppState> {
  public render() {
    const { store } = this.props;

    return (
      <div className='App'>
        {store.user.firstName}'s Spotify. <br />
        My playlists: <br />
        {store.userPlaylists.map((el: string) => {
          return <li>{el}</li>;
        })}
      </div>
    );
  }
}

export default App;
