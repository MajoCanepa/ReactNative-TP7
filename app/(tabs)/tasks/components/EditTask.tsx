import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { Link, useLocalSearchParams } from 'expo-router';

type FormData = {
  title: string;
  description: string;
  author: string;
  createdAt: string;
};

type EditTaskProps = {
  taskId: number;
};

export default function EditTask({ taskId }: EditTaskProps) {
  const { task } = useLocalSearchParams();
  const taskDetails = task ? JSON.parse(task as string) : { title: '', description: '', author: '', createdAt: ''};

  const { control, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      title: taskDetails.title,
      description: taskDetails.description,
      author: taskDetails.author,
    }
  });

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              label="Título"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
            {errors.title && <HelperText type="error">{errors.title.message}</HelperText>}
          </>
        )}
        name="title"
        rules={{
          required: 'El título es requerido',
        }}
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              label="Descripción"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
            {errors.description && <HelperText type="error">{errors.description.message}</HelperText>}
          </>
        )}
        name="description"
        rules={{
          required: 'La descripción es requerida',
        }}
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              label="Autor"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
            {errors.author && <HelperText type="error">{errors.author.message}</HelperText>}
          </>
        )}
        name="author"
        rules={{
          required: 'El autor es requerido',
        }}
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Fecha de creación"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
          />
        )}
        name="createdAt"
      />

      <Button mode="contained" style={styles.button}>
        Guardar
      </Button>
      <Link href='/tasks' style={{...styles.button, alignSelf: 'center'}}>
          Regresar a la lista de tareas
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 20,
  },
});
