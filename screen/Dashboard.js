import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
import { Appbar, Text, Card, Button } from "react-native-paper";

function ListCard(item) {
  const { id, name, price, category, rating, imageUrl, action } = item;
  return (
    <View style={styles.listView}>
      <Pressable onPress={() => action(id)}>
        <Image
          source={{
            uri: "https://i5.walmartimages.com/asr/edad212f-5504-4cf7-afbd-fc540ce03c2f_1.3eb1fc956d5423561bf8f65fbf7a8197.jpeg",
          }}
          width={"100%"}
          height={150}
          style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
        />

        <View style={styles.listCardView}>
          <Text style={[styles.text, styles.textTitle]}>name</Text>
          <Text style={[styles.text, styles.texts]}>price</Text>
          <Text style={[styles.text, styles.texts]}>category</Text>
          <Text style={[styles.text, styles.texts]}>rating</Text>
        </View>
      </Pressable>
    </View>
  );
}

const CategoriesList = ({image,text,id}) => (
  <View style={styles.categoryList}>
    <Pressable onPress={() => action(id)}>
      <Image
        source={{
          uri: "https://i5.walmartimages.com/asr/edad212f-5504-4cf7-afbd-fc540ce03c2f_1.3eb1fc956d5423561bf8f65fbf7a8197.jpeg",
        }}
        width={50}
        height={50}
        style={{ borderRadius: 25 }}
      />
    </Pressable>
    <Text style={[styles.text, styles.categoryText]}>title</Text>
  </View>
);

export function DashboardScreen({ navigation, route }) {
  const handleNavigate = (id) => navigation.navigate("Details", { item: id });
  const data = [
    {
      id: "1",
      name: "",
      price: "",
      category: "",
      rating: "",
      imageUrl: "",
      color: ["black", "yellow", "gold"],
      action: handleNavigate,
    },
    {
      id: "2",
      name: "",
      price: "",
      category: "",
      rating: "",
      imageUrl: "",
      color: ["black", "yellow", "gold"],
      action: handleNavigate,
    },
    {
      id: "3",
      name: "",
      price: "",
      category: "",
      rating: "",
      imageUrl: "",
      color: ["black", "yellow", "gold"],
      action: handleNavigate,
    },
    {
      id: "4",
      name: "",
      price: "",
      category: "",
      rating: "",
      imageUrl: "",
      color: ["black", "yellow", "gold"],
      action: handleNavigate,
    },
    {
      id: "5",
      name: "",
      price: "",
      category: "",
      rating: "",
      imageUrl: "",
      color: ["black", "yellow", "gold"],
      action: handleNavigate,
    },
    {
      id: "6",
      name: "",
      price: "",
      category: "",
      rating: "",
      imageUrl: "",
      color: ["black", "yellow", "gold"],
      action: handleNavigate,
    },
    {
      id: "7",
      name: "",
      price: "",
      category: "",
      rating: "",
      imageUrl: "",
      color: ["black", "yellow", "gold"],
      action: handleNavigate,
    },
    {
      id: "8",
      name: "",
      price: "",
      category: "",
      rating: "",
      imageUrl: "",
      color: ["black", "yellow", "gold"],
      action: handleNavigate,
    },
    {
      id: "9",
      name: "",
      price: "",
      category: "",
      rating: "",
      imageUrl: "",
      color: ["black", "yellow", "gold"],
      action: handleNavigate,
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Find your style</Text>
      <View style={styles.categoryView}>
        <FlatList
          horizontal
          data={data}
          renderItem={({ item }) => <CategoriesList />}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.bodyView}>
        <FlatList
          data={data}
          renderItem={({ item }) => <ListCard {...item} />}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  text: {
    color: "black",
    fontSize: 24,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  categoryView: {
    // height: 50,
    width: "100%",
    marginVertical:20
  },
  bodyView: {
    flex: 1,
    paddingTop: 10,
  },
  categoryList: {
    marginLeft: 10,
  },
  categoryText: {
    fontSize: 15,
    fontWeight: "400",
    fontStyle: "normal",
    textAlign: "center",
  },
  imageView: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
  },
  // imageCategory: {
  //   height: 50,
  //   width: 50,
  //   borderWidth: 1,
  //   objectFit:"contain"
  // },
  listView: {
    // borderWidth: 1,
    flex: 1 / 2,
    margin: 10,
    borderRadius: 5,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  listCardView: {
    padding: 5,
  },
  texts: {
    fontSize: 12,
    fontWeight: "400",
    textTransform: "capitalize",
    fontStyle: "italic",
  },
  textTitle: { fontSize: 16, fontWeight: "600", textTransform: "capitalize" },
});
