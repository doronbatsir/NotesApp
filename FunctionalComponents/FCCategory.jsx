import React from 'react';
import { Button } from 'react-native';
import { View, Text } from 'react-native';

export default function FCCategory(props) {
    return (
        <View>
            <Button title = {props.name + " " + props.amount}/> <br/>
            </View>
    )
}
