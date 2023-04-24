import { Text, StyleSheet } from "react-native";
import React, { useEffect, useRef, useState } from "react";

import firebase from "firebase/compat/app";
import { Box, Button, Input, Spinner } from "native-base";

const EnterOTPpage = ({ setVerificationState, verificationId, isOpen, setIsOpen,setCode,code,  }) => {


    const confirmCode = async () => {
        const credential = firebase.auth.PhoneAuthProvider.credential(
            verificationId,
            code
        );

     await firebase.auth()
            .signInWithCredential(credential)
            .then(() => {
                setCode("");
               
                setVerificationState(true);
                setIsOpen(true);
               
            })
            .catch((error) => {
                // show an alert in case of error
                setVerificationState(false);
            });

    };





    return (
       
            <Box  style={styles.OTPcontainer}>
                {!isOpen  && <>
                    <Input
                        type="large"
                        value={code}
                        placeholder="Confirmation Code"
                        onChangeText={setCode}
                        keyboardType="number-pad"
                        style={styles.textInput}
                    />
                    <Button style={styles.otpbtn} onPress={confirmCode}>
                        <Text style={styles.buttonText}>Confirm OTP</Text>
                    </Button></>}
            </Box>
       
    );
};

export default EnterOTPpage;

const styles = StyleSheet.create({
    OTPcontainer:{
        height:"100%",
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        flexDirection:"column"
    },
    otpbtn:{
        backgroundColor:"#ADD8E6",
        color:"black",
        fontSize:"2vh"
    }
    ,
    buttonText:{
        fontSize:"4vh"
    },
    textInput:{
        fontSize:"3vh" ,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"
    }
});
