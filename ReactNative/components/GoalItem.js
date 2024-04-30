import { StyleSheet, View, Text, Button } from "react-native"
function GoalItem(props) {
    return(  
      <View style={styles.goalItem}>
        <Text style={{color: "white"}} key={Math.random()}>
          {props.goal.item.text}
        </Text>
      </View>
      )
}
export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
        padding: 8
      }
})
