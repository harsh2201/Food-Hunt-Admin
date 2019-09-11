import * as React from 'react';

import { Text, View,TextInput, StyleSheet,Button,ScrollView,CheckBox,Alert,button,KeyboardAvoidingView,DismissKeyboardVie, Switch } from 'react-native';

import {ToastAndroid} from 'react-native';

export default class App extends React.Component {
  constructor()
  {
    super();

    this.state={
    messname:'',
    userid:'',
    password:'',
    //date:'',
    contactno:'',
    email:'',
    address:'',
    date1:''
    }
  }

  // function
  //register button click function
  componentDidMount() {
 
    this.Clock = setInterval( () => this.GetTime(), 1000 );
 
  }
 
  GetTime() {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    this.setState({
      //Setting the value of the date time
      date1:
        date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
    });
    
  }
 

  pressregister()
  {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   
   if(this.state.messname==''){
 
    ToastAndroid.show('Enter Mess Name', ToastAndroid.SHORT);
  }
  else if( this.state.userid==''){
   
    ToastAndroid.show('Enter User ID', ToastAndroid.SHORT);
  }
  else if(this.state.password==''){
    
    ToastAndroid.show('Enter Password ', ToastAndroid.SHORT);
  }
  else if(this.state.contactno==''){
   
    ToastAndroid.show('Enter Contact Number ', ToastAndroid.SHORT);
  }
  else if(this.state.contactno.length <10){
   
    ToastAndroid.show('Enter Proper Contact Number ', ToastAndroid.SHORT);
  }
  else if (reg.test(this.state.email) === false){
 
    ToastAndroid.show('Enter Valid Email ', ToastAndroid.SHORT);
}
  else if(this.state.address==''){
 
    ToastAndroid.show('Enter Address ', ToastAndroid.SHORT);
  }
  else
  {
  Alert.alert(
    'Details',
    "mess name : "+this.state.messname+"\n"+ 
    "user Id : "+this.state.userid+"\n"+
    "password : "+this.state.password+"\n"+
    "contact no : "+this.state.contactno+"\n"+
    "email : "+this.state.email+"\n"+
    "Address : "+this.state.address+"\n"+
    "date : "+this.state.date1+"\n",
  
    
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => ToastAndroid.show('Register', ToastAndroid.SHORT)},
    ],
    {cancelable: false},
  );
  //}
  }
  }

  


  render() {
    return (

 
      <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>

      <Text style={styles.heding} >Food Hunt</Text>
      <ScrollView  >
   



<Text style={styles.textfirst}>Mess Name :</Text>
      <TextInput  style={styles.firstInput} placeholder='Mess Name' label='Mess Name' focus Type='outlined' onChangeText={(text) => this.setState({messname:text})}/>
      <Text style={styles.text}>User Id :</Text>
      <TextInput  style={styles.Input} placeholder='UserId'  onChangeText={(text) => this.setState({userid:text})} ></TextInput>
      <Text style={styles.text}>Password :</Text>
      <TextInput style={styles.Input} secureTextEntry={true} placeholder='Password'  onChangeText={(text) => this.setState({password:text})}></TextInput>
          
        
         
          


         <Text style={{fontSize: 20,fontWeight:'bold',}}> Contact Details : </Text>  
         <Text style={styles.text}>Conatct No. :</Text>
          <TextInput  style={styles.Input} placeholder='Contact No.' maxLength={10} keyboardType={'numeric'} onChangeText={(text) => this.setState({contactno:text})}></TextInput>
          <Text style={styles.text}>Email Address :</Text>
          <TextInput  style={styles.Input} placeholder='Email'  onChangeText={(text) => this.setState({email:text})} ></TextInput>
          <Text style={styles.text}>Address :</Text>
          <TextInput  style={styles.Input} placeholder='Address'  onChangeText={(text) => this.setState({address:text})} ></TextInput>



        

              <View style={{padding:20,justifyContent:'center',margin:5}}>
              <Button title='Register' color="#841584" 
              onPress={() => this.pressregister()}></Button>
              </View>
             

</ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  //  padding: 10,
  },

text:{
  fontSize: 18,fontWeight:'bold',marginLeft:20,marginTop:10,
},

textfirst:{
  fontSize: 18,fontWeight:'bold',marginLeft:20,marginTop:40,
},

  firstInput :{
marginLeft:20,
marginRight:20,
fontSize:18,
padding:8,
borderRadius:14,
//borderColor:'black',
paddingLeft:25,
borderWidth: 4,
borderColor: '#d6d7da',
},

Input:{
//margin:20,   
   marginLeft:20,
   marginRight:20,
    fontSize:18,
    padding:8,
    borderRadius:14,
    //borderColor:'black',
    paddingLeft:25,
     borderWidth: 4,
      borderColor: '#d6d7da',
  },
  
  heding:{
    backgroundColor:'black',
    color:'white',
    textAlign: 'center',
    padding : 0,
   fontSize:25,
   paddingTop: 28,
   paddingBottom:8,
  },



});