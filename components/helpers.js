import { FlatList, Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export function CategoriesList({ props, useSize }) {
    return <Pressable
        // onPress={}
        style={({ pressed }) =>
          pressed ? styles.sizePressed : [styles.sizeButton]
        }
      >
        <Text  style={[styles.text, styles.styledText]}>
          {props}
        </Text>
      </Pressable>
  }

 export function TextandView({ text, data, useSize }) {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>{text}</Text>
        <FlatList
          style={styles.list}
          horizontal
          data={data}
          renderItem={({ item }) => (
            <CategoriesList props={item} useSize={useSize} />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    styledText:{ textTransform: "uppercase", textAlign: "center" },
    button: {
      width: 30,
      height: 30,
      borderRadius: 10,
      backgroundColor: "red",
      marginRight: 10,
    },
    pressed: {
      width: 30,
      height: 30,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: "gold",
      marginRight: 10,
    },
    text: {
      color: "black",
      fontSize: 16,
      fontWeight: "700",
    },
    view: {
      marginBottom: 10,
      backgroundColor: "#ffffff",
    },
    sizeButton: {
      width: 30,
      height: 30,
      borderRadius: 10,
      marginRight: 10,
      borderWidth: 1,
      borderColor: "grey",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    sizePressed: {
      width: 40,
      height: 40,
      borderRadius: 10,
      borderWidth: 2,
      backgroundColor: "orange",
      color: "white",
      marginRight: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }
  });