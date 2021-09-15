import firebase from "firebase";
import { Alert } from "react-native";
const firebaseConfig = {
  apiKey: "AIzaSyA7WaM8yi2qVZTcKbpcjn_ehC-YZcpeyf8",
  authDomain: "tawakkalna-a68c4.firebaseapp.com",
  projectId: "tawakkalna-a68c4",
  storageBucket: "tawakkalna-a68c4.appspot.com",
  messagingSenderId: "205696259131",
  appId: "1:205696259131:web:8ca409daf9a587ce81381e",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

const registerUser = (email, password, username) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;

      db.collection("users")
        .doc(user.uid)
        .set({ email, password, username })
        .then((res) => {
          console.log("response==>", res);
        })
        .catch((err) => {
          console.log("error==>", err);
        });
      Alert.alert("User Registered Successfully");
    })
    .catch((error) => {
      console.log("error==>", error.message);
      Alert.alert(
        `there was error trying to register the user ${error.message}`
      );
    });
};

export { registerUser };
