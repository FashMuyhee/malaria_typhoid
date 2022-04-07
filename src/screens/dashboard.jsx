import React, {useContext} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {
  Text,
  withTheme,
  Avatar,
  Card,
  Divider,
  Title,
} from 'react-native-paper';
import {Container, NavBar, ScrollContainer, List} from '../components';
import user from '../assets/images/user.png';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ProgressCircle from 'react-native-progress-circle';
import {UserContext} from '../context/UserContext';
import auth from '@react-native-firebase/auth';

const Dashboard = ({theme, route}) => {
  const {user: authUser} = useContext(UserContext);
  console.log(route?.params?.result);
  const analysis = route?.params?.result?.analysis;
  const data = route?.params?.result?.data;

  const logout = async () => {
    await auth().signOut();
  };

  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent={false}
        backgroundColor={theme.colors.primary}
      />
      <NavBar
        left={<Avatar.Image source={user} size={35} />}
        center={
          <Text style={{color: 'white', fontSize: 20}}>
            {authUser?.displayName}
          </Text>
        }
        right={
          <FeatherIcon
            name="log-out"
            color="white"
            size={30}
            onPress={logout}
          />
        }
      />
      <Container>
        <ScrollContainer
          style={styles.container}
          contentContainerStyle={{alignItems: 'center'}}>
          <Card style={styles.resultCard}>
            <Text>Analysis</Text>
            <View style={styles.progressBar}>
              <ProgressCircle
                percent={analysis?.accuracy_level ?? 0}
                radius={70}
                borderWidth={3}
                color={theme.colors.primary}
                shadowColor="#999"
                bgColor="#fff">
                <Text style={{fontSize: 18}}>
                  {`${analysis?.accuracy_level ?? 0}%`}
                </Text>
              </ProgressCircle>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Raleway-Bold',
                  fontWeight: '400',
                  color:
                    analysis?.predict_type === 'Normal' || undefined
                      ? theme.colors.primary
                      : 'red',
                  marginVertical: 5,
                }}>
                {analysis?.predict_type ?? ''}
              </Text>
            </View>
            <Divider style={{marginVertical: 20}} />
            <View style={styles.resultDetail}>
              <List label="Age" content={data?.age ?? ''} />
              <List label="plasma r" content={data?.plasma_r ?? ''} />
              <List label="Bs Fast" content={data?.bs_fast ?? ''} />
              <List label="plasma f (cm)" content={data?.bs_fast ?? ''} />
              <List label="bs pp" content={data?.bs_pp ?? ''} />
              <List label="hba1c" content={data?.hba1c ?? ''} />
            </View>
            <View>
              <Title>Diagnosis Tips</Title>
              {analysis?.tips?.advice.slice(0, 3).map((advice, key) => {
                return (
                  <Text style={{textAlign: 'justify'}} key={key}>
                    {advice}
                  </Text>
                );
              })}
            </View>
          </Card>
        </ScrollContainer>
      </Container>
    </>
  );
};

export default withTheme(Dashboard);
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    display: 'flex',
    marginTop: 20,
  },
  resultCard: {
    height: hp(80),
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: '95%',
  },
  progressBar: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  resultDetail: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    height: '30%',
    marginBottom: 20,
  },
  listItem: {
    flexBasis: wp(43),
  },
});
