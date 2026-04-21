import { useContext, useState } from 'react';
import { Text, TouchableOpacity, View, Image, ImageBackground, Modal, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import CustomFooter from '../../components/CustomFooter';
import CustomTextInput from '../../components/CustomTextInput';
import CustomModal from '../../components/CustomModal';
import { IMG, ROUTES } from '../../utils';
import { AuthContext } from '../../utils/AuthContext';

const Login = () => {
  // GETTER //SETTER
  const [emailAdd, setEmailAdd] = useState('');
  const [password, setPassword] = useState('');
  const { login, setIsProcessing } = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', message: '', type: '' });
  const navigation = useNavigation();
  const showAlert = (title, message, type = 'error') => {
    setModalContent({ title, message, type });
    setModalVisible(true);
  };

  //   useEffect(() => {}, [emailAdd, password]);

  return (
    <ImageBackground
      source={IMG.BACKGROUND}
      style={{ flex: 1, backgroundColor: '#48bf2425' }}
      resizeMode="cover"
      imageStyle={{ opacity: 0.1 }}
      blurRadius={8}
    >
    
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <CustomModal
          visible={modalVisible}
          title={modalContent.title}
          message={modalContent.message}
          type={modalContent.type}
          onClose={() => setModalVisible(false)}
        />

        <View >
          <Image source={IMG.LOGO} style={{ width: 300, height: 200, marginTop: 80, }} resizeMode="contain" />
        </View>

        {/* <Text style={{ color: 'black', fontFamily: 'Poppins-Medium' }}>{emailAdd}</Text>
      <Text style={{ color: 'black', fontFamily: 'Poppins-Medium' }}>{password}</Text> */}

        <View style={{ width: '100%', alignItems: 'center', }}>
          <Text style={{ fontSize: 20, color: '#0ea242', fontFamily: 'Poppins-Medium', marginBottom: 10, }}>Cultivating Green Futures</Text>
          <CustomTextInput
            label={'Email Address'}
            placeholder={'Email Address'}
            placeholderTextColor={'#84b675'}
            value={val => setEmailAdd(val)}
            containerStyle={{
              width: '80%',
              marginBottom: 8,

            }}
            labelStyle={{
              fontSize: 15,
              color: '#0f3a03',
              fontWeight: '700',
              fontFamily: 'Poppins-Medium',
            }}
            textStyle={{
              color: '#0f3a03',
              letterSpacing: .8,
              fontSize: 12,
              fontFamily: 'Poppins-Medium',
            }}
          />

          <CustomTextInput
            label={'Password'}
            placeholder={'Password'}
            placeholderTextColor={'#94b28b'}
            value={val => setPassword(val)}
            isPassword={true}
            containerStyle={{
              width: '80%',
              fontFamily: 'Poppins-Medium',
            }}
            labelStyle={{
              fontSize: 15,
              color: '#0f3a03',
              fontWeight: '700',
              fontFamily: 'Poppins-Medium',
            }}
            textStyle={{
              letterSpacing: .8,
              color: '#0f3a03',
              fontSize: 12,
              fontFamily: 'Poppins-Medium',
            }}
          />
        </View>

        <CustomButton
          label={'Login'}
          containerStyle={{
            justifyContent: 'center',
            marginVertical: 20,
            width: '80%',
            backgroundColor: '#47bf24',
            borderRadius: 10,
            fontFamily: 'Poppins-Medium',
          }}
          textStyle={{
            color: '#ffffff',
            textAlign: 'center',
            fontSize: 16,
            fontFamily: 'Poppins-Medium',
          }}
          // onPress={async () => {
          //             login({ 
          //     email: emailAdd,
          //     password: password
          //   });

          // }}
          onPress={() => {

            if (emailAdd === '' || password === '') {
              showAlert('Invalid Credentials', 'Please fill in all fields.');
              return;
            }
            if (emailAdd === '123' && password === '123') {
              showAlert('Success', 'Login successful!', 'success');

              setTimeout(() => {
                setModalVisible(false);

                // 3. Trigger the ProcessNav globally
                setIsProcessing(true);

                // 4. Delay the actual login to show the spinner
                setTimeout(() => {
                  login({ email: emailAdd });
                  setIsProcessing(false); // Turn off processing once logged in
                }, 2500);

              }, 1500);
            } else {
              showAlert('Invalid Credentials', 'Email or password is incorrect.');
            }
          }}
        />

        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontFamily: 'Poppins-Medium', color: '#0f3a03', fontSize: 12 }}>Not register yet?</Text>
          <TouchableOpacity
            style={{ marginLeft: 5 }}
            onPress={() => navigation.navigate(ROUTES.REGISTER)}
          >
            <Text style={{ color: '#1f6908', fontFamily: 'Poppins-Bold', letterSpacing: .5, fontSize: 12 }}>Register</Text>
          </TouchableOpacity>
        </View>
        <CustomFooter />

      </View>
    </ImageBackground>

  );
};

export default Login;