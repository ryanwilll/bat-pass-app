import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type ButtonProps = {
  text: string;
  onPress: VoidFunction;
};

export const Button: React.FC<ButtonProps> = React.memo((props: ButtonProps): React.ReactElement => {
  const { text, onPress } = props;
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: 250,
  },
  buttonText: {
    color: '#E6AF2E',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
