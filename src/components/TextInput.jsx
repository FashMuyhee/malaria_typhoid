import React from 'react';
import {TextInput as RNPInput} from 'react-native-paper';

const TextInput = ({...rest}) => {
  return (
    <RNPInput
      style={{
        marginTop: 10,
        fontSize: 13,
        height: 50,
      }}
      mode="outlined"
      {...rest}
    />
  );
};

export default TextInput;
