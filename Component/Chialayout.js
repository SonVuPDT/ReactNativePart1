import React  from "react";
import { View, Text, Image, ImageBackground, Button, TouchableOpacity, Alert } from "react-native";
import { img } from '../constantimg'
import { icon,UIButton } from '../constantimg'
import { useEffect, useState } from "react";

function wellcome(props) {

    return <View style={{
        flex: 1,
    }}>
        <ImageBackground source={img.background}
            resizeMode="cover"
            style={{
                flex: 1,

            }}
        >
            <View style={{
                flexDirection: 'row',
                height: 50,
                justifyContent: 'flex-start',
                alignItems: 'center',
                flex: 10
            }}>
                <Image source={icon.icon1}
                    style={{
                        width: 30,
                        height: 30,
                        marginStart: 5,
                        tintColor: 'white'
                    }}
                />
                <Text style={{
                    color: 'white',
                    fontSize: 20,
                    marginLeft: 10,
                    marginTop: 10
                }}>
                    HOME
                </Text>
                <View style={{ flex: 1 }}></View>
                <Image source={icon.icon2}
                    style={{
                        width: 28,
                        height: 28,
                        tintColor: 'white',
                        marginRight: 10
                    }}
                />
            </View>
            <View style={{
                flex: 30,

                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{
                    marginBottom: 10,
                    fontSize: 16,
                    color: 'white'
                }}>Welcome to</Text>
                <Text style={{
                    marginBottom: 10,
                    color: 'white',
                    fontWeight: 'bold'
                }}>UNETI</Text>
                <Text style={{
                    color: 'white',
                    fontSize: 16,
                }}>Please select your account type</Text>
            </View>
            <View style={{
                flex: 50,
               
            }}>
                <UIButton onPress={()=>{
                    Alert.alert("Sign in")
                }} x="Sign in" isselected={true}/>
                 <UIButton onPress={()=>{
                    Alert.alert("Information")
                }} x="Information" isselected={false}/>
                 <UIButton onPress={()=>{
                    Alert.alert("Exit")
                }} x="Exit" isselected={false}/>
            </View>
            <View style={{
                flex: 20,
               
            }}>

            </View>
        </ImageBackground>
    </View>
}
export default wellcome