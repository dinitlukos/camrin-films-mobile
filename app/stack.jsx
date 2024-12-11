import {useEffect} from 'react'
import { useAuth } from "@/context/AuthContext"
import { Stack, useRouter, useSegments } from 'expo-router';

export default StackLayout = () => {
	const { authState, onAuthenticate} = useAuth();
	const segments = useSegments();
	const router = useRouter();

	useEffect(() => {
		const inAuthGroup = segments[0] === 'protected';

		if (!authState?.authenticated && !inAuthGroup) {
			router.replace('/register');
		} else if (authState?.authenticated === true) {
			router.replace('/protected');
		}
	}, [authState]);

    useEffect(()=>{
// onAuthenticate()
    },[])

	return (
		<Stack>
			<Stack.Screen name="register"  options={{ headerShown: false }} />
			<Stack.Screen name="protected" options={{ headerShown: false }} />
		</Stack>
	);
};