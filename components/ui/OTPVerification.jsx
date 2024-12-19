import { Animated, StyleSheet, View, Platform } from "react-native";
import React from "react";
import { Text, Button, useTheme } from "react-native-paper";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const CELL_SIZE = 70;
const CELL_BORDER_RADIUS = 8;
const DEFAULT_CELL_BG_COLOR = "#fff";
const NOT_EMPTY_CELL_BG_COLOR = "#fff";
const ACTIVE_CELL_BG_COLOR = "#f7fafe";


export default OTPVerification = (p) => {
  const { code, setCode, onVerify } = p;
  const theme = useTheme();
  
  const { Value, Text: AnimatedText } = Animated;
  
  const CELL_COUNT = 6;
  
  const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
  const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
  const animateCell = ({ hasValue, index, isFocused }) => {
    Animated.parallel([
      Animated.timing(animationsColor[index], {
        useNativeDriver: false,
        toValue: isFocused ? 1 : 0,
        duration: 250,
      }),
      Animated.spring(animationsScale[index], {
        useNativeDriver: false,
        toValue: hasValue ? 0 : 1,
        duration: hasValue ? 300 : 250,
      }),
    ]).start();
  };




  const ref = useBlurOnFulfill({ code, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    code,
    setValue:setCode
  });

  const renderCell = ({ index, symbol, isFocused }) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          })
        : animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          }),
      borderRadius: animationsScale[index].interpolate({
        inputRange: [0, 1],
        outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
      }),
      transform: [
        {
          scale: animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.2, 1],
          }),
        },
      ],
    };

    setTimeout(() => {
      animateCell({ hasValue, index, isFocused });
    }, 0);

    return (
      <AnimatedText
        key={index}
        style={[styles.cell, animatedCellStyle]}
        onLayout={getCellOnLayoutHandler(index)}
      >
        {symbol || (isFocused ? <Cursor /> : null)}
      </AnimatedText>
    );
  };

  return (
    <View>
      <Text style={styles.txtTitle} variant="headlineMedium">OTP Verification</Text>
      <Text style={styles.txtDescription} variant="labelLarge" >
        Please enter the verification code{"\n"}
        we send to your phone number
      </Text>

      <CodeField
        ref={ref}
        {...props}
        value={code}
        onChangeText={setCode}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={renderCell}
      />
      <View style={styles.nextButton}>
        <Button mode="contained"  buttonColor={theme.colors.secondary} style={styles.btnVerify} onPress={onVerify}>
          Verify
        </Button>
      </View>
      <View style={styles.contNotRecieved}>
        <Text style={styles.txtNotRecieved}>OTP not recieved yet? </Text>
        <Button mode="text" textColor="blue">Resend</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  codeFieldRoot: {
    height: CELL_SIZE,
    marginTop: 30,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  cell: {
    marginHorizontal: 8,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 5,
    ...Platform.select({ web: { lineHeight: 65 } }),
    fontSize: 30,
    textAlign: "center",
    borderRadius: CELL_BORDER_RADIUS,
    color: "#fff",
    backgroundColor: "#fff",

    // IOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    // Android
    elevation: 3,
  },

  // =======================

  txtTitle: {
    color: "#ffffff",
      paddingBottom:32,
      textAlign:"center"
  },
  txtDescription: {
    color: "#ffffff",
      textAlign:'center'
  },
  txtNotRecieved: {
    color: "#ffffff"
  },
  btnVerify: {
    marginVertical:24,
    borderRadius:10
  },
  contNotRecieved:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  }
});
