import React,
{
    Component
} from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import firebase from 'firebase';
import
{
    Header
} from './components/common';
import LoginForm from './components/LoginForm';



class App extends Component
{
    componentWillMount()
    {
        firebase.initializeApp({
            apiKey: 'AIzaSyA4yb7aS-C7l0LEnk4jhIkr4mG7hi041lA',
            authDomain: 'authdemo-5d061.firebaseapp.com',
            databaseURL: 'https://authdemo-5d061.firebaseio.com',
            projectId: 'authdemo-5d061',
            storageBucket: 'authdemo-5d061.appspot.com',
            messagingSenderId: '281287411198'
        });
    }
    render()
    {

        return(
            <View>
                <Header headerText="auth"/>
                <LoginForm/>


            </View>
        );
    }
}

export default App;