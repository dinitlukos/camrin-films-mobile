import React, { useState, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";
import PhoneInput from "react-native-international-phone-number";

export default PhoneNumber = (props) => {
  const theme = useTheme();
  const Styles = React.useMemo(() => createStyles(theme), [theme]);
  const { countryCode, setCountryCode, phoneNumber, setPhoneNumber, sendOtp } =
    props;

  const handleCountrySelect = (country) => {
    setPhoneCountryCode(country);
  };

  return (
    <>
      <Text variant="headlineMedium" style={Styles.txtCaption}>
        Sign In
      </Text>
      <Text variant="labelLarge" style={Styles.txtDescription}>
        We will send a One Time Password (OTP){"\n"} on this mobile number
      </Text>
      <View style={Styles.inputContainer}>
      <PhoneInput
        value={phoneNumber}
        theme={theme}
        placeholder="Phone Number"
        phoneInputStyles={{
          flagContainer: Styles.flagContainer,
        }}
        showOnly={["IN", "AE"]}
        defaultCountry="IN"
        selectedCountry={countryCode}
        onChangeSelectedCountry={(country) => setCountryCode(country)}
        onChangePhoneNumber={setPhoneNumber}
      />
      </View>
      <Button
        mode="contained"
        onPress={sendOtp}
        buttonColor={theme.colors.secondary}
        style={Styles.btnSendOtp}
      >
        Send OTP
      </Button>
    </>
  );
};

const createStyles = (theme) => {
  const styles = StyleSheet.create({
    inputContainer:{
        paddingVertical: 24,
        width: "100%",
    },
    flagContainer: {
      backgroundColor: theme.colors.primary,
    },
    txtCaption: {
      color: "#ffffff",
      paddingBottom:32
    },
    txtDescription: {
      color: "#ffffff",
      textAlign:'center'
    },
    btnSendOtp:{
        width:"100%",
        borderRadius:10
    }
  });

  return styles;
};
