import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, ToastAndroid} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import axios from 'axios';
import {Button, Input} from '../components';

const MalariaTest = ({navigation}) => {
  const [age, setAge] = useState('');
  const [bsFast, setBsFast] = useState('');
  const [bsPP, setBsPP] = useState('');
  const [pRandom, setPRandom] = useState('');
  const [pFast, setPFast] = useState('');
  const [hb, setHB] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!age || !bsFast || !bsPP || !pRandom || !pFast || !hb) {
      ToastAndroid.show('All field required !!', ToastAndroid.LONG);
      return false;
    }
    try {
      const raw = {
        data: {
          age: parseInt(age),
          bs_fast: parseFloat(bsFast),
          bs_pp: parseFloat(bsPP),
          plasma_r: parseFloat(pRandom),
          plasma_f: parseFloat(pFast),
          hba1c: parseInt(hb),
        },
      };
      setLoading(true);
      const res = await axios('https://diabetesapiproj.herokuapp.com/analyze', {
        method: 'post',
        data: JSON.stringify(raw),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      navigation.jumpTo('home', {result: res.data});
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.response.data);
    }
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Input question="Fever" value={age} onChangeAnswer={setAge} />
        <Button
          style={{marginTop: 40, marginBottom: 30}}
          loading={loading}
          disabled={loading}
          title="Analyze"
          onPress={handleAnalyze}
        />
      </View>
    </ScrollView>
  );
};

export default MalariaTest;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    backgroundColor: 'transparent',
  },
  registerTitle: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginTop: hp(3),
  },
  form: {
    backgroundColor: 'white',
    width: '95%',
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: 20,
    paddingBottom: 10,
    marginBottom: 10,
    padding: 20,
  },
  input: {
    backgroundColor: 'white',
    marginTop: 15,
    marginBottom: 25,
  },
  shapeBg: {
    height: '60%',
    width: '100%',
    paddingTop: 30,
    position: 'relative',
    zIndex: 12,
  },
});
