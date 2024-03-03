import { Box, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

const MiuSwitch = () => {
  const [checked, setChecked] = useState(false);

  console.log({ checked });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            size="small"
            color="success"
          />
        }
      ></FormControlLabel>
    </Box>
  );
};

export default MiuSwitch;
