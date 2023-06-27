import React, { useState } from "react";
import {auth} from '../firebase';
import { TextInput, Text,  View, TouchableOpacity, StyleSheet } from "react-native";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Success');
        })
        .catch(error => console.log(error.message))
    }

    const handleLogIn = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Success');
        })
        .catch(error => console.log(error.message))
    }

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', gap: 50}}>
            <View style={{gap: 10, justifyContent: 'flex-end', alignItems: 'center'}}>
                <TextInput 
                style={styles.textBox}
                placeholder="email"
                value={email}
                onChangeText={(text) => {setEmail(text)}} />
                <TextInput style={styles.textBox} 
                placeholder="password"
                value={password}
                onChangeText={(text) => {setPassword(text)}}
                secureTextEntry={true}/>
            </View>
            <View style={{gap: 8, justifyContent: 'center'}}>
                <TouchableOpacity style={styles.button}
                onPressOut={handleLogIn}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                onPressOut={handleSignUp}
                >
                    <Text style={styles.buttonText}>SignUp</Text>
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
    buttonText:{
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
})

export default Login;