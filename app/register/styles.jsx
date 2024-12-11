import { Picker } from "@react-native-picker/picker";
import { StyleSheet, Dimensions } from "react-native";

export const phoneRegisterStyles = (theme) => {
  const styles = StyleSheet.create({
    bgImage: {
      flex: 1,
      justifyContent: "center",
      height: "100%",
      width: "100%",
    },
    container: {
      padding: 32,
      alignItems: "center",
      // padding: 32,
      color: "#ffffff",
    },
  });

  return styles;
};

export const packageStyles = (theme) => {
  const styles = StyleSheet.create({
    bgImage: {
      height: "100%",
      width:"100%"
      // width: Dimensions.get("window").height * 0.3,
    },
    titleContiner: {
      height: Dimensions.get("window").height * 0.3,
        alignItems: "flex-end",
        // background: "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #000000 100%)"

    },
    contentContainer: {
      marginTop: -20,
      borderRadius: "20px",
      backgroundColor: "#fff",
      borderTopLeftRadius: "20px",
      borderTopRightRadius: "20px",
    },
    container: {
      flex: 1,
      alignItems: "center",
      padding: 30,
    },
    picker: {
      borderRadius: "6px",
      height: "48px",
      fontSize: "medium",
      paddingLeft: "10px",
      marginTop: 6,
    },
    packageForImg:{
      height:80,
      maxWidth:Dimensions.get("window").width/4
    }
  });

  return styles;
};
