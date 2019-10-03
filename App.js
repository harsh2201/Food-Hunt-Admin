import React from "react";
import {
  StyleSheet,
  Text,
  CheckBox,
  Button,
  View,
  KeyboardAvoidingView,
  ScrollView,
  DatePickerAndroid,
  DatePickerIOS,
  Platform,
  TouchableOpacity,
  TimePickerAndroid,
  ToastAndroid,
  Image
} from "react-native";
import { RadioButton, TextInput } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      LunchorDinner: "Lunch",
      image: null,
      limitedorunlimited: "Limited"
    };
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
        <Text style={styles.heding}> FoodHUNT </Text>
        <ScrollView>
          <RadioButton.Group
            onValueChange={LunchorDinner => this.setState({ LunchorDinner })}
            value={this.state.LunchorDinner}
          >
            <View
              style={{
                flexDirection: "row",
                marginTop: 5,
                justifyContent: "center"
              }}
            >
              <RadioButton value="Lunch" />
              <Text style={styles.LunchorDinner}>Lunch</Text>
              <Text style={styles.lunch}></Text>
              <RadioButton value="Dinner" />
              <Text style={styles.LunchorDinner}>Dinner</Text>
            </View>
          </RadioButton.Group>

          <RadioButton.Group
            onValueChange={limitedorunlimited =>
              this.setState({ limitedorunlimited })
            }
            value={this.state.limitedorunlimited}
          >
            <View
              style={{
                flexDirection: "row",
                marginTop: 5
              }}
            >
              <RadioButton value="Limited" />
              <Text style={styles.LunchorDinner2}>Limited</Text>
              <Text style={styles.LunchorDinner1}></Text>

              <RadioButton value="Unlimited" />
              <Text style={styles.LunchorDinner2}>Unlimited</Text>
            </View>
          </RadioButton.Group>

          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <TouchableOpacity onPress={this._pickImage}>
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 15,
                  marginBottom: 15,
                  color: "#0C07F7"
                }}
              >
                Select Photo For {this.state.limitedorunlimited}{" "}
                {this.state.LunchorDinner}
              </Text>
            </TouchableOpacity>
            <ScrollView>
              {this.state.image && (
                <Image
                  source={{ uri: this.state.image }}
                  style={{ width: 350, height: 620 }}
                />
              )}
            </ScrollView>
          </View>
          <View style={{ padding: 20, justifyContent: "center", margin: 5 }}>
            <TouchableOpacity
              style={styles.SubmitButtonStyle}
              activeOpacity={0.5}
              onPress={this.pressupload}
            >
              <Text style={styles.TextStyle}> UPLOAD </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
  pressupload = () => {
    if (this.state.image == null) {
      ToastAndroid.show("Select Image", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("Image Uplaoded sucessfully", ToastAndroid.SHORT);
      this.setState({ image: null });
    }
  };
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false
      //aspect: [4, 3]
    });

    console.log(result);
    console.log(this.state.limitedorunlimited);
    console.log(this.state.LunchorDinner);
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1"
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
    borderColor: "#fff"
  },

  heding: {
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    padding: 0,
    fontSize: 25,
    paddingTop: 28,
    paddingBottom: 8
  },
  LunchorDinner: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 4
  },
  LunchorDinner1: {
    marginLeft: 15
  },
  LunchorDinner2: {
    // fontWeight: "bold",
    fontSize: 20,
    marginTop: 4
  },
  lunch: {
    marginLeft: 15
  },
  TextStyle: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17
  }
});
