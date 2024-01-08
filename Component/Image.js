import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, FlatList, Alert } from 'react-native';

const getAPI = "https://apiv2.uneti.edu.vn/api/version/Load_PhienBan";

const DisplayImage = () => {
  const [data, setData] = useState([]);

  const handleLogin = async () => {
    try {
      const response = await fetch(getAPI);
  
      if (!response.ok) {
        throw new Error(`Network response was not ok. Status: ${response.status}`);
      }
  
      const account = await response.json();
      console.log("dỮ LIỆU", account)
      setData(account);
    } catch (error) {
      console.error("Error fetching data:", error);
      Alert.alert(`Error fetching data: ${error.message}`);
    }
  };

  useEffect(() => {
    handleLogin();
    
  }, []);

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <TouchableOpacity
        style={{
          borderRadius: 10,
          backgroundColor: "#00688B",
          height: 40,
          width: 100,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
        onPress={handleLogin}
      >
        <Text style={{ color: 'white' }}>ĐĂNG NHẬP</Text>
      </TouchableOpacity>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10, marginLeft: 20 }}>
            <Text>User: {item.HT_TTPB_TenPhienBan}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DisplayImage;
