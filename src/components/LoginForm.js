import React, {Component} from 'react';
import {Text,TextInput} from 'react-native';
import {Button,CardSection,Card,Input} from "./common";


class LoginForm extends Component
{

    state = {text:''};

    render()
    {
        return(
                <Card>
                    <CardSection>
                        <Input onChangeText={text=>this.setState({text: text})} value={this.state.text} placeholder={"email"}/>
                    </CardSection>

                    <CardSection>
                        <Input onChangeText={text=>this.setState({text: text})} value={this.state.text} placeholder={"password"}/>
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