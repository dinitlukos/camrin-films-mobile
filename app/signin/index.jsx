import React, { useState, useEffect } from "react";
import { useTheme } from "react-native-paper";
import { ImageBackground, View } from "react-native";
import PhoneNumber from "@/components/ui/PhoneNumber";
import auth from "@react-native-firebase/auth";
import OTPVerification from "@/components/ui/OTPVerification";
import { signInStyles } from "./styles";
import { images } from "@/assets/images";
import { Loader } from "@/components/Loader";
import { useAuth } from "@/context/AuthContext";

export default function PhoneRegister() {
  const theme = useTheme();
  const Styles = React.useMemo(() => signInStyles(theme), [theme]);
  const [confirm, setConfirm] = React.useState(null);
  const [code, setCode] = React.useState(null);
  const [countryCode, setCountryCode] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const { authState } = useAuth();

  const sendOtp = async () => {
    try {
      setLoading(true);
      const phNo = countryCode.callingCode + phoneNumber;
      const confirmation = await auth().signInWithPhoneNumber(phNo);
      setConfirm(confirmation);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  };

  const onVerify = async () => {
    try {
      setLoading(true);
      await confirm.confirm(code);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ImageBackground
      source={images.bg}
      resizeMode="cover"
      style={[Styles.bgImage]}
    >
      <View style={Styles.container}>
        {!confirm ? (
          <PhoneNumber
            countryCode={countryCode}
            setCountryCode={setCountryCode}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            sendOtp={sendOtp}
          />
        ) : !authState?.authenticated ? (
          <OTPVerification code={code} setCode={setCode} onVerify={onVerify} />
        ) : (
          <View />
        )}
      </View>
      {loading && <Loader color={theme.colors.primary} />}
    </ImageBackground>
  );
}
