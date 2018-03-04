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
    Header,Button,Spinner
} from './components/common';
import LoginForm from './components/LoginForm';



class App extends Component
{
    state = {
        loggedIn: null
    };
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

        firebase.auth().onAuthStateChanged((user)=>{
            if(user)
            {
                this.setState({loggedIn:true});
                
            }
            else
            {
                this.setState({loggedIn:false});
            }
        });
    }

    renderContent()
    {
        

            switch (this.state.loggedIn) {
                case true:
                    
                    return (<View style={{flexDirection:'row',paddingTop:20}}><Button onPress={()=>firebase.auth().signOut()}>Log out</Button></View>);
                case false:
                    return <LoginForm />;
            
                default:
                    return <View style={{paddingTop:50}}><Spinner size="large" /></View>
            }
            
        
    }
    render()
    {

        return(
            <View>
                <Header headerText="auth"/>
                {this.renderContent()}
           
               


            </View>
        );
    }
}
const styles={
    textStyle:{
        alignSelf:'center',
        color:'green'
    }
   
}



export default App;