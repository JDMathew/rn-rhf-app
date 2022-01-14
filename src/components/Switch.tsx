import React, { forwardRef, Ref } from 'react'

import { Switch, SwitchProps as RNSwitchProps } from 'react-native'
import { t, color } from 'react-native-tailwindcss'

interface Props extends RNSwitchProps {}

const SwitchBase = ({ value, onValueChange }: Props, forwaredRef: Ref<Switch>) => {
  return (
    <Switch
      ref={forwaredRef}
      trackColor={{ false: color.gray200, true: color.green600 }}
      thumbColor={color.gray100}
      ios_backgroundColor={color.gray800}
      onValueChange={onValueChange}
      value={value}
    />
  )
}

export default forwardRef(SwitchBase)

export { Props as SwitchProps }

const styles = {
  switch: [t.mB4, t.selfStart, t.flexRow, t.itemsCenter],
}
