import React from 'react'
import { useController, UseControllerProps } from 'react-hook-form'

import SwitchBase, { SwitchProps } from '../../components/Switch'
import { FormValues } from '../BillingForm'

interface Props extends UseControllerProps<FormValues>, SwitchProps {}

const RHFSwitch = ({ name, control, defaultValue, rules, shouldUnregister, ...props }: Props) => {
  const {
    field: { onChange, ref, value, ...field },
    fieldState: { invalid, isTouched, isDirty, error },
  } = useController<FormValues>({ control, name, defaultValue, rules, shouldUnregister })
  return <SwitchBase value={value as boolean} onValueChange={onChange} ref={ref} {...props} />
}

export default RHFSwitch
