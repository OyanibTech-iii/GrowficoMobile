import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Image, Text, TouchableOpacity, View, Alert, ScrollView } from 'react-native';
import { IMG, ROUTES } from '../utils';
import { AuthContext } from '../utils/AuthContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomFooter from '../components/CustomFooter';


const HomeScreen = () => {
  const navigation = useNavigation();
  const { logout } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, marginBottom:70}}>
  

      {/* <ScrollView */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 50,
        }}
      >
        <Image
          source={IMG.LOGO}
          style={{
            opacity: 0.1,
            width: 300,
            height: 300,
          }}
        />
        {/* <Text style={{ fontSize: 32, color: 'black', fontWeight: 'bold', marginBottom: 30, fontFamily: 'Poppins-Medium', }}>HomeScreen</Text> */}


      </View>
      {/* </ScrollView> */}
      <CustomFooter />
    </View>
  );
};

export default HomeScreen;