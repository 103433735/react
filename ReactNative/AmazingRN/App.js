import React from 'react';
import {StyleSheet, Button, TextInput, View, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';

import { useState } from 'react';
export default function App() {
  //New state
  const [enteredGoalText, setEnteredGoal] = useState("")
  const [listOfGoals, setListOfGoals] = useState([])
    return (
        <View style={styles.appContainer}>
          <View style={styles.inputContainer}> 
            <TextInput placeholder="Your course goal!" style={styles.textInput} onChangeText={inputOnChange} autoCorrect = {false}></TextInput>
            <Button title="Add Goal" onPress={inputOnClick}></Button>
          </View>

          <View style = {styles.goalContainer}>
          <FlatList data={listOfGoals} renderItem={item => {
            item.index
            return (
              <GoalItem></GoalItem>
            )
          }}>

          </FlatList>
          </View>


        </View>
    );

    function inputOnClick() {
      setListOfGoals(currentGoals => [
        ...listOfGoals,
        {text: enteredGoalText,
        keyID: Math.random().toString} 
        ])
    }

    function inputOnChange(enteredText) {
      setEnteredGoal(enteredText)
      // console.log(enteredText)
    }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:  "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8
  },
  goalContainer: {
    flex: 8
  },

});
