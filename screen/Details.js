import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
import { Appbar, Text, Card } from "react-native-paper";

function CategoriesList({ props, useSize }) {
  // const color = { backgroundColor: colors };

  return useSize ? (
    <Pressable
      // onPress={}
      style={({ pressed }) =>
        pressed ? styles.sizePressed : [styles.sizeButton]
      }
    >
      <Text
        style={[
          styles.text,
          { textTransform: "uppercase", textAlign: "center" },
        ]}
      >
        {props}
      </Text>
    </Pressable>
  ) : (
    <Pressable
      // onPress={}
      style={({ pressed }) =>
        pressed ? styles.pressed : [styles.button, { backgroundColor: props }]
      }
    />
  );
}
function TextandView({ text, data, useSize }) {
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
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
export function DetailScreen({ navigation, route }) {
  const { item } = route.params;
  console.log(item);
  const data = {
    id: "1",
    name: "",
    price: "",
    category: "",
    rating: "",
    imageUrl: "",
    color: ["white", "black", "yellow", "gold"],
    sizes: ["s", "m", "l", "xl", "xxl"],
  };
  const Add = "Add to Cart";
  return (
    <View style={[styles.container]}>
      <View style={styles.topContainer}>
        <Image
          source={{
            uri: "https://i5.walmartimages.com/asr/edad212f-5504-4cf7-afbd-fc540ce03c2f_1.3eb1fc956d5423561bf8f65fbf7a8197.jpeg",
          }}
          width={"100%"}
          height={"100%"}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View
          style={[
            styles.view,
            {
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            },
          ]}
        >
          <View>
            <Text
              style={[
                styles.text,
                { textTransform: "capitalize", fontSize: 22 },
              ]}
            >
              name
            </Text>
            <View>
              <Text style={[styles.text, { marginTop: 10 }]}>
                4.8 (<Text>2.6k+ reviews</Text>)
              </Text>
            </View>
          </View>
          <Text
            style={[styles.text, { textTransform: "capitalize", fontSize: 18 }]}
          >
            #10,000
          </Text>
        </View>
        <TextandView text={"Select Size"} data={data.sizes} useSize />
        <TextandView text={"Select Color"} data={data.color} useSize={false} />
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    padding: 20,
    backgroundColor: "#ffff",
    justifyContent: "space-between",
  },
  bottomContainer: {
    marginTop: 5,
  },
  topContainer: {
    flex: 1,
    position: "relative",
  },
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
    marginBottom: 20,
    backgroundColor: "#ffffff",
  },
  list: {
    marginTop: 20,
  },
  sizeButton: {
    width: 40,
    height: 40,
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
