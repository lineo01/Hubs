import { View, Text ,TextInput,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { app } from '../firebase';
import { useRouter } from 'expo-router';
const Login_Page = () => {
  const router = useRouter();
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [user,setuser]=useState(null)
    const auth=getAuth(app);
    const handelsignup=async ()=>{
        try{
            console.log("Creating User");
        const userprofile=await createUserWithEmailAndPassword(auth,email,password)
        setuser(userprofile.user)
        console.log(userprofile.user);
    console.log("user created successfully");
        }
        catch(error){
            console.log(error);
        }
    }
    const handellogin=async ()=>{
      try{
        signInWithEmailAndPassword(auth,email,password)
        
        if (user){
          router.replace("home")
        }
        else{
          console.log("No user logged in ")
        }
      }
      catch(error){
        console.log("Login Failed "+error);
      }
    }
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center",flexDirection:"column",backgroundColor:"#44cb00"}}>
      <Text style={{alignSelf:'center'}}>Login_Page Here </Text>
      <TextInput onChangeText={setemail} placeholder='Enter Email'></TextInput>
      <TextInput onChangeText={setpassword} placeholder='Enter Password'></TextInput>
      <TouchableOpacity onPress={()=>{console.log( email+password);
      handelsignup()


      }}> <Text>Sign up </Text></TouchableOpacity>
       <TouchableOpacity onPress={()=>{console.log( email+password);
      handellogin()
      


      }}> <Text>Login</Text></TouchableOpacity>
    </View>
  )
}


export default Login_Page

const styles = StyleSheet.create({
  Textinputs:{
    borderRadius:10,
    borderWidth:1,
    padding:10,
    margin:10,
    width:250
  }
})