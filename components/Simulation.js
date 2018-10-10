import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import MainForm from './MainForm';
import Show from './Show/Show';



const Tabs = createStackNavigator({
  
  MainForm:{ screen: MainForm},

  Show: {screen: Show},

})

export default class Simulation extends Component{
  render() {

    return (
           <Tabs />
    );
  }
}