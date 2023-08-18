import { FlatList, Image, Pressable, View } from "react-native";
import { Appbar, Text, Card } from "react-native-paper";

function ListCard(item) {
  const { name, price, category, rating, imageUrl } = item;
  return (
    <Pressable>
      <View>
        <Image source={{ uri: "" }} width={50} height={70} />

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

function CategoriesList() {
  return (
    <Pressable>
      <View>
        <Image source={{ uri: "" }} />
      </View>
    </Pressable>
  );
}

export function DashboardScreen() {
  const data = [
    {
      id: "1",
      name: "",
      price: "",
      category: "",
      rating: "",
      imageUrl: "",
    },
  ];
  return (
    <View>
      <Appbar></Appbar>
      <View>
        <View></View>
        <View>
          <FlatList
            data={data}
            renderItem={({ item }) => <ListCard {...item} />}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        </View>
      </View>
    </View>
  );
}
