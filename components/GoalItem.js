import { StyleSheet, View, Text, Pressable } from "react-native"

export function GoalItem ({text, deleteGoal, id}) {

    function deleteHandler (event) {
        deleteGoal()
    }

    return (
        <Pressable
            onPress={deleteGoal.bind(this, id)}
            style={({pressed}) => pressed && styles.pressedGoal}
        >
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc"
      },
      goalText: {
        color: "white",
      },
      pressedGoal: {
          opacity: .5
      }
})