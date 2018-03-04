import React from 'react';
import {
    View,
    TextInput,
    Text
} from 'react-native';


const Input = ({label,value,onChangeText,placeholder,secureTextEntry}) =>
{
    return(
            <TextInput
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                style={
                    {
                       flex:1
                    }
                }
                value={value}
                onChangeText = {onChangeText}
                placeholder={placeholder}
            />
    );

};

export { Input };