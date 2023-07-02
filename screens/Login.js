import React, { useState } from "react";
import {auth} from '../firebase';
import { TextInput, Text,  View, TouchableOpacity, StyleSheet, Alert } from "react-native";

const Login = ({LogIn}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            Alert.alert('New account created!', 'Log In using your credentials to continue.', [
                {text: 'OK'},
              ]);
        }) 
        .catch(error => {
            setPassword('');
            Alert.alert('Request failed', error.message, [
                {text: 'OK'},
              ]);
        });

    }

    const handleLogIn = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            LogIn(true);
        })
        .catch(error => {
            setPassword('');
            Alert.alert('Request failed', error.message, [
                {text: 'OK'},
              ]);
        });
        
    }

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', gap: 50}}>
            <View style={{gap: 10, justifyContent: 'flex-end', alignItems: 'center'}}>
                <TextInput 
                style={styles.textBox}
                placeholder="  email"
                value={email}
                onChangeText={(text) => {setEmail(text)}} />
                <TextInput style={styles.textBox} 
                placeholder="  password"
                value={password}
                onChangeText={(text) => {setPassword(text)}}
                secureTextEntry={true}/>
            </View>
            <View style={{gap: 8, justifyContent: 'center'}}>
                <TouchableOpacity style={styles.button}
                onPressOut={ 
                    (navigation) => {handleLogIn(navigation)}
                }>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signUpButton}
                onPressOut={handleSignUp}
                >
                    <Text style={styles.signUpButtonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textBox: {
        fontSize: 16,
        backgroundColor: 'whitesmoke', 
        width: 300,
        borderRadius: 4,
        elevation: 3,
        height: 40
    },
    button: {
        backgroundColor: 'pink',
        textAlign: 'center',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        width: 100,
        borderRadius: 6,
        elevation: 3,
    },
    signUpButton: {
        backgroundColor: 'white',
        borderColor: 'pink',
        textAlign: 'center',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        width: 100,
        borderRadius: 6,
        elevation: 3,
    },
    buttonText:{
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    signUpButtonText:{
        textAlign: 'center',
        color: 'pink',
        fontSize: 16,
        fontWeight: 'bold',
    }
})

export default Login;