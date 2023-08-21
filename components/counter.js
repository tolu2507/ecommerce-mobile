import { StyleSheet, View } from "react-native";
import { IconButton, Text } from "react-native-paper";

export default function Counter({number}){

    return (
        <View style={styles.container}>
            <IconButton icon={'minus'} size={16}/>
            <Text style={styles.text}>{number}</Text>
            <IconButton icon={'plus'} size={16}/>
            </View>
    )
}

const styles = StyleSheet.create({
  
    text:{
      fontSize:15,
      fontWeight:"700"
    },
    container: {display:"flex",flexDirection:"row", alignItems:"center",position:"absolute",bottom:0},
  });