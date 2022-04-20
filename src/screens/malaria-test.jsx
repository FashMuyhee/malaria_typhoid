import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, ToastAndroid} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import axios from 'axios';
import {Button, Input} from '../components';

const MalariaTest = ({navigation}) => {
  const [fever, setFever] = useState('');
  const [headache, setHeadAche] = useState('');
  const [bodyPain, setBodyPain] = useState('');
  const [soreThroat, setSoreThroat] = useState('');

  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!fever || !bsFast || !bsPP || !pRandom || !pFast || !hb) {
      ToastAndroid.show('All field required !!', ToastAndroid.LONG);
      return false;
    }
    try {
      const raw = {};
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
        <Input
          question="Residence"
          value={fever}
          onChangeAnswer={setFever}
          isText
        />
        <Input
          question="Number of days"
          value={headache}
          onChangeAnswer={setHeadAche}
          isText
        />
        <Input
          question="Date of Fever"
          value={soreThroat}
          onChangeAnswer={setSoreThroat}
          isText
        />
        <Input
          question="Current Temperature"
          value={bodyPain}
          onChangeAnswer={setBodyPain}
          isNumber
        />
        <Input
          question="White Blood Cell"
          value={bodyPain}
          onChangeAnswer={setBodyPain}
          isNumber
        />
        <Input
          question="Severe Headache ?"
          value={bodyPain}
          onChangeAnswer={setBodyPain}
        />
        <Input
          question="Pain behind eyes ?"
          value={bodyPain}
          onChangeAnswer={setBodyPain}
        />
        <Input
          question="Joint muscle aches?"
          value={bodyPain}
          onChangeAnswer={setBodyPain}
        />
        <Input
          question="Metallic taste in the mouth ?"
          value={bodyPain}
          onChangeAnswer={setBodyPain}
        />
        <Input
          question="Appetite loss ?"
          value={bodyPain}
          onChangeAnswer={setBodyPain}
        />
        <Input
          question="Abdominal pain ?"
          value={bodyPain}
          onChangeAnswer={setBodyPain}
        />
        <Input
          question="Nausea vomiting ?"
          value={bodyPain}
          onChangeAnswer={setBodyPain}
        />
        <Input
          question="Diarrhea ?"
          value={bodyPain}
          onChangeAnswer={setBodyPain}
        />
        <Input
          question="Hemoglobin Count ?"
          value={bodyPain}
          onChangeAnswer={setBodyPain}
          isNumber
        />
        <Input
          question="Hematocrit ?"
          value={bodyPain}
          onChangeAnswer={setBodyPain}
          isNumber
        />
        <Input
          question="Platelet  Count ?"
          value={bodyPain}
          onChangeAnswer={setBodyPain}
          isNumber
        />
        <Button
          style={{marginTop: 40, marginBottom: 30}}
          loading={loading}
          disabled={loading}
          title="Analyze"
          // onPress={handleAnalyze}
        />
      </View>
    </ScrollView>
  );
};

export default MalariaTest;

const styles = StyleSheet.create({
  form: {
    width: '100%',
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: 20,
    paddingBottom: 10,
    marginBottom: 10,
    padding: 10,
  },
});
