import React , {Component } from 'react';
import {View, Image} from 'react-native';

const backUrl = 'https://www.publicdomainpictures.net/pictures/50000/velka/agriculture-13730152618Ej.jpg';

export default class Backround extends Component {

    render(){
        const resizeMode = 'cover';
        return(

      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}>
          <Image
            style={{
              flex: 1,
              resizeMode,
            }}
            source={{ uri: backUrl}} 
          />
        </View>

        )
    }
}