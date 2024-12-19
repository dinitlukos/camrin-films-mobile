import { View } from "react-native";
import { Controller } from "react-hook-form";
import {TextInput, Text} from 'react-native-paper'
import { Spacer } from "../Spacer";

export default ValidatedInput = (props) => {
  const { control, name, label, rules, error, message ="This field is required." } = props;
  return (
    <View>
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, v } }) => (
          <TextInput
            mode="outlined"
            error={error}
            placeholder={label}
            value={v}
            onChangeText={onChange}
            style={{backgroundColor:"#F0F0F0",padding:2}}
            outlineStyle={{borderRadius:40, borderColor:"#fff"}}
          />
        )}
        name={name}
      />
       {error && <Text style={{marginTop:8, marginLeft:8, color:'red'}}>{message}</Text>}
      <Spacer height={12}/>
    </View>
  );
};
