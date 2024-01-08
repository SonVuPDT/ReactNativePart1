import React,{Component}from "react"
import { TouchableOpacity,Text } from "react-native"
function UIButton(props)
{
    const {onPress,x,isselected} =props
    return <TouchableOpacity style={{
            borderColor: 'white',
            borderWidth: 1,
            height: 40,
            borderRadius: 5,
            marginHorizontal: 80,
            marginVertical: 15,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isselected==true ?'white':null

        }} onPress={props.onPress}>

            <Text style={{
                color: 'red',
                fontWeight: 'bold'
            }}
            >{props.x}</Text>
        </TouchableOpacity>
    
}
export default UIButton