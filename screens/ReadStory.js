import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,  TextInput,} from 'react-native';



export default class ReadStory extends React.Component {
  render() {
    return (
      <View
      style={styles.container}
      >
      
        <View style={styles.inputView}>
          <TextInput style={styles.inputBox} placeholder="Type here..." />
        </View>
        <TouchableOpacity style={styles.submitButton}>

        <Text style={styles.submitButtonText}>Search</Text>

        </TouchableOpacity>

        </View>
        
       
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  displayText: {
    fontSize: 15,
    textDecorationLine: "underline",
  },
  scanButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    margin: 10,
  },
  buttonText: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
  },
  inputView: {
    flexDirection: "row",
    margin: 500,
    marginTop: 20,
    marginRight: 500,
    textAlign: "center",



  },
  inputBox: {
    width: 200,
    height: 40,
    borderWidth: 1.5,
    borderRightWidth: 1.5,
    fontSize: 20,
    textAlign: "center",

  },
  scanButton: {
    backgroundColor: "#66BB6A",
    width: 50,
    borderWidth: 1.5,
    borderLeftWidth: 0,
  },
  submitButton: {
    backgroundColor: "#FBC82D",
    width: 100,
    height: 50,
    marginTop:-450
  },
  submitButtonText: {
    padding: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  input: {
    width: 400,
    height: 200,
    borderWidth: 1.5,
    borderRightWidth: 1.5,
    fontSize: 30,
    textAlign: "center",
  },
});
