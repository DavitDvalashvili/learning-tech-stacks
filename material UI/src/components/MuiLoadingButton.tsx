import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";

const MuiLoadingButton = () => {
  return (
    <Stack spacing={2} direction="row">
      <LoadingButton variant="outlined">submit</LoadingButton>
      <LoadingButton loading variant="outlined">
        submit
      </LoadingButton>
      <LoadingButton loadingIndicator="Loading" variant="outlined">
        Fetch Data
      </LoadingButton>
      <LoadingButton loading loadingIndicator="Loading" variant="outlined">
        Fetch Data
      </LoadingButton>
      <LoadingButton
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined"
      >
        Fetch Data
      </LoadingButton>
      <LoadingButton
        loading
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined"
      >
        Fetch Data
      </LoadingButton>
    </Stack>
  );
};

export default MuiLoadingButton;
