import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export function CartScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.view}></ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "green",
  },
  view: {
    backgroundColor: "white",
    flex: 1,
    paddingBottom: 20,
  },
});
