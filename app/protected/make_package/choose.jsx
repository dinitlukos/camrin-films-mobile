import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { makePackageStyles } from "./styles";
import {
  useTheme,
  Text,
  RadioButton,
  TextInput,
  Checkbox,
  Button,
  Icon,
} from "react-native-paper";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "@/components/Divider";

export default ChoosePackage = () => {
  const theme = useTheme();
  const Styles = React.useMemo(() => makePackageStyles(theme), [theme]);

  const basicPackage = {
    items: ["Candid Photography", "Candid Videography"],
    selected: ["Taditional Photography", "Outdoor Shoot"],
  };

  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    setItems(basicPackage.items);

    setSelected(
      basicPackage.selected.map((v, i) => ({ name: v, status: false }))
    );
  }, []);

  useEffect(() => {
    // setSelected(selected)
    console.log(selected);
  }, [selected]);
  return (
    <ScrollView>
      <View style={{margin:30,padding:30, backgroundColor:'red'}}>
        <Text variant="titleMedium">Basic Package</Text>
        <Divider/>
        {items.map((v, i) => (
          <View key={i}>
            <BouncyCheckbox
              // size={25}
              style={{paddingBottom:16}}
              isChecked={true}
              disabled={true}
              fillColor={theme.colors.secondary}
              unFillColor="#FFFFFF"
              iconStyle={{color:'red'}}
              text={v}
              // iconComponent={<Icon source="check" size={16} style={{fontWeight:'bold',fontSize:"1px6"}} color={theme.colors.secondary}/>}
              textStyle={{
                textDecorationLine: "none",
              }}
            />

          </View>
        ))}
        {selected.map((v, i) => (
          <View key={100 + i}>
            <BouncyCheckbox
              // size={25}
              style={{paddingBottom:16}}
              fillColor={theme.colors.secondary}
              unFillColor="#FFFFFF"
              iconStyle={{color:'red'}}
              text={v.name}
              // iconComponent={<Icon source="check" size={16} style={{fontWeight:'bold',fontSize:"1px6"}} color={theme.colors.secondary}/>}
              textStyle={{
                textDecorationLine: "none",
              }}
              onPress={(isChecked) => {
                setSelected([]);
                var o = selected;
                o[i].status = !o[i].status;
                console.log(o);
                setSelected(o);
                // setRefresh((refresh) => !refresh);
              }}
            />

          </View>
        ))}
      </View>
    </ScrollView>
  );
};
