import React , { Component} from 'react' ;
import {View, Text,Button, TextInput} from 'react-native' ;

export default class MainForm extends Component{

    static navigationOptions = {
        title: 'main form',
        header : null ,
    }
    constructor (props){
        super(props);
        const { navigation } = this.props;
        this.state = {
            raduis: 0,
            totalNodeNumber: 0 ,
            isAuthenticated: navigation.getParam('isAuthenticated',NaN),
            uid: navigation.getParam('uid',NaN) ,        
        };
    }

    generate(){
        this.props.navigation.navigate('Show',{ raduis: this.state.raduis ,totalNodeNumber: this.state.totalNodeNumber 
            ,uid: this.state.uid , isAuthenticated: this.state.isAuthenticated});
    }

    render () {
        console.log("main form : uid = "+this.state.uid)

        return(


            <View>
                <Text>Raduis :</Text>
                <TextInput
                    style={{
                        height: 40,
                        backgroundColor:'#fff',
                        marginVertical:20
                    }}
                    onChangeText={(raduis) => this.setState({raduis})}
                    placeholder="Type here to insert Raduis !"
                />
                <Text>Total Node Number :</Text>
                <TextInput
                    style={{height: 40,
                    backgroundColor:'#fff',
                    marginTop:20,
                    marginBottom:80
                    }}
                    onChangeText={(totalNodeNumber) => this.setState(({totalNodeNumber}))}
                    placeholder="Type here to insert node number !"
                />
                <Button
                    onPress={()=> this.generate()}
                        title='Generate'
                />
            </View>
        )
    }

}