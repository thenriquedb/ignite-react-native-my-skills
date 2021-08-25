import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export const Button = ({title = '', ...props}) => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} {...props}>
      <Text style={styles.textButton}> {title} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#896ceb',
    padding: 10,
    borderRadius: 7,
  },
  textButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
