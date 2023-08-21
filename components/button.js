import { Pressable, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export default function Button({text, action}){
    return (
        <Pressable
          onPress={action}
          style={({ pressed }) =>
            pressed ? styles.pressable : styles.pressableButton
          }
        >
          <Text
            style={[
              styles.text,
              styles.textBold
            ]}
          >
            {text}
          </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    text:{
      fontSize:15,
      fontWeight:"700"
    },textBold:{
        textTransform: "uppercase",
        textAlign: "center",
        color: "white",
      },
   pressable: {
      backgroundColor: "#201919",
      padding: 15,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20,
    },
    pressableButton: {
      backgroundColor: "black",
      padding: 15,
      elevation: 5,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
    },
  });