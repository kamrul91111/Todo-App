import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'

//components
import Todo from './Todo';

const TodoList = () => {
    const [title, setTitle] = useState('TodoList');

    return (
        <View style={styles.container}>
            {/* example of 2 stylesheets in the same element */}
            <Text style={[styles.mainSize, styles.mainHeader]} >{title}</Text>
            {/* import single todos */}
            <Todo name={'First todo'} />
            <Todo name={'second todo'} />
            <Todo name={'third todo'} />
            <View style={{ marginTop: 15 }}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => setTitle('my list')}
                >
                    <Text>Touch me</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
    },
    mainHeader: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#29bb89'
    },
    mainSize: {
        alignSelf: 'center',
        marginBottom: 15
    },
    button : {
        backgroundColor: '#d2e69c',
        padding: 15,
        alignItems: 'center',
        width: '70%',
        alignSelf: 'center'
    }
})

export default TodoList
