import { NavigationContainer } from '@react-navigation/native';
import { useContext, useEffect } from 'react';
import { Platform, StatusBar, useColorScheme } from 'react-native';

import AuthNav from './AuthNav';
import MainNav from './MainNav';
import ProcessNav from './ProcessNav';
import { AuthContext } from '../utils/AuthContext';

export default () => {
  const isDarkMode = useColorScheme() === 'dark';
  const { isLoggedIn, isProcessing } = useContext(AuthContext);

  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#d2eeca', true);
    }

    StatusBar.setBarStyle('dark-content', true);
  }, [isDarkMode]);

  return (
    <NavigationContainer>
      {isProcessing ? (
        <ProcessNav />
      ) : isLoggedIn ? (
        <MainNav />
      ) : (
        <AuthNav />
      )}
    </NavigationContainer>
  );
};