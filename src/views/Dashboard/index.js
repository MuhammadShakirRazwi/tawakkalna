import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  MaterialIcons,
  SimpleLineIcons,
  AntDesign,
  FontAwesome5,
  FontAwesome,
  Ionicons,
  Fontisto,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import moment from "moment";
import Barcode from "../../components/Barcode";
import DigitaDocuments from "../DigitalDocuments";
import ModalView from "../../components/Modal";
import AccessModal from "../../components/AccessModal";

export const microscopeIcon = (
  <FontAwesome5 name="microscope" size={24} color="#008975" />
);
export const cardIcon = <AntDesign name="idcard" size={24} color="#008975" />;
export const vaccineIcon = (
  <Fontisto name="injection-syringe" size={24} color="#008975" />
);
export const qrIcon = (
  <Ionicons name="qr-code-outline" size={24} color="#008975" />
);
export const mobileIcon = (
  <AntDesign name="mobile1" size={24} color="#008975" />
);

export default function Dashboard() {
  const [time, setTime] = useState("");
  const [currentScreen, setCurrentScreen] = useState("dashboard");
  const [scanned, setScanned] = useState(false);
  const [checkin, setCheckin] = useState(false);
  useEffect(() => {
    const newtime = new Date();
    const localTime = newtime.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    setTime(localTime);
  }, []);
  const flatItem = [
    {
      key: "Health \n Condition \n Card",
      icon: cardIcon,
    },
    {
      key: " Certify  Mobile \n Number",
      icon: mobileIcon,
    },
    {
      key: "COVID-19 Test",
      icon: microscopeIcon,
    },
    {
      key: "Gathering Place \n Code",
      icon: qrIcon,
    },
    {
      key: "COVID-19 \n Vaccine",
      icon: vaccineIcon,
    },
  ];
  const {
    mainContainer,
    bellContainer,
    imageContainer,
    userImage,
    logoContainer,
    logoImage,
    textStyle,
    counterLogo,
    grad,
    qrContainer,
    qrGrad,
    qrImage,
    qrText1,
    qrText2,
    serviceContainer,
    textSpacer,
    displayAllText,
    Bell,
    menuContainer,
    scrollView,
    menuItem,
    menuText,
    warningContainer,
    warningLabel,
    warningText,
    warningContent,
    bottomTabs,
    bottomTabItem,
    bottomTabTextSelected,
    bottomTabText,
  } = styles;
  return currentScreen === "dashboard" ? (
    <View style={mainContainer}>
      <ScrollView>
        <View style={bellContainer}>
          <SimpleLineIcons name="bell" size={24} color="#008975" style={Bell} />
        </View>
        <View style={imageContainer}>
          <View style={userImage}>
            <Image
              source={require("../../../assets/avatar.jpg")}
              style={userImage}
            />
          </View>
          <Text style={textStyle}>Waleed Hafizullah Mohammad</Text>
          <Text style={textStyle}>Rafiq Abbasi</Text>
          <Text style={textStyle}>2139406934</Text>
        </View>
        <View style={logoContainer}>
          <Image
            source={require("../../../assets/logo.png")}
            style={logoImage}
            resizeMode="contain"
          />
          <View style={counterLogo}>
            <LinearGradient
              // Background Linear Gradient
              colors={["#7C9983", "#00441D"]}
              style={grad}
            />
          </View>
        </View>
        <View style={qrContainer}>
          <LinearGradient
            // Background Linear Gradient
            colors={["#7C9983", "#00441D", "#00441D"]}
            style={qrGrad}
          >
            <View style={styles.imageTextContainer}>
              <Image
                source={require("../../../assets/Animation.gif")}
                style={qrImage}
                resizeMode="contain"
              />
              <View style={styles.qrTextContainer}>
                <Text style={qrText1}>
                  Immune by first dose {"   "}{" "}
                  <FontAwesome name="repeat" size={16} color="#FFFFFF" />
                </Text>
                <Text style={qrText2}>{`Last update: ${moment().format(
                  "ddd DD MMM, h:mm A"
                )}`}</Text>
              </View>
            </View>
            <View style={styles.qrWhiteBox}>
              <Text style={styles.immuneWhiteText}>
                Immune by first dose until{" "}
                {moment().add(14, "days").format("D/M/YYYY")}
              </Text>
            </View>
          </LinearGradient>
        </View>
        <SafeAreaView style={serviceContainer}>
          <Text style={textStyle}>New Services</Text>
          <View style={textSpacer}></View>
          <Text style={displayAllText}>Display All </Text>
          <MaterialIcons name="navigate-next" size={24} color="#A8A6A9" />
        </SafeAreaView>
        <SafeAreaView style={menuContainer}>
          {/* <View style={menuItem}>
            <FontAwesome5 name="microscope" size={24} color="#008975" />
            <Text style={menuText}>ABC</Text>
          </View>
          <View style={menuItem}>
            <AntDesign name="idcard" size={24} color="#008975" />
            <Text style={menuText}>Health Condition Card</Text>
          </View>
          <View style={menuItem}>
            <AntDesign name="mobile1" size={24} color="#008975" />
            <Text style={menuText}>Certify Mobile Number</Text>
          </View> */}
          <FlatList
            style={scrollView}
            horizontal={true}
            data={flatItem}
            renderItem={({ item }) => (
              <View style={menuItem}>
                {item.key === "Gathering Place \n Code" ? (
                  <>
                    <TouchableOpacity
                      onPress={() => setCurrentScreen("Barcode")}
                    >
                      {item.icon}
                    </TouchableOpacity>
                    <Text style={menuText}>{item.key}</Text>
                  </>
                ) : (
                  <>
                    {item.icon}
                    <Text style={menuText}>{item.key}</Text>
                  </>
                )}
              </View>
            )}
          />
        </SafeAreaView>
        <SafeAreaView style={warningContainer}>
          <View style={warningLabel}>
            <Text style={warningText}>Warning</Text>
            <Text style={warningContent}>
              We strongly encourage to download "Tabaud" App that alerts when
              contact with someone infected by Covid 19 and safe privacy,
              Protect your community by downloading the App
            </Text>
          </View>
        </SafeAreaView>
      </ScrollView>
      <ModalView
        scanned={scanned}
        setScanned={setScanned}
        setCheckin={setCheckin}
      />
      <AccessModal checkin={checkin} setCheckin={setCheckin} />
      <View style={bottomTabs}>
        <View style={bottomTabItem}>
          <Ionicons name="home-outline" size={24} color="#008975" />
          <Text style={bottomTabTextSelected}>Home</Text>
        </View>
        <View style={bottomTabItem}>
          <SimpleLineIcons name="organization" size={24} color="#A8A6A9" />
          <Text style={bottomTabText}>Services</Text>
        </View>
        <TouchableOpacity onPress={() => setCurrentScreen("digitaldocuments")}>
          <View style={bottomTabItem}>
            <Ionicons name="wallet-outline" size={24} color="#A8A6A9" />
            <Text style={bottomTabText}>Digital Documents</Text>
          </View>
        </TouchableOpacity>
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
  ) : currentScreen === "digitaldocuments" ? (
    <DigitaDocuments setCurrentScreen={setCurrentScreen} />
  ) : (
    <Barcode
      setCurrentScreen={setCurrentScreen}
      scanned={scanned}
      setScanned={setScanned}
    />
  );
}

