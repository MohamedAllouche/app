import React from 'react';
import EmailLogin from './EmailLogin';
import GuestLogin from './GuestLogin';
import Show from './../Show/Show';
import MainForm from './../MainForm';
import { createStackNavigator } from 'react-navigation'

const Navigation = createStackNavigator({
  Login: {screen: EmailLogin},
  Show: {screen: Show},
  GuestLogin: {screen: GuestLogin},
  MainForm: {screen: MainForm},
},{navigationOptions:{}});


export default class Login extends React.Component {

  static navigationOptions = {
    title: 'login',
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
    return(
      <Navigation />
      
    );
    
  }

}