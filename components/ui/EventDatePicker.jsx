import { useState } from "react";
import { View } from "react-native";
import DatePicker from "react-native-date-picker";
import { TextInput, TouchableRipple ,Text} from "react-native-paper";
import moment from "moment";
import { Spacer } from "../Spacer";

export default EventDatePicker = (props) => {
  const { label, date, onConfirm } = props;
  const [open, setOpen] = useState(false);
  return (
    <View style={{ width: "100%" }}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Text variant="titleMedium" style={{flex:1, color:"#898989"}}>{label}</Text>

      <TouchableRipple
        onPress={() => setOpen(true)}
        rippleColor="#fff"
      >
        <TextInput
          right={<TextInput.Icon icon="calendar" />}
          mode="outlined"
          placeholder={label}
          value={moment(date).format("DD MMM yyy")}
          editable={false}
          style={{backgroundColor:"#F0F0F0",padding:4}}
          outlineStyle={{borderRadius:40, borderColor:"#fff"}}
        />
      </TouchableRipple>
      </View>
      <DatePicker
        modal
        mode="date"
        minimumDate={new Date()}
        open={open}
        date={date}
        onCancel={() => setOpen(false)}
        onConfirm={(date) => {
          setOpen(false);
          onConfirm(date);
        }}
      />
          <Spacer height={16} />
    </View>
  );
};
