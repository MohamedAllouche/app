import React , {Component} from 'react';
import {View,Text} from 'react-native';
import firebase from 'react-native-firebase';

const rootRef = firebase.database().ref();
const parentRef = rootRef.child('parent');
export default class DataBase extends Component {
    constructor(props){
        super(props) ;
        this.state = {

        };

    }
    componentDidMount(){

    }
    render(){
        parentRef.push({
            childName: '1232'
        });
        return(
            <View>
                <Text>hello firebase </Text>
            </View>
        );
    }
}