import React, {Component} from 'react';
import {Text,Button, TextInput, View} from 'react-native';

export default class AddNode extends Component {
  constructor (props){
    super(props);

    this.state = {
      x: 0,
      y: 0,
    
    };

  }


  render() {
    return (
      <View
      style ={{
        padding:60,
        flex: 1 ,
        position: 'absolute',
        top: 330, 
        left: 0 ,
        justifyContent:'center',
      }}>
      <View
      style ={{
        flex: 1 ,
        flexDirection: 'row' ,
        justifyContent:'center',
    }}
    >
      <Text
        style={{
        height: 40,
        width: 80 ,
        marginTop:10
        }}>
        Add a Node </Text>
      <TextInput
        underlineColorAndroid='green'
        style={{
            height: 40,
            width: 80 ,
        }}
        onChangeText={(x) => this.setState({x})}
        placeholder="X :"
    />
      <TextInput
        underlineColorAndroid='green'
        style={{
            height: 40,
            width: 80 ,
        }}
        onChangeText={(y) => this.setState({y})}
        placeholder="Y :"
    />
    </View>
    <Button
                    onPress={()=> this.props.func(this.state.x,this.state.y) }
                        title='Add Node'
                />
                </View>
    
    );
  }
}