import { Stack, CircularProgress, LinearProgress } from "@mui/material";

const MuiProgress = () => {
  return (
    <Stack spacing={2}>
      <CircularProgress />
      <CircularProgress color="error" />
      <CircularProgress variant="determinate" value={60} />
      <LinearProgress />
      <LinearProgress color="error" />
      <LinearProgress variant="determinate" value={60} />
    </Stack>
  );
};

export default MuiProgress;
