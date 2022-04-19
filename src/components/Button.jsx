import React from 'react';
import {Button as RNPButton, useTheme} from 'react-native-paper';

const Button = ({
  onPress,
  loading,
  disabled,
  title,
  mode = 'contained',
  styles,
}) => {
  const {colors} = useTheme();

  return (
    <RNPButton
      onPress={onPress}
      disabled={disabled || loading}
      mode={mode}
      color={mode === 'contained' ? colors.primary : 'white'}
      labelStyle={{
        textTransform: 'capitalize',
        fontFamily: 'Raleway-Medium',
        color: mode === 'outlined' ? colors.primary : 'white',
        fontSize: 16,
        width: '90%',
      }}
      style={[
        styles,
        {
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
          borderColor: colors.primary,
          borderWidth: mode === 'outlined' ? 2 : 0,
        },
      ]}>
      {loading ? 'Loading..' : title}
    </RNPButton>
  );
};
export default Button;
