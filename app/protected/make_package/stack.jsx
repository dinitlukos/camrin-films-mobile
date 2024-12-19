import { Stack } from 'expo-router';

export default ProtectedLayout = () => {
	return (
		<Stack>
			<Stack.Screen name="index"  options={{ headerShown: false }} />
			<Stack.Screen name="choose"  options={{ headerShown: false }} />
		</Stack>
	);
};