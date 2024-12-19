import { StyleSheet, Dimensions } from "react-native";

export const makePackageStyles = (theme) => {
  const styles = StyleSheet.create({
    bgImage: {
      height: "100%",
      width:"100%"
      // width: Dimensions.get("window").height * 0.3,
    },
    titleContiner: {
      height: Dimensions.get("window").height * 0.35,
        alignItems: "flex-end",
        // background: "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #000000 100%)"

    },
    contentContainer: {
      padding:30,
      backgroundColor: "#fff",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    container: {
      flex: 1,
      alignItems: "center",
      padding: 30,
    },
    picker: {
      fontSize: "medium",
      borderRadius: 12,

    },
    pickerContainer: {
      borderRadius: 40,
      paddingLeft: 12,
      backgroundColor:"#F0F0F0"
    },
    packageForImg:{
      height:80,
      maxWidth:Dimensions.get("window").width/4
    }
  });

  return styles;
};
