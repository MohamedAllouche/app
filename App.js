import React from 'react';
import firebase from 'react-native-firebase';
import Login from './components/Login/Login';
import Home from './components/Home' ;

export default class App extends React.Component {

  static navigationOptions = {
    title: 'app',
    header : null ,
}
constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      uid: NaN ,
    };
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            this.state = {
                isAuthenticated: true,
                uid: firebase.auth().currentUser ,
              };
        } else {
            this.state = {
                isAuthenticated: false,
                uid: NaN ,
              };
        }
      });
  }
  render() {
    if (!this.state.isAuthenticated) {
      return (
        <Login  />
      );
    }

    return (
      <Home uid={this.state.uid} />
    );
  }

}