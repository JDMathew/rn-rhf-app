import { useEffect } from 'react'

import { Text, View, Alert } from 'react-native'
import { t, color } from 'react-native-tailwindcss'
import { useForm, Controller } from 'react-hook-form'

import RHF from './components'
import Button from '../components/Button'

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export type FormValues = {
  FirstName: string
  LastName: string
  Email: string
  BillingName: string
  BillingEmail: string
  isBillingDifferent: boolean
}

const onSubmit = (data) => Alert.alert(JSON.stringify(data))

const BillingForm = () => {
  const { handleSubmit, control, setValue, watch } = useForm<FormValues>()

  const isBillingDifferent = watch('isBillingDifferent')

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
        const { name, email } = await response.json()
        setValue('FirstName', name)
        setValue('Email', email)
      } catch (error) {}
    }

    fetchUser()
  }, [])

  return (
    <>
      <RHF.Input
        placeholder='First Name'
        name='FirstName'
        control={control}
        rules={{
          required: { value: true, message: 'Name is required' },
        }}
      />
      <RHF.Input placeholder='Last Name' name='LastName' control={control} />
      <RHF.Input
        placeholder='Email'
        name='Email'
        control={control}
        rules={{
          required: { value: true, message: 'Email is required' },
          pattern: {
            value: EMAIL_REGEX,
            message: 'Not a valid email',
          },
        }}
      />
      <View style={styles.switch}>
        <Text style={styles.switchText}>Billing different</Text>
        <RHF.Switch name={'isBillingDifferent'} control={control} />
      </View>
      {isBillingDifferent && (
        <>
          <RHF.Input
            placeholder='Billing name'
            name={'BillingName'}
            control={control}
            rules={{
              required: { value: true, message: 'Billing name is required' },
            }}
          />
          <RHF.Input
            placeholder='Billing email'
            name={'BillingEmail'}
            control={control}
            rules={{
              required: { value: true, message: 'Billing Email is required' },
            }}
          />
        </>
      )}
      <Button label='Submit' onPress={handleSubmit(onSubmit)} />
    </>
  )
}

export default BillingForm

const styles = {
  switchText: [t.textBase, t.mR3, t.textGray800],
  switch: [t.mB4, t.selfStart, t.flexRow, t.itemsCenter],
}
