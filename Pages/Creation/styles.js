/* eslint-disable react-native/no-color-literals */
import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        paddingHorizontal: 10,
        paddingVertical: 20,
        backgroundColor: "#F0FAFC"
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 20,
    },  
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },  
    text: {
        marginTop: 10,
        color: "black",
        textAlign: "center"
    },
    label: {
        marginHorizontal: 12,
        marginTop: 20
    },
    input: {
        height: 70,
        marginHorizontal: 12,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10
    },
    image: {
        width: 200,
        height: 200,
        alignSelf: "center",
        borderRadius: 10
    },
    button: {
        width: 100,
        marginTop: 20,
        borderRadius: 15,
        backgroundColor: "#2196F3",
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: "center"
    },
    imageButton: {
        width: 150,
        alignSelf: "center"
    },  
    textButton: {
        color: "white"
    },
    buttonCancel: {
        backgroundColor: "#FD715C"
    },
    right: {
        marginRight: 10
    },
    defaultImageContainer: {
        width: 200,
        height: 200,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 20,
        backgroundColor: "#BAC4DA"
    },
    disabled: {
        backgroundColor: "#999999"
    }
  });