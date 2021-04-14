import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Todo = (props) => {
    return (
        <View>
            <Text style={styles.item}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item : {
        flexDirection : 'row',
        padding: 10,
        backgroundColor : '#1e6f5c',
        marginTop: 10,
        borderRadius: 10,
        paddingLeft: 18,
        color: 'white',
        borderColor: '#289672',
        borderWidth: 3
    }
})

export default Todo
