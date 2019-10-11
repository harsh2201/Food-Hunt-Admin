import * as React from "react";
import * as firebase from "firebase";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Picker,
  TouchableOpacity,
  ToastAndroid
} from "react-native";
import { Base64 } from "js-base64";
var firebaseConfig = {
  apiKey: "AIzaSyAkQ4M4birpc32oGdvHU3hbr7zdfCtpVrc",
  authDomain: "foodhunt-3c6a4.firebaseapp.com",
  databaseURL: "https://foodhunt-3c6a4.firebaseio.com",
  projectId: "foodhunt-3c6a4",
  storageBucket: "foodhunt-3c6a4.appspot.com",
  messagingSenderId: "582949090874",
  appId: "1:582949090874:web:25953d52e11d8dbca3e703"
};
export default class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      userid: null,
      password: null,
      owner: []
    };
  }

  async componentDidMount() {
    console.log(Base64.encode("asd"));
    firebase.initializeApp(firebaseConfig);
    await firebase
      .database()
      .ref("Owner/")
      .on("value", snapshot => {
        let snap = JSON.stringify(snapshot);
        data = JSON.parse(snap);
        let te = [];
        for (const key in data) {
          const element = data[key];
          // console.log(element);
          te.push({
            name: element.name,
            mid: element.Credentials.mid,
            pass: element.Credentials.pass
          });
        }
        // console.log(te["GFL"]);
        this.setState({ owner: te, data: data });
      });
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
        <Text style={styles.heding}>Food Hunt</Text>
        <ScrollView>
          <Text style={styles.text}>User Id :</Text>
          <Picker
            selectedValue={this.state.userid}
            style={{ height: 50, width: 150 }}
            style={styles.Input}
            onValueChange={(itemValue, itemIndex) => {
              this.setState({ userid: itemValue });
              // console.log(itemValue);
            }}
          >
            {this.state.owner.map((u, i) => {
              return <Picker.Item label={u.name} value={u.mid} />;
            })}
          </Picker>
          <Text style={styles.text}>Password :</Text>
          <TextInput
            style={styles.Input}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={text => this.setState({ password: text })}
          ></TextInput>
          <View style={{ padding: 20, justifyContent: "center", margin: 5 }}>
            <TouchableOpacity
              style={styles.SubmitButtonStyle}
              activeOpacity={0.5}
              onPress={this.pressregister}
            >
              <Text style={styles.TextStyle}> {"Login"} </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
  pressregister = async () => {
    if (this.state.password === null) {
      ToastAndroid.show("Enter Password", ToastAndroid.SHORT);
    } else {
      // console.log(this.state.data[this.state.userid].Credentials.pass);
      if (
        this.state.data[this.state.userid].Credentials.pass ===
        Base64.encode(this.state.password)
      ) {
        this.props.navigation.navigate("Homescreen", {
          data: this.state.data[this.state.userid]
        });
      } else {
        ToastAndroid.show("Enter correct Password", ToastAndroid.SHORT);
      }
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    //  padding: 10,
    justifyContent: "center"
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
  TextStyle: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17
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
  SubmitButtonStyle: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#00BCD4",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ffffff"
  },

  heding: {
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    padding: 0,
    fontSize: 25,
    paddingTop: 28,
    paddingBottom: 8,
    marginBottom: 125
  }
});
