import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import Button from "../components/button";
import { IconButton, Text } from "react-native-paper";
import Counter from "../components/counter";
import CartDetail from "../components/CartDetails";
import { useDispatch, useSelector } from "react-redux";
import { useLayoutEffect } from "react";
import { fetchCart } from "../store/cartSlice";
import { useEffect } from "react";
import { _formatter } from "../components/Card";
import { useNavigation } from "@react-navigation/native";

function TextwithPrice({text,price}){
let changer = `# ${price}`
  return<View style={styles.textView}>
  <Text style={[styles.text, styles.textTitle]}>{text}</Text>
  <Text style={[styles.text, styles.textPrice]}>{changer}</Text>
</View>
}
{/*  */}
export function CartScreen() {
  const {navigate} = useNavigation()
  const {items} = useSelector(state=>state)

  function total(array){
    let answ = 0;
    for (const num of array) {
      answ = answ + (num.price*num.num);
    }
    return answ
  }
  const Add = "Checkout"
  let shipping= items.length === 0? 0 : 2500;
  let Total = total(items);
  let sum = Total + shipping;
  return (
    <View style={styles.container}>
      <ScrollView style={styles.view}>
        {items.map(({_id:id,image,num,price,name})=><CartDetail key={id} image={image} num={num} price={_formatter(price)} title={name} size="XL"/>)}
        <View>
          <TextwithPrice text="Sub Total" price={Total}/>
          <TextwithPrice text="Shipping" price={shipping}/>
          <View style={styles.total}>
          <TextwithPrice text="Total" price={sum}/>
          </View>
        </View>
        <Button action={()=>navigate("Dashboard")} text={Add}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  textView:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingVertical:7
  },
  text:{
    fontSize:15,
    fontWeight:"700"
  },
  textTitles:{
    fontSize:16,
    textTransform:"capitalize",
    marginBottom:12
  },
  textPrices:{
    fontSize:20,
    marginBottom:12
  },
  textTitle:{
    color:"grey"
  },total:{
    borderTopWidth:1,
    borderTopColor:"grey",
    borderStyle:"dashed"
  },
  textPrice:{
    color:"black",
    fontSize:20,
    fontWeight:"900"
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
    fontFamily:"Ubuntu"
  },
  view: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom:50,
    width:"100%"
  }
});
