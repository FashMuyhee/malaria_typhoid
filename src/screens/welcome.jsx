import React, {useContext} from 'react';
import {Image, Pressable, View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import {Container, Button} from '../components';
import {UserContext} from '../context/UserContext';
import illustration from '../assets/images/illustration.png';
import logout from '../assets/images/logout.png';
import auth from '@react-native-firebase/auth';

const Welcome = ({navigation}) => {
  const {colors} = useTheme();
  const {user} = useContext(UserContext);

  const handleLogout = async () => {
    await auth().signOut();
  };
  return (
    <Container>
      <View
        style={{
          width: '100%',
          backgroundColor: colors.primary,
          borderRadius: 10,
          height: 150,
          marginTop: 50,
          padding: 15,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <Image
          source={illustration}
          style={{width: 160, height: 250, position: 'absolute', left: -10}}
        />
        <View style={{width: '55%', height: '80%'}}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Raleway-Bold',
              fontSize: 18,
              lineHeight: 30,
            }}>
            Hi 👋 {user?.displayName?.split(' ') [0]}, Welcome to Malaria - Typhoid Analysis
          </Text>
        </View>
      </View>
      <Text
        style={{
          textTransform: 'uppercase',
          marginTop: '20%',
          textAlign: 'center',
          fontFamily: 'Raleway-Bold',
        }}>
        Select an Option to run Test
      </Text>
      <View
        style={{
          marginTop: 40,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Button
          title="Malaria"
          styles={{width: '47%'}}
          onPress={() => navigation.navigate('run_test', {type: 'malaria'})}
        />
        <Button
          styles={{width: '47%'}}
          title="Typhoid"
          mode="outlined"
          onPress={() => navigation.navigate('run_test', {type: 'typhoid'})}
        />
      </View>
      <Pressable
        onPress={handleLogout}
        style={{
          backgroundColor: colors.background,
          borderRadius: 10,
          height: 50,
          marginTop: 30,
          padding: 15,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          width: '70%',
          borderWidth: 1,
          borderColor: colors.primary,
          alignSelf: 'center',
          position: 'absolute',
          bottom: 20,
        }}>
        <Image
          source={logout}
          style={{width: 40, height: 40, marginRight: 10}}
        />
        <Text>Logout</Text>
      </Pressable>
    </Container>
  );
};

export default Welcome;
