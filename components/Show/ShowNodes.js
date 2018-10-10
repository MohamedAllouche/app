import React , {Component} from 'react';
import {View ,TouchableHighlight , Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddNode from './AddNode';
import firebase from 'react-native-firebase';

const rootRef = firebase.database().ref();
const parentRef = rootRef.child('users');

const node = (
    <Icon name="stop" color='#000' size={6} />
);
const {width,height} = Dimensions.get('screen'); 

export default class ShowNodes extends Component{
    
    constructor(props){
        super(props);
        this.state={
            
            xx: [-14.21, 9.42, -21.11, 3.6480, 7.9563, 16.0716, 4.0713, -21.1073, -5.2415, 17.3118, -2.4734, 0.8327, 16.051, 24.2294, -1.6405, -9.3108, 23.6038, 8.3883, -15.0276, -8.4300, -4.1778, 12.3042, -16.0377, -15.0739, -2.6780],
            yy: [-7.798, 16.81, 3.5047, -6.9879, 8.8899, 5.6568, -11.2943, -4.3504, -21.3337, 8.9538, 20.8694, -15.1026, -13.61, 2.1141, -12.2806, 18.4465, 5.9317, 19.0039, 0.1937, 13.6610, -14.4063, -0.3495, -4.1770, 6.8654, 14.6456],
            print: [],
            raduis: this.props.raduis ,
            uid: this.props.uid ,
            nodeNumber: 0 ,
            childRef:parentRef.child(this.state.uid),
         }
    }


    add = (x,y) => {
        //let xxx = this.state.xx;
        //this.setState(this.state.xx , () =>  xxx.push(parseFloat (x)));
        this.setState({xx: [...this.state.xx , parseFloat(x)]})
        console.log('from Add > xx :');
        console.log(this.state.xx);

//        let yyy = this.state.yy;
//        this.setState(this.state.yy , () =>  yyy.push(parseFloat (y)));
        this.setState({yy: [...this.state.yy , parseFloat(y)]})

        console.log('from Add > yy :');
        console.log(this.state.yy);
        console.log('from Add > print :');
        console.log(this.state.print);
        this.AddPrint() ;
        this.setState({length: this.state.length + 1 })
        alert ('ok !')
        

    }
    AddPrint = () => {
        let index = this.state.xx.length ;
        this.setState({print: [...this.state.print ,   (

<View
                key={index}
                            style={{
                                position: 'absolute',
                                left: width/2 * (1 + this.state.xx[index -1]/this.state.raduis)-3,
                                top: width/2 * (1 - this.state.yy[index -1]/this.state.raduis)-3 , 
                            }}
                >
                <TouchableHighlight
                onPress={()=>{ alert('hii')} }
                >
                    {node}
                </TouchableHighlight>
            
                </View>
        )]})}
    toPrint = () => {
        if (this.state.print.length != this.state.nodeNumber ){
        for (let i=0 ; i < this.state.xx.length ; i++){
            this.setState({print: [...this.state.print ,   ((
                <View
                key={i}
                            style={{
                                position: 'absolute',
                                left: (width/2-10)*(1 + this.state.xx[i]/(this.state.raduis-10))-3,
                                top: (width/2-10)*(1 - this.state.yy[i]/(this.state.raduis-10))-3, 
                            }}
                >
                    {node}
            
                </View>)
                    
            )]});
           
        
        }
        this.setState(this.state.nodeNumber, () => this.state.print.length);

    }
        console.log('from toPrint ' + this.state.print);
        return(this.state.print )
    }

    
    render(){
        console.log('from render : ' + this.state.print)
        let a = [];
        for (let i=0 ; i < this.state.xx.length ; i++){
            a.push   ((
                <View
                key={i}
                            style={{
                                position: 'absolute',
                                left: width/2 * (1 + this.state.xx[i]/this.state.raduis)-3,
                                top: width/2 * (1 - this.state.yy[i]/this.state.raduis)-3 , 
                            }}
                >
                    {node}
            
                </View>
                )                
            )               
        }

        return (
        <View
        style={{
            position: 'absolute',
            top: 0, 
            left: 0,
        }}>

            {this.state.print}
            {a}
            <AddNode func={this.add} />
        </View>
        );

    }


}
