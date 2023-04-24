import { Text, TextInput, StyleSheet, Alert } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  AlertDialog,
  Button,
  CheckIcon,
  Input,
  NativeBaseProvider,
} from "native-base";
import LoginPage from "./Components/LoginPage";
import EnterOTPpage from "./Components/EnterOTPpage";
import AlertDialogBox from "./Components/AlertDialogBox";

const App = () => {
  const [verificationId, setVerificationId] = useState(null);
  const [verificationState, setVerificationState] = useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [code, setCode] = useState("");

  const cancelRef = React.useRef(null);
  return (

    <NativeBaseProvider>
      <>

        <LoginPage verificationId={verificationId} setVerificationId={setVerificationId} />
        <EnterOTPpage verificationState={verificationState} setVerificationState={setVerificationState} verificationId={verificationId} setIsOpen={setIsOpen} setCode={setCode} code={code} />
        <AlertDialogBox isOpen={isOpen}  cancelRef={cancelRef} setIsOpen={setIsOpen} />
      </>

    </NativeBaseProvider>

  );
};

export default App;

