import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppNavigationNi from './src/navigations';
import { AuthProvider } from './src/utils/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <View style={styles.container}>
        <AppNavigationNi />
      </View>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});

export default App;