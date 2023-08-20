import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
import { Appbar, Text, Card, Button } from "react-native-paper";

function ListCard(item) {
  const { id, name, price, category, rating, imageUrl, action } = item;
  return (
    <Pressable onPress={() => action(id)}>
      <View>
        <Image source={{ uri: "" }} width={100} height={100} />

        <View>
          <Text>name</Text>
          <Text>price</Text>
          <Text>category</Text>
          <Text>rating</Text>
        </View>
      </View>
    </Pressable>
  );
}

const CategoriesList = () => (
  <Button mode="outlined">
    <View style={styles.categoryList}>
      <View style={styles.imageView}>
        <Image
          source={{
            uri: "https://www.bing.com/images/blob?bcid=qAVittj8lfkF59mTJ5W0H3j8tt71.....08",
          }}
          style={styles.imageCategory}
        />
      </View>
      <Text style={[styles.text, styles.categoryText]}>title</Text>
    </View>
  </Button>
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
      id: "1",
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
    height: 50,
    width: "100%",
  },
  bodyView: {
    flex: 1,
    paddingBottom: 20,
    width: "100%",
    backgroundColor: "green",
  },
  categoryList: {
    width: 50,
    height: 50,
    borderRadius: 30,
    borderWidth: 2,
  },
  categoryText: {
    fontSize: 15,
    fontWeight: "400",
    fontStyle: "normal",
  },
  imageView: {
    width: "100%",
    height: 40,
    borderRadius: 50,
  },
  imageCategory: {
    height: "100%",
    width: "100%",
    borderRadius: "60%",
  },
});
