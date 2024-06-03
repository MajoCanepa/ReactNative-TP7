import { Text } from 'react-native';
import { Stack, Link } from 'expo-router';

export default function IndexScreen() {

  const nombre = 'Martín';

  return (
    <>
      <Stack.Screen options={{ title: 'Panel de ' + nombre }} />
      <Text>Panel de administración</Text>
      <Link
        href={{
          pathname: "/panel/[id]",
          params: { id: '1' }
        }}
      >
        <Text>Perfil 1</Text>
      </Link>
      <Link href="/panel/2">
        <Text>Perfil 2</Text>
      </Link>
    </>
  );
}
