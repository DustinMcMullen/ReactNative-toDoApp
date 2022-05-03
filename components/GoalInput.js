import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export function GoalInput({addGoal, modalVisible, toggleModal}) {

    const [goalText, setGoalText] = useState("");

    function goalInputHandler (enteredText) {
        setGoalText(enteredText);
      }

    function addGoalHandler () {
        addGoal(goalText);
        setGoalText("");
    }

    return (
        <Modal
        Visible={modalVisible}
        animationType="slide"
        >
            <View style={styles.addGoalContainer}>
            <Image style={styles.goalImage} source={require("../assets/images/goalImage.png")} />
                <TextInput
                style={styles.inputStyle}
                placeholder='add a goal here'
                onChangeText={goalInputHandler}
                value={goalText}
                />
                <View style={styles.buttonCont}>
                    <View style={styles.buttons}>
                        <Button
                            title="cancel"
                            color="#f31282"
                            onPress={toggleModal}
                        />
                    </View>
                    <View style={styles.buttons}>
                        <Button
                            title='add goal'
                            color="#b180f0"
                            onPress={addGoalHandler}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    addGoalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        padding: 16,
        paddingBottom: 200,
        backgroundColor: "#311b6b"
    },
    inputStyle: {
        height: 50,
        width: "100%",
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        color: "#120438",
        borderWidth: 2,
        borderRadius: 6,
        padding: 16
    },
    buttonCont: {
        marginTop: 16,
        flexDirection: "row",
        padding: 12
    },
    buttons: {
        width: "30%",
        marginHorizontal: 20
    },
    goalImage: {
        width: 100,
        height: 100,
        margin: 20
    }
})