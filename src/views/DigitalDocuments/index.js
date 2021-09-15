import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  MaterialIcons,
  SimpleLineIcons,
  AntDesign,
  FontAwesome5,
  Ionicons,
  Fontisto,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";

export default function DigitaDocuments(props) {
  const { bottomTabs, bottomTabItem, bottomTabTextSelected, bottomTabText } =
    styles;
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Digital Documents</Text>
      <View style={styles.personaldocs}>
        <Text>Personal Documents</Text>
        <View style={styles.iqamahButton}>
          <Text style={styles.iqamahIdText}>Iqamah ID</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/iqamah.jpg")}
          style={{ height: 200, width: 300 }}
        />
        <View></View>
      </View>
      <View style={bottomTabs}>
        <TouchableOpacity onPress={() => props.setCurrentScreen("dashboard")}>
          <View style={bottomTabItem}>
            <Ionicons name="home-outline" size={24} color="#A8A6A9" />
            <Text style={bottomTabText}>Home</Text>
          </View>
        </TouchableOpacity>
        <View style={bottomTabItem}>
          <SimpleLineIcons name="organization" size={24} color="#A8A6A9" />
          <Text style={bottomTabText}>Services</Text>
        </View>

        <View style={bottomTabItem}>
          <Ionicons name="wallet-outline" size={24} color="#008975" />
          <Text style={bottomTabTextSelected}>Digital Documents</Text>
        </View>

        <View style={bottomTabItem}>
          <MaterialCommunityIcons
            name="view-dashboard-outline"
            size={24}
            color="#A8A6A9"
          />
          <Text style={bottomTabText}>Dashboard</Text>
        </View>
        <View style={bottomTabItem}>
          <Feather name="user" size={24} color="#A8A6A9" />
          <Text style={bottomTabText}>My Profile</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  heading: {
    marginTop: 50,
    marginBottom: 50,
    fontSize: 25,
    fontWeight: "bold",
  },
  iqamahButton: {
    maxWidth: 100,
    borderWidth: 1,
    borderColor: "#008975",
    borderRadius: 7,
    textAlign: "center",
  },
  iqamahIdText: {
    color: "#008975",
    padding: 5,
    textAlign: "center",
  },
  imageContainer: {
    maxWidth: "100%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  bottomTabs: {
    width: "100%",
    height: 50,
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  bottomTabTextSelected: {
    fontSize: 7,
    color: "#008975",
  },
  bottomTabText: {
    fontSize: 7,
    color: "#A8A6A9",
    textAlign: "center",
  },
  bottomTabItem: {
    maxHeight: 50,
    alignItems: "center",
    marginLeft: 20,
  },
});
