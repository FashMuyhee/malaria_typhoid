import React from 'react';
import {View} from 'react-native';
import {Text, RadioButton, useTheme} from 'react-native-paper';

const Input = ({question, onChangeAnswer, value}) => {
  const {colors} = useTheme();
  return (
    <View style={{height: 100, width: '100%'}}>
      <Text style={{marginBottom: 10, fontFamily: 'Raleway-Bold'}}>
        {question}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text>Yes</Text>
          <RadioButton
            value="yes"
            status={value === 'yes' ? 'checked' : 'unchecked'}
            onPress={() => onChangeAnswer('yes')}
            color={colors.primary}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginLeft: 10,
          }}>
          <Text>No</Text>
          <RadioButton
            value="no"
            color={colors.primary}
            status={value === 'no' ? 'checked' : 'unchecked'}
            onPress={() => onChangeAnswer('no')}
          />
        </View>
      </View>
    </View>
  );
};

export default Input;
