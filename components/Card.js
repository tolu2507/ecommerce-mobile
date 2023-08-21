import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { DETAILS } from "../constant";

export const _formatter = (number)=>{
  let returner = `# ${number}`
  return returner
}

export const ListCard=(item)=>{
  const {navigate} = useNavigation()
    const { id, title, price, category, rating, image,description } = item;

    const handleNavigate = () => navigate(DETAILS, { item: {image:image,_id:id,name:title,price:price,rating:rating,description:description} });
    return (
      <View style={styles.listView}>
        <Pressable onPress={handleNavigate}>
          <Image
            source={{
              uri:image
            }}
            width={"100%"}
            height={150}
            style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
          />
  
          <View style={styles.listCardView}>
            <Text style={[styles.text, styles.textTitle]}>{title.length >=40?`${title.slice(0,40)}...`:title}</Text>
            <Text style={[styles.text, styles.texts]}>{_formatter(price)}</Text>
            <Text style={[styles.text, styles.texts]}>{category}</Text>
            <Text style={[styles.text, styles.texts]}>Rating :{rating.rate}</Text>
          </View>
        </Pressable>
      </View>
    );
  }
  
 export const CategoriesList = ({title,action}) => (
    <View style={styles.categoryList}>
      <Pressable onPress={action}>
        <View style={styles.cart}>
          <Text style={[styles.text,styles.categoryText]}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );

  const styles = StyleSheet.create({
    cart:{
      width:50,
      height:50,
      borderRadius:25,
      backgroundColor:"purple",
      display:"flex",
      justifyContent:"center",

    },
    text: {
      color: "black",
      fontSize: 24,
      fontStyle: "italic",
      fontWeight: "bold",
    },
    categoryList: {
      marginLeft: 10,
    },
    categoryText: {
      fontSize: 12,
      fontStyle: "normal",
      textAlign: "center",
      color:"white"
    },
    listView: {
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
      fontSize: 14,
      fontWeight: "600",
      textTransform: "capitalize",
      fontStyle: "italic",
    },
    textTitle: { fontSize: 16, fontWeight: "800", textTransform: "capitalize",marginBottom:5 },
  });