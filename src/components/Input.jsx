import React from 'react';
import {View} from 'react-native';
import {Text, RadioButton, useTheme, TextInput} from 'react-native-paper';

const Input = ({
  question,
  onChangeAnswer,
  value,
  isText = false,
  isNumber = false,
}) => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        height: 70,
        width: '100%',
        marginBottom: 10,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        borderRadius: 5,
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}>
      <Text style={{fontFamily: 'Raleway-Bold'}}>{question}</Text>
      {isText || isNumber ? (
        <TextInput
          mode="flat"
          style={{
            height: 30,
            marginTop: 5,
            backgroundColor: 'white',
            width: '100%',
          }}
          keyboardType={
            isText ? 'default' : isNumber ? 'number-pad' : 'default'
          }
        />
      ) : (
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
      )}
    </View>
  );
};

export default Input;
