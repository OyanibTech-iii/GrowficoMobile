import React from 'react';
import { Dimensions, Text, TouchableOpacity, View, ActivityIndicator, StyleProp, ViewStyle, TextStyle } from 'react-native';

interface CustomButtonProps {
  containerStyle?: StyleProp<ViewStyle>;
  label: string;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  loading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ 
  containerStyle, 
  label, 
  textStyle, 
  onPress, 
  loading = false 
}) => {
  const { width } = Dimensions.get('window');

  return (
    <View style={containerStyle}>
      <TouchableOpacity onPress={loading ? undefined : onPress} disabled={loading}>
        <View style={{ padding: width * 0.014, borderRadius: 10, backgroundColor: '#16a34a' }}>
          {loading ? (
            <ActivityIndicator color="#ffffff" size="small" />
          ) : (
            <Text style={textStyle}>{label}</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;