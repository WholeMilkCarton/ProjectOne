import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  function goalInputHandler(enteredText) {
    console.log(enteredText)
  };

  function addgoalHandler() {};

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' onChange={goalInputHandler} />
          <Button title="Add Goal" />
            </View>
        <View style={styles.goalsContainer}>
        <Text>List of Goals...</Text>
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
  },
});
