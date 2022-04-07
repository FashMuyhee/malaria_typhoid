import React from 'react';
import {StyleSheet, View, ImageBackground, Image} from 'react-native';
import PropTypes from 'prop-types';
import bg from '../assets/images/container_bg.png';

const Container = ({children, style}) => {
  const myStyle = {...styles.container, ...style};

  return <View style={myStyle}>{children}</View>;
};

Container.propType = {
  children: PropTypes.element.isRequired,
  style: PropTypes.object,
};

export default Container;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
    backgroundColor: '#fafafa',
    paddingHorizontal: 15,
  },
});
