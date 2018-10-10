import React , {Component} from 'react';
import {Dimensions ,View, ART} from 'react-native';
import Circle from './Circle' ;
import Icon from 'react-native-vector-icons/FontAwesome';
const baseStation = (
    <Icon name="home" color='#0ff' size={16} />
);

export default class ShowCircle extends Component {
    constructor(props){
        super(props);
    }

    render(){

        var {width,height} = Dimensions.get('screen');
        radius1=width/2 -10 ;
        radius2 = radius1/2 ; 
        padding = 10 ; 
        surfaceDim= 2*radius1 + padding;
        return (
            <View >
                <ART.Surface width={width} height={height}>
                    <ART.Group  x={padding} y={padding}>
                        <Circle radius={radius1} fill={'#00f'} />
                    </ART.Group>
                    <ART.Group  x={radius2 +padding } y={radius2 +padding}>
                       <Circle radius={radius2} fill={'#f00'} />
                    </ART.Group>
                </ART.Surface>
                <View
                            style={{
                                position: 'absolute',
                                top: width/2-8,  // the 8 is size of the Icon/2 
                                left: width/2-8 ,}}// the 8 is size of the Icon/2 
                >
                {baseStation}
                </View>              
            </View>
        );
    }
}