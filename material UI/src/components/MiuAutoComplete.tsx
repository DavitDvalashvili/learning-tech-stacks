import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

type skill = {
  id: number;
  label: string;
};
const skills = ["html", "css", "js", "ts", "react"];

const skillOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

const MiuAutoComplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<skill | null>(null);

  console.log({ skill });

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => {
          return <TextField {...params} label="Skills" />;
        }}
        value={value}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={(_event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        freeSolo
      />

      <Autocomplete
        options={skillOptions}
        renderInput={(params) => {
          return <TextField {...params} label="Skills" />;
        }}
        value={skill}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={(_event: any, newValue: skill | null) => {
          setSkill(newValue);
        }}
      />
    </Stack>
  );
};

export default MiuAutoComplete;
