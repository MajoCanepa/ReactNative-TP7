import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Button, HelperText, TextInput, Text } from 'react-native-paper'
import { Link, Stack, router } from 'expo-router'

type FormData = {
  username: string
  email: string
  password: string
  confirmPassword: string
}

export default function RegistroForm() {
  const [visible, setVisible] = React.useState(false)
  const { handleSubmit, reset, formState: { errors }, control, getValues } = useForm<FormData>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  })
  const onSubmit = (data: FormData) => {
    // alert(JSON.stringify(data))
    reset()
    router.replace('auth')
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown:false }} />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              placeholder="Nombre y Apellido"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              defaultValue={value}
            />
            {errors.username && <HelperText type="error">{errors.username.message}</HelperText>}
          </>
        )}
        name="username"
        rules={{
          required: 'El nombre de usuario es requerido',
          minLength: {
            value: 15,
            message: 'El nombre de usuario debe tener al menos 15 caracteres'
          }
        }}
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              defaultValue={value}
            />
            {errors.email && <HelperText type="error">{errors.email.message}</HelperText>}
          </>
        )}
        name="email"
        rules={{
          required: 'El email es requerido',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Email inválido'
          }
        }}
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              placeholder="Contraseña"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              defaultValue={value}
              secureTextEntry={!visible}
            />
            {errors.password && <HelperText type="error">{errors.password.message}</HelperText>}
          </>
        )}
        name="password"
        rules={{
          required: 'La contraseña es requerida',
          minLength: {
            value: 8,
            message: 'La contraseña debe tener al menos 8 caracteres'
          }
        }}
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              placeholder="Confirmar contraseña"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              defaultValue={value}
              secureTextEntry={!visible}
            />     
          </>
        )}
        name="confirmPassword"
        rules={{
          required: 'La confirmación de contraseña es requerida',
          validate: value => value === getValues('password') || 'Las contraseñas no coinciden'
        }}
      />
      {errors.confirmPassword && <HelperText type="error">{errors.confirmPassword.message}</HelperText>}
      <Button mode="contained" onPress={handleSubmit(onSubmit)}>Registrarse</Button>
      <Text>¿Ya tienes cuenta? <Link href='auth'>Inicia Sesión</Link></Text>
</View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
})