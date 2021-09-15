import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const AccessModal = ({ checkin, setCheckin }) => {
  return (
    <View style={styles.topView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={checkin}
        onRequestClose={() => {
          setCheckin(!checkin);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.textIconView}>
            <FontAwesome name="check-circle" size={24} color="#FFFFFF" />
            <Text style={styles.modalText}>Access Granted!</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: "#008975",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    marginLeft: 10,
    color: "#FFFFFF",
  },
  textIconView: {
    maxWidth: 1280,
    margin: 30,
    flexDirection: "row",
  },
});

export default AccessModal;
