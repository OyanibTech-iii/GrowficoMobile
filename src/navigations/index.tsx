import { NavigationContainer } from '@react-navigation/native';
import { useContext, useEffect } from 'react';
import { Platform, StatusBar, useColorScheme } from 'react-native';
import { useDispatch} from 'react-redux';
import AuthNav from './AuthNav';
import MainNav from './MainNav';
import ProcessNav from './ProcessNav';
import ReleaseNav from './ReleaseNav';
import ErrorNav from './ErrorNav';
import { AuthContext } from '../utils/AuthContext';
import { useSelector } from 'react-redux';


export default () => {
  const dispatch = useDispatch();
  const isDarkMode = useColorScheme() === 'dark';

  const { isError, errorMessage } = useSelector((state: any) => state.auth);
  const { isLoggedIn, isProcessing, isReleasing, resetLogin } = useContext(AuthContext) as any;
  const handleRetry = () => {
    dispatch(resetLogin()); 
  };


  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#F2F2F2', true);
    }

    StatusBar.setBarStyle('dark-content', true);
  }, [isDarkMode]);

  // console.log('Auth Data (Redux): ', JSON.stringify(data, null, 2));
  // console.log('Auth User (Context): ', JSON.stringify(user, null, 2));
  console.log({errorMessage});

  return (
    <NavigationContainer>
      {isError ? (
        <ErrorNav message={errorMessage} onRetry={handleRetry} />
      ) : isReleasing ? (
        <ReleaseNav />
      ) : isProcessing ? (
        <ProcessNav />
      ) : isLoggedIn ? (
        <MainNav />
      ) : (
        <AuthNav />
      )}
    </NavigationContainer>
  );
};