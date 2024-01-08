import React,{useState} from "react";
import {StyleSheet, Text,View} from 'react-native'
const Sepherator=()=> <View style={styles.separator}/>;
const TextCPN=()=>{
    const [titletext,settitletext]=useState("FaceBook");
    const bodyText="Facebook là nền tảng mạng xã hội phổ biến nhấtttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt";
    const onPress=()=>{
        settitletext("Facebook.com");
    };
 
    return<View style={{
        flex:1,
       
        alignItems:'center'
            }}>
        <Text onPress={onPress} style={styles.titletext}>
                {titletext}
        </Text>
        <View style={styles.separator}>
            
        </View>
        <Text style={styles.baseText} numberOfLines={3}>
            {bodyText}
        </Text>
    </View>
   
};
const styles=StyleSheet.create({
    baseText:{
        fontFamily:'cochin',
        fontSize:20
    },
    titletext:{
        fontWeight:'bold',
        fontSize:30
    },
    separator:{
        backgroundColor:'red',
        height:10,
        marginVertical: 8,
        borderBottomColor: 'Black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});
export default TextCPN