import React from 'react';
import Login from './components/Login';
import Show from './components/Show/Show';
import MainForm from './components/MainForm';

import { createStackNavigator } from 'react-navigation'

const Navigation = createStackNavigator({
  Login: {screen: Login},
  Show: {screen: Show},
  MainForm: {screen: MainForm},
},{navigationOptions:{}});

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
    
  }

  render() {
    console.log("App : "+ this.props.navigation)
      return (
        <Navigation />
      );
  }

}