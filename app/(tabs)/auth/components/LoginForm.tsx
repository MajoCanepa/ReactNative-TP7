import { View, StyleSheet} from 'react-native'
import React, {useState} from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Button, HelperText, TextInput, Text } from 'react-native-paper'
import { Link, router } from 'expo-router'


type FormData = {
  email: string
  password: string
}
export default function LoginForm() {

  const [visible, setVisible ]= useState(false)
  const {handleSubmit, reset, formState: { errors }, control } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: ''
    }
  })
  
  const onSubmit = (data: FormData) => {
    reset()
    router.replace('home')
  };

  return (
    <View style={styles.container} >
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
            right={<TextInput.Icon icon={visible ? 'eye-off' : 'eye'} onPress={() => { setVisible(!visible) }} />}
          />
          {errors.password && <HelperText type="error">{errors.password.message}</HelperText>}
        </>
      )}
      name="password"
      rules={{
        required: 'La contraseña es requerida',
        minLength: {
          value: 5,
          message: 'La contraseña debe tener al menos 5 carácteres'
        },
        pattern: {
          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          message: 'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un símbolo'
        }
      }}
    />

    <Button onPress={handleSubmit(onSubmit)} mode="contained">Iniciar Sesión</Button>
    <Text>No tienes una cuenta? <Link href="auth/components/RegistroForm">Registrate!</Link></Text>
  </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    width: '100%',
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 24,
   
  },
  error: {
    color: 'red',
  },
})