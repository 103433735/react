import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { useState } from 'react';

export default function App() {
  //New state
  const [listOfGoals, setListOfGoals] = useState([])
    return (
        <View style={styles.appContainer}>
          <GoalInput onAddGoal = {inputOnClick}></GoalInput>

          <View style = {styles.goalContainer}>
          <FlatList data={listOfGoals} renderItem={item => {
            item.index
            return (
              <GoalItem goal = {item}></GoalItem>
            )
          }}>

          </FlatList>
          </View>


        </View>
    );

    function inputOnClick(enteredGoalText) {
      setListOfGoals(currentGoals => [
        ...currentGoals,
        { 
          text: enteredGoalText,
          keyID: Math.random().toString()
        } 
        ])

        console.log()
    }


    function removeItem(id) {
      let listClone = listOfGoals
      listClone.filter(item => item.keyID !== id)
      setListOfGoals(listClone)
    }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalContainer: {
    flex: 8
  },
});
