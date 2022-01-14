import React from 'react'
import { useController, UseControllerProps } from 'react-hook-form'

import Input, { InputProps } from '../../components/Input'
import { FormValues } from '../BillingForm'

interface Props extends UseControllerProps<FormValues>, InputProps {
  defaultValue?: string
}

const RHFInput = ({ name, control, defaultValue, rules, shouldUnregister, ...props }: Props) => {
  const {
    field: { onChange, ref, onBlur, value, ...field },
    fieldState: { invalid, isTouched, isDirty, error },
  } = useController<FormValues>({ control, name, defaultValue, rules, shouldUnregister })
  return <Input error={error} onChangeText={onChange} onBlur={onBlur} ref={ref} value={value as string} {...props} />
}

export default RHFInput
