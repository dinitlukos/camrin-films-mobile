import { useState } from "react";
import { View } from "react-native";
import DatePicker from "react-native-date-picker";
import { TextInput, TouchableRipple } from "react-native-paper";
import moment from "moment";
import { Spacer } from "../Spacer";

export default EventDatePicker = (props) => {
  const { label, date, onConfirm } = props;
  const [open, setOpen] = useState(false);
  return (
    <View style={{ width: "100%" }}>
      <TouchableRipple
        onPress={() => setOpen(true)}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <TextInput
          right={<TextInput.Icon icon="calendar" />}
          mode="outlined"
          label={label}
          value={moment(date).format("DD MMM yyy")}
          editable={false}
        />
      </TouchableRipple>
      <DatePicker
        modal
        open={open}
        date={date}
        onCancel={() => setOpen(false)}
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
          onConfirm(date);
        }}
      />
          <Spacer height={16} />

    </View>
  );
};
