import { Image, StyleSheet,View } from "react-native";
import { IconButton, Text } from "react-native-paper";
import Counter from "./counter";

export default function CartDetail({image,title,price,size,num}){

    return (
        <View style={styles.container}>
          <Image
          source={{uri:image}}
          width={150}
          height={150}
          resizeMethod="resize"
          />
          <View style={styles.view}>
            <Text style={[styles.text, styles.textTitles]}>{title}</Text>
            <Text style={[styles.text, styles.textPrices]}>{price}</Text>
            <Text style={[styles.text, styles.textTitle]}>{size}</Text>
            <Counter number={num}/>
            <IconButton icon={'close'} style={{position:"absolute",top:0,right:0}}/>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    },
    container: {display:"flex",flexDirection:"row",marginBottom:20},
    view: {flex:1,paddingHorizontal:10,paddingVertical:7,position:"relative"}
  });