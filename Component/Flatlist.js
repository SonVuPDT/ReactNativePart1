import React, { useState } from "react";
import { FlatList, SafeAreaView, Text ,View, TouchableOpacity, Alert, Button, TextInput}from 'react-native'
var Array=[
    {
        id:'1',
        value:'A'
    },
    {
        id:'2',
        value:'B'
    },
    {
        id:'3',
        value:'C'
    },
    {
        id:'4',
        value:'D'
    },
    {
        id:'5',
        value:'E'
    },
    {
        id:'6',
        value:'F'
    }
]
const Itemview=({item})=>{
    return <TouchableOpacity style={{
        height:60
    }} onPress={()=>getItem(item)}>
        <Text style={{
            fontSize:20
        }}>
            {item.value}
        </Text>
    </TouchableOpacity>
}
const getItem=(item)=>{
Alert.alert('ID:'+item.id +' Value: '+item.value);
}
const ItemSeparatorView=()=>{
    return <View style={{
        height:1, 
        width:'100%',
        backgroundColor:'black'
    }}/>
}


const FlatlistCPN=()=>{
    const [listitem,setlistitem]=useState(Array);
    const [text,settext]=useState('');

    return <SafeAreaView style={{flex:1}}>
        <View style={{
            flexDirection:'row'
        }}>
            <View style={{marginHorizontal:10, marginVertical:10}}>
            <Button title="Thêm" onPress={()=>{
                const newitem={id:String(listitem.length+1) ,value:`${text}`};
                Array.push(newitem);
              setlistitem(Array);
            }}/>
            </View>
       
        <TextInput style={{
            borderBottomWidth:1,
            width:'80%'
        }} onChangeText={(textinput)=>{
            settext(textinput);
        }}/>
        </View>
        <View>
            <FlatList data={Array} renderItem={Itemview} keyExtractor={(item,index)=>index.toString()} ItemSeparatorComponent={ItemSeparatorView}/>
        </View>
    </SafeAreaView>
}
export default FlatlistCPN