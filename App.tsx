import { useState } from 'react'
import { View } from 'react-native'
import { t } from 'react-native-tailwindcss'
import BillingForm from './src/form/BillingForm'

export default function App() {
  const [buildInValidation, setBuildInValidation] = useState(false)

  const toggleForm = () => {
    setBuildInValidation((prev) => !prev)
  }

  return (
    <View style={styles.container}>
      <BillingForm />
    </View>
  )
}

const styles = {
  container: [t.flex1, t.justifyCenter, t.itemsCenter, t.p6, t.bgGray200],
}
