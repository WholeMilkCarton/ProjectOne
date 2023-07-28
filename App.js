import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  //for .filter below, goal represents all the items in that array. the .filter function says that if the argument is true, meaning if the id's do not match, it will be dropped. but if it is true, meaning they do not match, then that value will be included in the list. 
  //the idea for the deleteGoalHandler is to first take the 2nd value from usestate from usestate(setCourseGoals), and reference that to
  //delete a goal 
  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

//addGoalHandler in passed as a value to onAddGoal on the GoalInput and onAddGoal in forwarded to onPress in GoalInput.js and onPress in GoalInput.js calls the onAddGoal function to provice the enteredGoalText in the funciton addGoalHandler in App.js
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button 
          title='Add New Goal' 
          color='#5e0acc' 
          onPress={startAddGoalHandler}
        />
        <GoalInput 
          visible={modalIsVisible} 
          onAddGoal={addGoalHandler} 
          onCancel={endAddGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList 
            data={courseGoals}
            renderItem={(itemData) => {
                return (
                  <GoalItem 
                    text={itemData.item.text}
                    id={itemData.item.id}
                    onDeleteItem={deleteGoalHandler}
                  />
                );
              }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  }
});
