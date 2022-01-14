import React, { forwardRef, Ref } from 'react'
import { CustomElement, FieldError } from 'react-hook-form'
import { View, Text, TextInput, TextInputProps } from 'react-native'
import { t } from 'react-native-tailwindcss'
import { FormValues } from '../../App'

interface Props extends TextInputProps {
  error?: FieldError
}

const Input = ({ error, ...props }: Props, forwardedRef: Ref<TextInput>) => {
  return (
    <View style={styles.wrapper}>
      <TextInput ref={forwardedRef} style={[styles.input, error && t.borderRed500, props.style]} {...props} />
      {error && <Text style={styles.errorText}>{error.message}</Text>}
    </View>
  )
}

export default forwardRef(Input)
export { Props as InputProps }

const styles = {
  wrapper: [t.selfStretch, t.mB5],
  input: [t.h11, t.border, t.selfStretch, t.p2, t.borderGray500, t.rounded, t.textBase, t.textGray700],
  errorText: [t.mT1, t.textRed500],
}
