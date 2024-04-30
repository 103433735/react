import { StyleSheet, View, Button, TextInput } from "react-native"
import { useState } from "react"
function GoalInput(props) {
    const [enteredGoalText, setEnteredGoal] = useState("")

    function goalInputHandler(enteredText) {
        setEnteredGoal(enteredText)
        // console.log(enteredText)
      }

      function addGoalHandler() {
        props.onAddGoal(enteredGoalText)
        setEnteredGoal("")
      }
    return(
        <View style={styles.inputContainer}> 
        <TextInput 
            placeholder="Your course goal!" 
            style={styles.textInput} 
            onChangeText={goalInputHandler} 
            autoCorrect = {false} 
            value={enteredGoalText}></TextInput>
        <Button title="Add Goal" onPress={addGoalHandler}></Button>
        </View>
    )
}
export default GoalInput

const styles = StyleSheet.create({
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
      }
})