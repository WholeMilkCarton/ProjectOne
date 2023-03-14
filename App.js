import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './componenets/GoalInput';

export default function App() {
  //CourseGoals is the array.
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      //enteredGoalText comes from courseGoals array where the string of the goal comes from. you can add a key to this so you dont get warning.
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }
//addGoalHandler in passed as a value to onAddGoal on the GoalInput and onAddGoal in forwarded to onPress in GoalInput.js and onPress in GoalInput.js calls the onAddGoal function to provice the enteredGoalText in the funciton addGoalHandler in App.js
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals}
          renderItem={(itemData) => {
            itemData.index
              return <GoalItem text={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
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
