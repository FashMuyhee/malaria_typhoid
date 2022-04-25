import React from 'react';
import {View} from 'react-native';
import {Text, TextInput} from 'react-native-paper';

const Input = ({question, onChangeAnswer, value, error}) => {
  return (
    <View
      style={{
        height: 80,
        width: '100%',
        marginBottom: 10,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        borderRadius: 5,
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}>
      <Text style={{fontFamily: 'Raleway-Bold', textTransform: 'capitalize'}}>
        {question}
      </Text>
      <TextInput
        value={value}
        mode="flat"
        style={{
          height: 30,
          marginTop: 5,
          backgroundColor: 'white',
          width: '100%',
        }}
        keyboardType="number-pad"
        onChangeText={onChangeAnswer}
      />
      {error && (
        <Text style={{textTransform: 'capitalize', fontSize: 10}}>{error}</Text>
      )}
    </View>
  );
};

export default Input;
