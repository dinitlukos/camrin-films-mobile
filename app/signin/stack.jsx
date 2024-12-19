import { Stack } from 'expo-router';

export default SignInStack = () => {
	return (
		<Stack>
			<Stack.Screen name="index"  options={{ headerShown: false}} />
		</Stack>
	);
};