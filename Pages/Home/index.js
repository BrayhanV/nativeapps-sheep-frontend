import React, { useContext, useEffect } from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { ReportItem } from "../../Components/ReportItem";
import { Context } from "../../Context";
import { styles } from "./styles";

export const Home = ({ history }) => {
  const { reports, setSavedReports, removeReports } = useContext(Context)

  const goToCreation = () => {
    history.push("Creation")
  }

  const renderItem = ({ item }) => (
    <ReportItem image={item.image} description={item.description} />
  );

  useEffect(() => {
    setSavedReports();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hello and welcome!</Text>

      <Text style={styles.text}>You can create some reports here:</Text>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.right]} onPress={() => goToCreation()}>
          <Text style={styles.textButton}>Create report</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => removeReports()}>
          <Text style={styles.textButton}>Remove reports</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.listContainer}
        data={reports}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
