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
            label={label}
            value={v}
            onChangeText={onChange}
          />
        )}
        name={name}
      />
       {error && <Text style={{marginTop:8, marginLeft:8, color:'red'}}>{message}</Text>}
      <Spacer height="12px"/>
    </View>
  );
};
