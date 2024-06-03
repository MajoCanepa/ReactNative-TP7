import { Text, Button } from 'react-native';
import { Link } from 'expo-router';

export default function IndexScreen() {
  return (
    <>
      <Text>Vista de iniciar sesión</Text>
      <Link href="panel">
        <Text>Texto ingresar</Text>
      </Link>
      <Button
        title="Ingresar"
      />
    </>
  );
}
