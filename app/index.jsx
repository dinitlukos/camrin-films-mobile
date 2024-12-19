import { images } from "@/assets/images"
import { Dimensions, Image, ImageBackground, View } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { Text } from "react-native-paper";

export default Root = () => {
    return(<View style={{flex:1}}>
        <ImageBackground
          source={images.rootBg}
          resizeMode="cover"
          style={{width:"100%", height:"100%"}}
        >
            <LinearGradient colors={['rgba(132, 16, 66, .9)','rgba(205, 51, 57, .9)']} >
            <View style={{width:"100%", height:"100%", alignItems:'center', justifyContent:'center'}}>

                <Image source={images.logo} resizeMode="contain" style={{width:Dimensions.get("window").width/3, }}></Image>
            </View>

            </LinearGradient>
        </ImageBackground>
    </View>)
}