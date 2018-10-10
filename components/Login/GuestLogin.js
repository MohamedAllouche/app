import React from 'react';
import { View, Text,Button ,TextInput } from 'react-native';
import firebase from 'react-native-firebase';

export default class GuestLogin extends React.Component {
    static navigationOptions = {
        title: 'Guest',
        header : null ,
    }
    
    constructor(props) {
        super(props);        
        this.state = {
          isAuthenticated: false,
          uid: NaN,
          email:NaN,
          password:NaN,
        }; 
      }     
      onSign = () => {
        const {navigate} = this.props.navigation;
        firebase.auth().signInAnonymously()
        this.state = {
            isAuthenticated: true,
            uid: firebase.auth().currentUser ,
        };
            
        navigate('MainForm',{uid: this.state.uid , email:this.state.email , 
            password: this.state.password , isAuthenticated: this.state.isAuthenticated});
    }

      render(){
        return (
          <Button         
          style={{
            padding: 20 ,
        }}
            onPress={this.onSign}
            title='Use a Guest Session' /> )
      }
}