import React, { useEffect, useState } from "react";
import { View, ImageBackground, Image,ScrollView } from "react-native";
import {
  useTheme,
  Text,
  RadioButton,
  TextInput,
  Checkbox,
  Button
} from "react-native-paper";
import { makePackageStyles } from "./styles";
import { images } from "@/assets/images";
import { Spacer } from "@/components/Spacer";
import { Picker } from "@react-native-picker/picker";
import { useForm } from "react-hook-form";
import ValidatedInput from "@/components/ui/ValidatedInput";
import EventDatePicker from "@/components/ui/EventDatePicker";
import { locations } from "@/constants/Locations";
import { Divider } from "@/components/Divider";
import { useNavigation, router } from "expo-router";

export default MakePackage = () => {
  
  const theme = useTheme();
  const Styles = React.useMemo(() => makePackageStyles(theme), [theme]);
  const [packageFor, setPackageFor] = useState("groom");
  const [wedding, setWedding] = useState(false);
  const [engagement, setEngagement] = useState(false);
  const [weddingDate, setWeddingDate] = useState(new Date());
  const [engagementDate, setEngagementDate] = useState(new Date());
  const [community, setCommunity] = useState();
  const [location, setLocation] = useState();
  const navigation = useNavigation()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      partner_name: "",
      community: "",
      location: "",
    },
  });

  useEffect(()=>{
    navigation.setOptions({headerShown: false})
  },[navigation])

  const onSubmit = (data) => {
    console.log(errors);
    console.log(data);
    router.push("/protected/make_package/choose")
  };

  return (
    <ScrollView>
      <View style={Styles.titleContiner}>
        <ImageBackground
          source={images.header}
          resizeMode="cover"
          style={[Styles.bgImage]}
        >
        </ImageBackground>
      </View>
      <View style={Styles.contentContainer}>
        <View style={Styles.container}>
          <Spacer height={24} />
          <Text
            variant="headlineMedium"
            style={{
              color: theme.colors.primary,
              fontWeight: "bold",
              fontFamily: "Poppins_300Light",
            }}
          >
            Make the package
          </Text>
          <Spacer height={18} />
          <Text>
            Please fill the following details{"\n"} to make the package
          </Text>
          <Spacer height={24} />
          <Divider/>
          <Spacer height={12} />

          <Text
            variant="titleMedium"
            style={{ color: theme.colors.primary, fontWeight: "bold" }}
          >
            Package for
          </Text>
          <Spacer height={16} />
          <RadioButton.Group
            onValueChange={(value) => setPackageFor(value)}
            value={packageFor}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  resizeMode="contain"
                  style={Styles.packageForImg}
                  source={images.groom}
                />
                <RadioButton.Item value="groom" label="Groom" />
              </View>
              <View style={{ alignItems: "center" }}>
                <Image
                  resizeMode="contain"
                  style={Styles.packageForImg}
                  source={images.bride}
                />
                <RadioButton.Item value="bride" label="Bride" />
              </View>
              <View style={{ alignItems: "center" }}>
                <Image
                  resizeMode="contain"
                  style={Styles.packageForImg}
                  source={images.us}
                />
                <RadioButton.Item value="both" label="Both" />
              </View>
            </View>
          </RadioButton.Group>
          <Spacer height={24} />
          <Divider/>
          <Spacer height={12} />
          <Text
            variant="titleMedium"
            style={{ color: theme.colors.primary, fontWeight: "bold" }}
          >
            Events & Date
          </Text>
          <Spacer height={16} />
          
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Checkbox.Item
              status={wedding ? "checked" : "unchecked"}
              label="Wedding"
              onPress={() => setWedding(!wedding)}
            />
            <Checkbox.Item
              status={engagement ? "checked" : "unchecked"}
              label="Engagement"
              onPress={() => setEngagement(!engagement)}
            />
          </View>
          <Spacer height={16} />
          {wedding && <EventDatePicker
            label="Wedding date"
            date={weddingDate}
            onConfirm={(d) => setWeddingDate(d)}
          />}
          {engagement && <EventDatePicker
            label="Engagement date"
            date={engagementDate}
            onConfirm={(d) => setEngagement(d)}
          />}
          <Divider/>
          <Spacer height={12} />
          <Text
            variant="titleMedium"
            style={{ color: theme.colors.primary, fontWeight: "bold" }}
          >
            {(engagement || wedding) && <Spacer height={24} />}
            Basic Details
          </Text>
          <Spacer height={24} />
          <View style={{ width: "100%" }}>
            <ValidatedInput
              control={control}
              error={errors.name}
              name="name"
              label="Your Name"
              rules={{ required: true, minLength: 3 }}
            />
            <ValidatedInput
              control={control}
              error={errors.email}
              name="email"
              label="Email"
              message="Invalid Email address"
              rules={{
                required: true,
                pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              }}
            />
            <ValidatedInput
              control={control}
              error={errors.partner_name}
              name="partner_name"
              label="Partner Name"
              rules={{ required: true, minLength: 3 }}
            />
            <View style={Styles.pickerContainer}>

            <Picker
              style={Styles.picker}
              selectedValue={community}
              onValueChange={(itemValue, itemIndex) => setCommunity(itemValue)}
            >
              <Picker.Item label="Christian" value="christian" />
              <Picker.Item label="Hindu" value="hindu" />
              <Picker.Item label="Muslin" value="muslim" />
            </Picker>
            </View>
            <Spacer height={12} />
            <View style={Styles.pickerContainer}>
            <Picker
              style={Styles.picker}
              selectedValue={location}
              onValueChange={(itemValue, itemIndex) => setLocation(itemValue)}
            >
              {
            locations.map((v, i) => <Picker.Item key={i} label={v} value={v} /> )
            }
            </Picker>
            </View>
            <Spacer height={24} />
            <Button
              mode="contained"
              buttonColor={theme.colors.secondary}
              onPress={handleSubmit(onSubmit)}
            >
              Create Package
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
