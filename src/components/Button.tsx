
import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { t } from 'react-native-tailwindcss';

interface Props extends TouchableOpacityProps{
	label: string
}

export default function Button({ label, ...props }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.8} {...props} style={styles.button}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

export {Props as ButtonProps};

const styles = {
  button: [t.selfStretch, t.bgGreen600, t.itemsCenter, t.pY3, t.rounded],
  buttonLabel: [t.textWhite, t.textLg]
};