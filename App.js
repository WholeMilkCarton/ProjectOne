import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  //CourseGoals is the array. 
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      /////enteredGoalText comes from courseGoals array where the string of the goal comes from. you can add a key to this so you dont get warning
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput} 
          placeholder="Your course goal!" 
          onChangeText={goalInputHandler} 
          />
          <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
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
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space=between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    margin: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  }
});
