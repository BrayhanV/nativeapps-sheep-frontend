/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "black",
        paddingVertical: 20,
    },
    textContainer: {
        flex: 1,
        marginLeft: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        alignSelf: "center"
    },
    text: {
        overflow: "hidden",
        flexWrap: "wrap",
        marginTop: 5
    }
  });