import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import PropTypes from 'prop-types';

const ScrollContainer = (props) => {
  const {children, style} = props;
  const myStyle = {...styles.container, ...style};

  return (
    <ScrollView style={myStyle} {...props}>
      {children}
    </ScrollView>
  );
};

ScrollContainer.propTypes = {
  children: PropTypes.element.isRequired,
  style: PropTypes.object,
};

export default ScrollContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    width: '100%',
    paddingBottom: 20,
    paddingTop: 20,
  },
});
