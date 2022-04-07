import React from 'react';
import {View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import {Container, Button} from '../components';

const Welcome = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <Container>
      <View style={{marginTop: '25%'}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            fontFamily: 'Raleway-Bold',
            color: colors.primary,
          }}>
          Welcome Jane to
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            fontFamily: 'Raleway-Bold',
            width: '70%',
            alignSelf: 'center',
            color: colors.primary,
          }}>
          Malaria-Typhoid Analysis App
        </Text>
        <Text
          style={{textAlign: 'center', marginTop: 10, color: colors.primary}}>
          Select an Option to Proceed
        </Text>
      </View>

      <View style={{marginTop: 40}}>
        <Button title="Malaria" styles={{marginBottom: 20}} />
        <Button title="Typhoid" mode="outlined" />
      </View>
    </Container>
  );
};

export default Welcome;
