import React, {Component} from 'react';
import {Text,TextInput} from 'react-native';
import {Button,CardSection,Card,Input} from "./common";


class LoginForm extends Component
{

    state = {email:'',password:''};

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
                        <Button>
                            Login
                        </Button>
                    </CardSection>
                
                </Card>
                
        );
        
    }
}

export default LoginForm;