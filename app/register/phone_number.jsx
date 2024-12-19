import React, { useState } from "react";
import { useTheme } from "react-native-paper";
import { ImageBackground, View } from "react-native";
import PhoneNumber from "../../components/ui/PhoneNumber";
import auth from "@react-native-firebase/auth";
import OTPVerification from "../../components/ui/OTPVerification";
import { phoneRegisterStyles } from "./styles";
import { images } from "../../assets/images";
import { Loader } from "@/components/Loader";

export default function PhoneRegister() {
  const theme = useTheme();
  const Styles = React.useMemo(() => phoneRegisterStyles(theme), [theme]);
  const [confirm, setConfirm] = React.useState(null);
  const [code, setCode] = React.useState(null);
  const [countryCode, setCountryCode] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const sendOtp = async () => {
    try {
      setLoading(true)
      const phNo = countryCode.callingCode + phoneNumber;
      const confirmation = await auth().signInWithPhoneNumber(phNo);
      setConfirm(confirmation);
      setLoading(false)
    } catch (error) {
      alert(error);
    }
  };

  const onVerify = async () => {
    try {
      setLoading(true)
      await confirm.confirm(code);
      console.log(code);
      setLoading(false)
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
        ) : (
          <OTPVerification code={code} setCode={setCode} onVerify={onVerify} />
        )}
      </View>
      {loading && (
        <Loader color={theme.colors.primary}/>
      )}
    </ImageBackground>
  );
}
