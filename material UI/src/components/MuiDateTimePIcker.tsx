import { Stack } from "@mui/material";
import { DatePicker, TimePicker, DateTimePicker } from "@mui/x-date-pickers";
import { SetStateAction, useState } from "react";

const MuiDateTimePIcker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);

  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      <DatePicker
        label="Date Picker"
        value={selectedDate}
        onChange={(newValue: SetStateAction<Date | null>) => {
          setSelectedDate(newValue);
        }}
        slotProps={{ textField: { variant: "outlined" } }}
      />
      <TimePicker
        label="Time Picker"
        value={selectedTime}
        onChange={(newValue: SetStateAction<Date | null>) => {
          setSelectedTime(newValue);
        }}
        slotProps={{ textField: { variant: "outlined" } }}
      />
      <DateTimePicker
        label="Date Time Picker"
        value={selectedDateTime}
        onChange={(newValue: SetStateAction<Date | null>) => {
          setSelectedDateTime(newValue);
        }}
        slotProps={{ textField: { variant: "outlined" } }}
      />
    </Stack>
  );
};

export default MuiDateTimePIcker;