const styles = StyleSheet.create({
  qrImageContainer: {
    zIndex: 100,
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  qrImageContainer2: {
    height: 70,
    width: 70,
    position: "relative",
  },
  mainContainer: {
    flex: 1,
  },
  break: {
    height: 0,
    flexBasis: "100%",
  },
  secondaryContainer: {
    width: "100%",
    height: 25,
  },
  bellContainer: {
    flex: 1,
    height: 70,
    maxWidth: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  Bell: {
    marginRight: 10,
  },
  logoContainer: {
    maxHeight: 40,
    maxWidth: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  imageContainer: {
    maxHeight: 140,
    maxWidth: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  userImage: {
    height: 70,
    width: 70,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#008975",
  },
  logoImage: {
    height: 30,
    width: 100,
  },
  textStyle: {
    color: "#008975",
    fontWeight: "bold",
  },
  counterLogo: {
    height: 20,
    width: 60,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
  grad: {
    flex: 1,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
  qrContainer: {
    maxHeight: 130,
    maxWidth: "100%",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  qrGrad: {
    maxWidth: "90%",
    height: 130,
    padding: 2,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  qrGrad2: {
    maxWidth: "90%",
    borderRadius: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  qrImage: {
    height: 75,
    width: 75,
    marginRight: 5,
  },
  qrText1: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
  },
  qrText2: {
    color: "#FFF",
    fontSize: 13,
  },
  serviceContainer: {
    marginTop: 30,
    maxHeight: 40,
    maxWidth: "100%",
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: "row",
  },
  textSpacer: {
    flex: 3,
  },
  displayAllText: {
    color: "#A8A6A9",
  },
  menuContainer: {
    maxHeight: 100,
    maxWidth: "100%",
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 30,
  },
  menuItem: {
    alignItems: "center",
    maxHeight: 100,
    maxWidth: 100,
    marginLeft: 10,
    paddingTop: 10,
  },
  menuText: {
    fontSize: 10,
    textAlign: "center",
  },
  warningContainer: {
    maxWidth: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  warningLabel: {
    marginTop: 30,
    marginBottom: 30,
    maxWidth: "90%",
    borderRadius: 10,
    backgroundColor: "#C2314E",
  },
  warningContent: {
    color: "#f8f8f8",
    textAlign: "center",
    fontSize: 13,
  },
  warningText: {
    textAlign: "center",
    color: "#f8f8f8",
    textDecorationLine: "underline",
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
  qrTextContainer: {},
  qrWhiteBox: {
    padding: 10,
    height: 30,
    justifyContent: "center",
    backgroundColor: "#F8f8f8",
    alignSelf: "stretch",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  imageTextContainer: {
    maxWidth: "100%",
    flexDirection: "row",
    padding: 10,
  },
  immuneWhiteText: {},
});
