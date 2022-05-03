import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  function addGoalHandler (goalText) {
    setGoals( (currentGoals) => [
      ...currentGoals,
      {text: goalText, id: Math.random().toString()}
    ]);
    toggleModal();
  }

  function deleteGoalHandler (keyOfGoalToDelete) {
    setGoals( currentGoals => {
      return currentGoals.filter( goal => goal.id !== keyOfGoalToDelete )
    })
  }

  function toggleModal () {
    setModalVisible(currentModalVisible => !currentModalVisible);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title="Add New Goal" color="#b180f0" onPress={toggleModal} />
        {modalVisible &&
          <GoalInput
            addGoal={addGoalHandler}
            modalVisible={modalVisible}
            toggleModal={toggleModal}
          />
        }
        {/* <GoalInput
          addGoal={addGoalHandler}
          modalVisible={modalVisible}
        /> */}
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={ (itemData) => {return (
              <GoalItem
                text={itemData.item.text}
                deleteGoal={deleteGoalHandler}
                id={itemData.item.id}
              />
            )} }
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
    flexDirection: "column"
  },
});
