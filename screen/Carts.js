import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
// import { Text } from "react-native-paper";

export function CartScreen() {
  const Add = "Checkout"
  return (
    <View style={styles.container}>
      <ScrollView style={styles.view}>
        <View>
          <View>
            <Text>Sub Total</Text>
            <Text>#15,000</Text>
          </View>
        </View>
        <Pressable
          // onPress={}
          style={({ pressed }) =>
            pressed ? styles.pressable : styles.pressableButton
          }
        >
          <Text
            style={[
              styles.text,
              {
                textTransform: "uppercase",
                textAlign: "center",
                color: "white",
              },
            ]}
          >
            {Add}
          </Text>
        </Pressable>
      </ScrollView>
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
    width:"100%"
  },
});
