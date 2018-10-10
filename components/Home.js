import React , {Component} from 'react';
import {Text} from 'react-native';
export default class Home extends Component{
    constructor() {
        super();
        this.state = {
          isAuthenticated: false,
          uid: NaN ,
        };
    }
    render(){
        <Text>Hello Home </Text>
    }
}
