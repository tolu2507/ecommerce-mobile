import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
import { Appbar, Text, Card } from "react-native-paper";
import Button from "../components/button";
import { _formatter } from "../components/Card";
import { TextandView } from "../components/helpers";
import { addItem } from "../store/cartsSlice";
import { useDispatch } from "react-redux";

export function DetailScreen({  route }) {
  const { item } = route.params;
  const dispatch = useDispatch()
  console.log(item);
  const data = {
   ...item,
    sizes: ["s", "m", "l", "xl", "xxl"],
    num:2
  };
  const Add = "Add to Cart";
  function handleDispatch(item){
    dispatch(addItem(item))
  }
  return (
    <View style={[styles.container]}>
      <View style={styles.topContainer}>
        <Image
          source={{uri:data.image}}
          width={"100%"}
          height={"100%"}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={[styles.view, styles.views]}>
          <View>
            <Text style={[styles.text,styles.styledText]}>
              {data.name.slice(0,33)}
            </Text>
            <View>
              <Text style={[styles.text, { marginTop: 10 }]}>
                {data.rating.rate}{" "}<Text>({data.rating.count } reviews)</Text>
              </Text>
            </View>
          </View>
          <Text
            style={[styles.text, { textTransform: "capitalize", fontSize: 20,color:"green", fontWeight:"bold" }]}
          >
           {_formatter(data.price)}
          </Text>
        </View>
        <TextandView text={"Select Size"} data={data.sizes} useSize />
        <View style={styles.view}>
          <Text style={styles.text} >Description : </Text>
          <Text>{data.description}</Text>
        </View>
        <Button action={()=>handleDispatch(data)} text={Add}/>
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
  views:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  styledText:{ textTransform: "capitalize", fontSize: 18 },
  bottomContainer: {
    marginTop: 15,
    minHeight:"43%"
  },
  topContainer: {
    flex: 1,
    position: "relative",
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
  list: {
    marginTop: 10,
  }
});
