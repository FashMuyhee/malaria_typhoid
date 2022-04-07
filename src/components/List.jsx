import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import PropTypes from 'prop-types';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const List = ({label, content}) => (
  <View style={styles.listWrapper}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.content}>{content}</Text>
  </View>
);

List.propTypes = {
  label: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default List;

const styles = StyleSheet.create({
  listWrapper: {
    width: wp(37),
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    paddingLeft:5
  },
  label: {
    color: '#0A1933',
    marginRight: 10,
    textTransform: 'uppercase',
    fontWeight: '400',
    fontFamily: 'Raleway-Bold',
  },
});
