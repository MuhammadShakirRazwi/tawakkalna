import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

const ModalView = ({ scanned, setScanned, setCheckin }) => {
  const [companions, setCompanions] = useState(0);
  const handleCheckin = () => {
    setScanned(!scanned);
    setCheckin(true);
    setTimeout(() => {
      setCheckin(false);
    }, 4000);
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={scanned}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setScanned(!scanned);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.iconContainer}>
              <FontAwesome name="check-circle" size={48} color="#008975" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.aLittleBold}>
                The current number inside is
              </Text>
              <Text style={styles.number}>96 out of 500</Text>
              <View style={styles.companionWrapper}>
                <Text style={styles.aLittleBold}>Number of Companions: </Text>
                <Picker
                  selectedValue={companions}
                  onValueChange={(itemValue, itemIndex) =>
                    setCompanions(itemValue)
                  }
                  style={{ width: 75 }}
                >
                  <Picker.Item label="0" value="0" />
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                  <Picker.Item label="3" value="3" />
                </Picker>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setScanned(!scanned)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={handleCheckin}
              >
                <Text style={styles.textStyle}>Check In</Text>
              </Pressable>
            </View>
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
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
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
    padding: 10,
    margin: 10,
    width: 110,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#008975",
  },
  buttonClose: {
    backgroundColor: "#C2314E",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  iconContainer: {
    maxWidth: "100%",
    marginBottom: 10,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  companionWrapper: {
    maxWidth: "100%",
    flexDirection: "row",
  },
  aLittleBold: {
    fontWeight: "bold",
  },
  number: {
    fontSize: 12,
  },
  buttonContainer: {
    flexDirection: "row",
  },
});

export default ModalView;
