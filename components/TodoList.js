import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import Video from 'react-native-video';
//components
import Todo from './Todo';

const TodoList = () => {
    const [title, setTitle] = useState('TodoList');
    //for changing text on input
    const [text, setText] = useState();
    //for rendering the items on TodoList
    const [list, setList] = useState([]);

    //for adding items to the list
    const addItem = () => {
        const updatedList = list;
        updatedList.push(text);
        setList(updatedList);
        setText("");
    };

    return (
        <View style={styles.container}>
            {/* example of 2 stylesheets in the same element */}
            <Text style={[styles.mainSize, styles.mainHeader]} >{title}</Text>
            <View>
                <TextInput
                    style={styles.inputArea}
                    value={text}
                    onChangeText={(text) => setText(text)}
                    //ios
                    clearButtonMode={'while-editing'}
                />
            </View>
            <ScrollView>
            {/* there was an error with list mapping as i did not make the default state of list an array */}
                {list.map((x, index) => (
                    <Todo key={index} item={x} index={index} />
                ))}
            </ScrollView>
            <View style={styles.button}>
                <Button 
                    title="Add item" 
                    onPress={addItem} 
                    color={'#998100'}
                    
                />
            </View>
            {/* <View style={{ marginTop: 15 }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { addItem }}
                >
                    <Text>Touch me</Text>
                </TouchableOpacity>
            </View> */}
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
    button: {
        padding: 50,
        alignItems: 'center',
        width: '100%',
        alignSelf: 'center',
    },
    inputArea: {
        color: 'white',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'black',
        marginTop: 15,
        marginBottom: 20,
        borderRadius: 25,
        width: 300,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: '#6dd47e'
    },
})

export default TodoList
