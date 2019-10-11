import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { black, white } from "ansi-colors";

class Splash extends Component {
  constructor(props) {
    super(props);

    setTimeout(() => {
      props.navigation.navigate("Login");
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hello Splash</Text>
      </View>
    );
  }
}

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1"
    //  padding: 10,
  },

  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10
  },

  textfirst: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 40
  },

  firstInput: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 18,
    padding: 8,
    borderRadius: 14,
    //borderColor:'black',
    paddingLeft: 25,
    borderWidth: 4,
    borderColor: "#d6d7da"
  },

  Input: {
    //margin:20,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 18,
    padding: 8,
    borderRadius: 14,
    //borderColor:'black',
    paddingLeft: 25,
    borderWidth: 4,
    borderColor: "#d6d7da"
  },

  heding: {
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    padding: 0,
    fontSize: 25,
    paddingTop: 28,
    paddingBottom: 8
  }
});
