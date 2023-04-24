import { Text, StyleSheet } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";

import firebase from "firebase/compat/app";
import { Box, Button, Input } from "native-base";
import { firebaseConfig } from "../configurations/config";

const LoginPage = ({verificationId, setVerificationId}) => {
  const [phoneNumber, setPhoneNumber] = useState("");


  const recaptchaVerifier = useRef(null);
  const [verificationState, setVerificationState] = useState(false);


  const sendVerification = async () => {
    const phoneProvider = await firebase
      .auth()
      .signInWithPhoneNumber("+91" + phoneNumber, recaptchaVerifier.current);
    setVerificationId(phoneProvider.verificationId);
    

  
  };



  return (
    <>
      {verificationId === null && verificationState === false && (
        <Box style={styles.loginPageContainer}>
          <Text style={styles.mainText}>
            <FirebaseRecaptchaVerifierModal
              ref={recaptchaVerifier}
              firebaseConfig={firebaseConfig}
              attemptInvisibleVerification={true}
            />
            Login using OTP
          </Text>
          <Input
            placeholder="Phone Number"
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            autoCompleteType="tel"
            style={styles.textInput}
          />

          <Button onPress={sendVerification} style={styles.btnStyle}>
            <Text style={styles.buttonText}>Send Verification</Text>
          </Button>
        </Box>
      )}
    </>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    fontSize: 29,
    borderBottomWidth: 2,
    border: 0,
    textAlign: "center",
    color: "grey",
  },
  sendVerification: {
    padding: 20,
    backgroundColor: "#3498db",
    borderRadius: 10,
  },
  sendCode: {
    padding: 20,
    backgroundColor: "#9b59b6",
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: "2.5vh",
  },
  btnStyle: {
    backgroundColor: "#ffa500",
  },
  mainText: { color: "#5cdb5c", border: 0, fontSize: "4.5vh", fontWeight: 700 },
  loginPageContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "100%",
    flexDirection: "column",
  },
});
