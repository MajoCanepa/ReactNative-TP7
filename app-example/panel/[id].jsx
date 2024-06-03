import { Text } from 'react-native';
import {
    useLocalSearchParams,
    Stack
} from 'expo-router';

export default function IDScreen() {
    const { id } = useLocalSearchParams();

    // Buscar el id en una lista de usuarios

    return (
        <>
            <Stack.Screen options={{ title: 'Usuario ' + id }} />
            <Text>Vista de ID</Text>
        </>
    );
}
