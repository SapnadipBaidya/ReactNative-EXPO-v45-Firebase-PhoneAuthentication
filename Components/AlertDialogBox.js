



import { Text, StyleSheet } from "react-native";
import React from "react";

import { AlertDialog, Button, CheckIcon } from "native-base";


const AlertDialogBox = ({ isOpen, cancelRef, setIsOpen }) => {

    const onClose = () => setIsOpen(false);
    return (
    
            <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
                <AlertDialog.Content>
                    <AlertDialog.Header>Verification Complete</AlertDialog.Header>
                    <AlertDialog.Body style={styles.bodyStyle}>
                        <Text color="coolGray.100" fontSize="md">
                            Successfully Verified
                        </Text>
                        <CheckIcon size="5" mt="0.5" color="emerald.500" />

                    </AlertDialog.Body>
                    <AlertDialog.Footer>


                        <Button colorScheme="success" onPress={onClose}>
                            OK
                        </Button>

                    </AlertDialog.Footer>
                </AlertDialog.Content>
            </AlertDialog>

      
    );
};

export default AlertDialogBox;

const styles = StyleSheet.create({
    bodyStyle: { display: "flex", justifyContent: "space-evenly", alignItems: "center", flexDirection: "row" }
});
