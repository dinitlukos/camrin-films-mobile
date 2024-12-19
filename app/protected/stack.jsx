import { Stack } from 'expo-router';

export default ProtectedLayout = () => {
	return (
		<Stack>
			<Stack.Screen name="dashboard"  options={{ headerShown: false }} />
			<Stack.Screen name="make_package"  options={{ headerShown: false }} />
		</Stack>
	);
};