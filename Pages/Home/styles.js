/* eslint-disable react-native/no-color-literals */
import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "#F0FAFC",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
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
  row: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  button: {
    flex: 0.4,
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: "#2196F3",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center"
  },
  textButton: {
    color: "white"
  },
  listContainer: {
    marginTop: 10
  }
});