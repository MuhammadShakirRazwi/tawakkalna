import React, { useState } from "react";
import { Feather, EvilIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";

export default function Login({ setisLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    username === "2139406934" &&
      password === "waleedabbasi" &&
      setisLogin(true);
  };
  const { mainContainer } = styles;
  return (
    <View style={mainContainer}>
      <View style={styles.header}></View>
      <View style={styles.textView}>
        <Text>
          <Feather name="user" size={24} color="#008975" />
          National ID/ Iqama ID/Visitor Mobile Number
        </Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <Text>
          <EvilIcons name="lock" size={24} color="#008975" />
          Password
        </Text>
        <TextInput
          style={styles.input}
          textContentType="password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.helpContainer}>
          <Text style={styles.helpText}>Help</Text>
          <Text style={styles.helpText}>Contact Us</Text>
        </View>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  textView: {
    flex: 1,
  },
  input: {
    height: 40,
    maxWidth: "70%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  helpContainer: {
    maxWidth: "100%",
    justifyContent: "space-between",
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: "row",
  },
});
