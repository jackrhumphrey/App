import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function MenuScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text>Create an event</Text>
      </View>
      <View style={styles.section}>
        <Text>About Kunekt</Text>
        <Text>Donate</Text>
      </View>
      <View style={styles.section}>
        <Text>Provide feedback</Text>
        <Text>Suggest Feature</Text>
      </View>
    </ScrollView>
  );
}

MenuScreen.navigationOptions = {
  title: "Menu"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  section: {
    padding: 15
  }
});
