import React, {useState} from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import {Container, Button, TextInput} from '../components';
import {Text, TextInput as RNPInput, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import validateEmail from '../helper/validateEmail';
import auth from '@react-native-firebase/auth';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  const handleSignUp = async () => {
    if (!email || !password || !fullname) {
      // Snackbar.show({text: 'All Field are required'});
      return;
    }

    if (validateEmail(email)) {
      if (password.length >= 8) {
        setLoading(true);
        try {
          let response = await auth().createUserWithEmailAndPassword(
            email,
            password,
          );
          if (response) {
            const update = {
              displayName: fullname,
              photoURL: null,
            };

            auth()
              .currentUser.updateProfile(update)
              .then((res) => {
                console.log(res);
                // Snackbar.show({text: 'welcome'});
                setLoading(false);
              })
              .catch((e) => {
                setLoading(false);
                console.log(e.message);
              });
          }
        } catch (e) {
          console.error(e.message);
          setLoading(false);
        }
      } else {
        // Snackbar.show({
        //   text: 'Password Too Short, must be at least 8 characters ',
        // });
      }
    } else {
      // Snackbar.show({text: 'Invalid Email'});
    }
  };
  return (
    <Container>
      <View style={styles.loginTitle}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Raleway-Bold',
            color: theme.colors.primary,
          }}>
          Create an Account
        </Text>
        <Text style={{fontSize: 12, marginTop: 10}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </Text>
      </View>
      <View
        style={{
          marginTop: 30,
          marginBottom: 40,
        }}>
        <TextInput
          label="Fullname"
          onChangeText={setFullname}
          value={fullname}
        />
        <TextInput
          label="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          label="Password"
          secureTextEntry={passwordVisible}
          onChangeText={setPassword}
          value={password}
          right={
            <RNPInput.Icon
              name={passwordVisible ? 'eye-off' : 'eye'}
              onPress={() => setPasswordVisible(!passwordVisible)}
            />
          }
        />

        <Button
          onPress={() => navigation.navigate('welcome')}
          loading={loading}
          disabled={loading}
          title="Register"
        />
      </View>

      <Text
        onPress={() => navigation.navigate('login')}
        style={{textAlign: 'center', marginTop: 20}}>
        Already created an account? Login
      </Text>
    </Container>
  );
};

export default Register;

const styles = StyleSheet.create({
  loginTitle: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: hp(8),
    fontWeight: '700',
  },
});
