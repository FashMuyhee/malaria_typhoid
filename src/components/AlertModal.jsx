import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {FancyAlert} from 'react-native-expo-fancy-alerts';
import Feather from 'react-native-vector-icons/Feather';
import {Text} from 'react-native-paper';

const AlertModal = ({message, isError, isVisible, onClose}) => {
  return (
    <FancyAlert
      style={styles.alert}
      icon={
        <View
          style={[styles.icon, {backgroundColor: isError ? 'tomato' : 'teal'}]}>
          <Feather name={isError ? 'x' : 'check'} size={36} color="#FFFFFF" />
        </View>
      }
      onRequestClose={onClose}
      visible={isVisible}>
      <View style={styles.content}>
        <Text style={styles.contentText}>
          {isError ? 'Analysis Failed' : 'Analysis Success'}
        </Text>
        <Text style={{fontSize: 14}}>{message}</Text>
        <TouchableOpacity style={styles.btn} onPress={onClose}>
          <Text style={styles.btnText}>Close</Text>
        </TouchableOpacity>
      </View>
    </FancyAlert>
  );
};

export default AlertModal;
const styles = StyleSheet.create({
  alert: {
    backgroundColor: '#EEEEEE',
  },
  icon: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 32,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -16,
    marginBottom: 16,
  },
  contentText: {
    textAlign: 'center',
    fontFamily: 'Raleway-Bold',
    marginBottom: 10,
  },
  btn: {
    borderRadius: 32,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
    alignSelf: 'stretch',
    backgroundColor: '#4CB748',
    marginTop: 16,
    minWidth: '50%',
    paddingHorizontal: 16,
  },
  btnText: {
    color: '#FFFFFF',
  },
});
