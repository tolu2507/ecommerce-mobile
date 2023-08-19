import { FlatList, Image, Pressable, View } from "react-native";
import { Appbar, Text, Card } from "react-native-paper";

function ListCard(item) {
  const { id,name, price, category, rating, imageUrl, action } = item;
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

function CategoriesList() {
  return (
    <Pressable>
      <View>
        <Image source={{ uri: "" }} />
        <Text>title</Text>
      </View>
    </Pressable>
  );
}

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
    <View>
      <Text>Find your style</Text>
      <View>
        <FlatList
          horizontal
          data={data}
          renderItem={({ item }) => <CategoriesList />}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View>
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
