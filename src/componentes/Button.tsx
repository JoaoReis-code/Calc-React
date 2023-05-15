import React from "react";
import  { StyleSheet, Text, Touchable, TouchableOpacity } from "react-native";

interface ButtonProps{
    title: string;
    onPress:() => void;
}

export function Button({ title, onPress,}: ButtonProps){

    return(
        <TouchableOpacity onPress={onPress} style={style.container}>
            <Text style={style.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        padding:0,
        margin:5,
        width:'22%',
        height:120,
        backgroundColor: '#00ff00',
        alignContent:'center',
        justifyContent:'center',
        borderRadius:10,
    },
    title:{
        color:'#000000',
        fontSize:24,
        textAlign:'center',
        fontWeight:'bold'
    }
})