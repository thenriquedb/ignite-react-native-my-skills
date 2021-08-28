import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

import {useTheme} from '../hooks/useTheme';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export const Button = ({title = '', ...rest}: ButtonProps) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: colors.primary}]}
      activeOpacity={0.7}
      {...rest}>
      <Text style={styles.textButton}> {title} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    // : '#896ceb',
    padding: 10,
    borderRadius: 7,
  },
  textButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
