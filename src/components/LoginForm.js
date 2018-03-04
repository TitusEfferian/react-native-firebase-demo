import React, {Component} from 'react';
import firebase from 'firebase';
import {Text,TextInput} from 'react-native';
import {Button,CardSection,Card,Input,View, Spinner} from "./common";


class LoginForm extends Component
{

    state = {email:'',password:'',error:'',loading:false};

    onButtonPress()
    {
        const {email,password}=this.state;

        this.setState({error:'',loading:true});

        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.onLoginSuccess.bind(this))
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
        });
    }

    onLoginFail()
    {
        this.setState({
            error:'auth failed',
            loading:false
        });
    }

    onLoginSuccess()
    {
        this.setState({
            email:'',
            password:'',
            loading: false,
            error:''
        });
    }

    renderButton()
    {
        if(this.state.loading)
        {
            return <Spinner size="small"/>;
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>

        );
    }

    render()
    {
        return(
                <Card>
                    <CardSection>
                        <Input onChangeText={email=>this.setState({email: email})} value={this.state.email} placeholder={"email"}/>
                    </CardSection>

                    <CardSection>
                        <Input onChangeText={password=>this.setState({password: password})} value={this.state.password} placeholder={"password"} secureTextEntry={true}/>
                    </CardSection>
                    
                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                    
                    <Text style={styles.errorStyle}>
                        {this.state.error}
                    </Text>
                
                </Card>
        
               
                
        );
        
    }
}

const styles ={
    errorStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
};

export default LoginForm;