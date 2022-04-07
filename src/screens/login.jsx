import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Button, TextInput} from '../components';
import {Text, useTheme, TextInput as RNPInput} from 'react-native-paper';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import auth from '@react-native-firebase/auth';
import validateEmail from '../helper/validateEmail';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  const handleSignIn = async () => {
    if (!email || !password) {
      // setMessage('All Field are required');
      // Snackbar.show({text: 'All Field are required'});

      return;
    }

    if (validateEmail(email)) {
      if (password.length >= 8) {
        setLoading(true);
        try {
          let response = await auth().signInWithEmailAndPassword(
            email,
            password,
          );
          if (response) {
            // Snackbar.show({text: 'Login Successful'});
            setLoading(false);
          }
        } catch (e) {
          console.error(e.message);
          setLoading(false);
          setMessage(e);
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
          Welcome Back
        </Text>
        <Text style={{fontSize: 12, marginTop: 10}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          secureTextEntry={passwordVisible}
          value={password}
          mode="outlined"
          onChangeText={setPassword}
          right={
            <RNPInput.Icon
              name={passwordVisible ? 'eye-off' : 'eye'}
              onPress={() => setPasswordVisible(!passwordVisible)}
            />
          }
        />
      </View>
      <Button
        onPress={() => navigation.navigate('register')}
        loading={loading}
        disabled={loading}
        title="Login"
      />
      <Text
        onPress={() => navigation.navigate('register')}
        style={{textAlign: 'center', marginTop: 20}}>
        Don't have an Account Yet Register
      </Text>
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginTitle: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: hp(8),
    fontWeight: '700',
  },
  form: {
    marginTop: 30,
    marginBottom: 40,
  },
});
