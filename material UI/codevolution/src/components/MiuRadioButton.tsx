import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";

const MiuRadioButton = () => {
  const [value, setValue] = useState("");

  console.log(value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Box>
      <FormControl error>
        <FormLabel id="job-experience-group">Years of experience</FormLabel>
      </FormControl>
      <RadioGroup
        className="job-experience-group"
        aria-labelledby="job-experience-group"
        value={value}
        onChange={handleChange}
        row
      >
        <FormControlLabel
          control={<Radio size="small" color="secondary" />}
          label="0-2"
          value="0-2"
        />
        <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
        <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
      </RadioGroup>
      <FormHelperText>invalid selection</FormHelperText>
    </Box>
  );
};

export default MiuRadioButton;
