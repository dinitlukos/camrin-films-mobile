import { Stack } from 'expo-router';

export default RegStackLayout = () => {
	return (
		<Stack>
			<Stack.Screen name="index"  options={{ headerShown: false }} />
			<Stack.Screen name="phone_number" options={{ headerShown: false }} />
			<Stack.Screen name="package" options={{ headerShown: false }} />
		</Stack>
	);
};