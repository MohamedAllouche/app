import React from 'react';
import { View, Text,Button ,TextInput } from 'react-native';
import firebase from 'react-native-firebase';

export default class EmailLogin extends React.Component {
    static navigationOptions = {
        title: 'Login',
        header : null ,
}
    constructor(props) {
        super(props);        
        this.state = {
          isAuthenticated: false,
          uid: NaN ,
          email:NaN,
          password:NaN,
        };
      }
      
    onSignIn = () => {
        const {navigate} = this.props.navigation;
          if (this.state.email && this.state.password){
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(    firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    this.state = {
                        isAuthenticated: true,
                        uid: user.uid ,

                      };
                      console.log("Signed In with uid :"+user.uid   );
                      navigate('Show',{uid: this.state.uid , email:this.state.email , 
                        password: this.state.password , isAuthenticated: this.state.isAuthenticated});

                }           

            }
        ))
            .catch((error) => {
                alert(`${error}`)
            }
        );
    }
            
    }
    onSignUp = () => {
        if (this.state.email && this.state.password){
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            this.onSignIn();
        }).catch((error) => {
            console.log(`Register fail with error: ${error}`);
            alert(`${error}`)
        });

    }
    }
    onGuest = () => {
        const {navigate} = this.props.navigation;
        firebase.auth().signInAnonymously()
        this.state = {
            isAuthenticated: true,
            uid: firebase.auth().currentUser ,
        };
        console.log("signed In as a Guest");
        navigate('MainForm',{uid: this.state.uid , email:this.state.email , 
            password: this.state.password , isAuthenticated: this.state.isAuthenticated});
    }

    render() {
        console.log("login.js props:")
          return(
            <View style={{
                  flex: 1,
                  flexDirection: 'column' ,
                  justifyContent: 'center',
                  alignContent: 'center',
                  padding:70
            }} >
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    margin: 40
                }}>Welcome</Text>
                <TextInput style={{
                    height: 40,
                    width: 200,
                    margin: 10,
                    borderColor: 'gray',
                    borderWidth: 1,
                    color: 'black'
                }}
                    keyboardType='email-address'
                    placeholder='Enter your email'
                    autoCapitalize='none'
                    onChangeText={
                        (text) => {
                            this.setState({ email: text });
                        }
                    }
                />
                <TextInput
                    style={{
                        height: 40,
                        width: 200,
                        margin: 10,
                        borderColor: 'gray',
                        borderWidth: 1,
                        color: 'black'
                    }}
                    keyboardType='default'
                    placeholder='Enter your password'
                    secureTextEntry={true}
                    onChangeText={
                        (text) => {
                            this.setState({ password: text });
                        }
                    }
                />
                <Button
                style={{
                        height: 40,
                        width: 200,
                        margin: 10,
                        paddingVertical: 20,
                }}
                        onPress={this.onSignIn}
                    title='SignIn' />
                <Button         
                   style={{
                    height: 40,
                    width: 200,
                    margin: 10,
            }}
                    onPress={this.onGuest}
                    title='Use a Guest Session' />
              </View>
          );
        
      }
    
}