import { FlatList, StyleSheet, View } from "react-native";
import { Text, ActivityIndicator } from "react-native-paper";
import { CategoriesList, ListCard } from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../store/productSlice";
import { fetchCategories } from "../store/categorySlice";
import { useState } from "react";



export function DashboardScreen({ navigation, route }) {
  const [view, setView] = useState([])
  const [category, setCategory] = useState([])
  const dispatch = useDispatch();
  const {product,categories} = useSelector(state=>state)

  useEffect(()=>{
    dispatch(fetchProducts())
    dispatch(fetchCategories())
  },[])

  useEffect(()=>{
    if(product.length !==0){
    setView(product)
    setCategory((prev)=>['All', ...categories])}
  },[product,categories])

  if(view.length === 0){
    return <ActivityIndicator size={"large"}/>
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Find your style</Text>
      <View style={styles.categoryView}>
        <FlatList
          horizontal
          data={category}
          renderItem={({ item }) => <CategoriesList title={item} action={item === "All" ? ()=>setView(product):()=>setView(product.filter(items=>items.category === item))}/>}
          keyExtractor={(item) => item}
        />
      </View>
      <View style={styles.bodyView}>
        <FlatList
          data={view}
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
    fontFamily:"Ubuntu"
  },
  text: {
    color: "black",
    fontSize: 24,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  categoryView: {
    width: "100%",
    marginVertical:20
  },
  bodyView: {
    flex: 1,
    paddingTop: 10,
  },})
