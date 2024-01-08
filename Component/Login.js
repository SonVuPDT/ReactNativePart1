import React, { useState } from "react";
import { Alert, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import CheckBox from "@react-native-community/checkbox";
const login=()=>{
    [isselected,setselect]=useState(false);
    [tendangnhap,settendangnhap]=useState('');
    [matkhau,setmatkhau]=useState('');
    [ishide,sethide]=useState(true);
    const onhide=()=>{
        sethide(!ishide);
    }
    const onpress=()=>{
        setselect(!isselected);
    }
    const onchange=(textinput)=>{
        settendangnhap(textinput);
        setmatkhau(textinput);
    }
    return <View  style={{
        flex:1,
        flexDirection:'column',
        backgroundColor:'white'
    }}>
<View style={{
            flex:30,
           
            marginTop:15,
            alignItems:'center',
         
           
        }}>
            <Image source={require ('../image/z5035800852461_99b7e26dce0dbade9458ff4ef1809cc9.jpg')} style={{
                width:230,
                height:230,
                resizeMode:'stretch'
            }}/>
        </View>
        <View style={{
            flex:35,
        }}>
            <View style={{marginTop:15}}>
            <Text style={{fontSize:18, marginLeft:20}}>
                Tên đăng nhập
            </Text>
            <View style={{borderWidth:1, marginHorizontal:20, borderRadius:5}}>
                <TextInput onChangeText={text=>settendangnhap(text)} value={tendangnhap}></TextInput>
            </View>
            </View>
          <View style={{marginTop:10}}>
          <Text style={{fontSize:18, marginLeft:20}}>
                Mật khẩu
            </Text>
            <View style={{borderWidth:1, marginHorizontal:20, borderRadius:5, flexDirection:'row'}}>
                
                <TextInput style={{
                    width:'100%'
                }} onChangeText={text=>setmatkhau(text)} secureTextEntry={ishide} value={matkhau} />
<View>
                <TouchableOpacity onPress={onhide}>
                {
                   ishide ? (
                   
                    <Image
                      style={{
                        width:20,
                        height:20,
                        position:'absolute',
                        right: 0,
                       
                        marginVertical:15,
                        marginRight:10
                      }}
                      source={require('../image/hide.png')}
                      resizeMode="stretch"
                    />
                  ) : (
                    <Image
                    style={{
                        width:20,
                        height:20,
                        position:'absolute',
                        right: 0,
                       
                        marginVertical:15,
                        marginRight:10
                      }}
                      source={require('../image/visible.png')}
                      resizeMode="stretch"
                    />
                  )
               }
                    </TouchableOpacity>
                </View>
                
                
             
              
            </View>
          </View>
          <View style={{
            flexDirection:'row',
            marginLeft:15
            }}>
            <CheckBox value={isselected} onValueChange={onpress}  tintColor={{ true: '#00688B', false: 'red' }}/>
            <Text style={{
                marginTop:5
            }}>Nhớ mật khẩu</Text>
            </View>
            <View style={{
                marginTop:10,
                alignItems:'center'
                
            }}>
                <TouchableOpacity style={{
                    alignItems:'center',
                    backgroundColor:'#245d7c',
                    justifyContent:'center',
                    height:50,
                    width:150,
                    borderRadius:50
                }} onPress={()=>{
                    Alert.alert("Tên đăng nhập là: "+tendangnhap+" và Mật khẩu: "+matkhau);
                }}>
                    <Text style={{
                        fontSize:20,
                        color:'white'
                    }}>Đăng Nhập</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{
           
            flex:15,
            alignItems:'center'
        }}>
            <Text style={{fontSize:17}}>TRƯỜNG ĐẠI HỌC</Text>
            <Text style={{fontSize:17}}>KINH TẾ-KỸ THUẬT CÔNG NGHIỆP</Text>
            <Text style={{fontSize:17}}>Tel:(024)38621504 - (0228)3848706</Text>
            <View style={{
                flexDirection:'row',
                marginHorizontal:20
            }}>
                <View>
                <Image source={require('../image/earth-globe.png')} style={{
                     width:30,
                     height:30,
                     resizeMode:'stretch'
                }}/>
                </View>
               <View style={{
                   marginLeft:20,
                   marginRight:20
                }}>
               <Image source={require('../image/facebook.png')} style={{
            width:30,
            height:30,
            resizeMode:'stretch'
               }}/>
               </View>
               <View>
               <Image source={require('../image/youtube.png')} style={{
            width:30,
            height:30,
            resizeMode:'stretch'
               }}/>
               </View>
               
            </View>
        </View>
        </View>
}
export default login