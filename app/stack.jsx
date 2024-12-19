import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { Stack, useRouter, useSegments } from "expo-router";
import auth from "@react-native-firebase/auth";
import { createUserApi, getUser } from "./service";
import PhoneNumber from "@/components/ui/PhoneNumber";

export default StackLayout = () => {
  const { authState, onAuthenticate, onLogout, onRegister } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  const onAuthStateChanged = async (user) => {
    console.log(user);
    if (user) {
      try {
        await checkSignUpCompleted(user);
      } catch (err) {
        console.log(err);
        onLogout();
      }
    } else {
      onLogout();
    }
  };

  const checkSignUpCompleted = async (user) => {
    try {
      const d = await getUser(user?.uid);
	  const res = await d.json() 
	  console.log(res)
      switch (res?.statusCode) {
        case 404:
          await registerUser(user);
			console.log("---------------------- 404---------------")
          break;
        case 200:
			console.log("---------------------- 200---------------")

          onRegister(user?.uid);
          break;
        default:
          onAuthenticate(user?.uid);
      }
      return false;
    } catch (err) {
      console.log(err);
      return false;
    }
  };
  const registerUser = async (user) => {
    try {
      const res = await createUserApi({
        userId: user?.uid,
        phoneNo: user?.phoneNumber,
        isRegistered: false
      });
      console.log(res);
      onAuthenticate(user?.uid);
    } catch (err) {
		onLogout();
      console.log(err);
    }
  };

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber;
//   }, []);

  useEffect(() => {
    // if (authState?.registered) {
	// 	router.replace("/protected/dashboard");
    // } else if (authState?.authenticated === true) {
      router.replace("/protected/make_package/choose");
    // } else {
    //   router.replace("/signin");
    // }
  }, [authState]);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="signin" options={{ headerShown: false }} />
      <Stack.Screen name="protected" options={{ headerShown: false }} />
    </Stack>
  );
};
