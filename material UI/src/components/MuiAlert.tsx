import { Stack, Alert, AlertTitle, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">this is an error alert</Alert>
      <Alert severity="warning">this is an warning alert</Alert>
      <Alert severity="info">this is an info alert</Alert>
      <Alert severity="success">this is an success alert</Alert>

      <Alert variant="outlined" severity="error">
        this is an error alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        this is an warning alert
      </Alert>
      <Alert variant="outlined" severity="info">
        this is an info alert
      </Alert>
      <Alert variant="outlined" severity="success">
        this is an success alert
      </Alert>

      <Alert
        variant="filled"
        severity="error"
        onClose={() => alert("Close alert")}
      >
        <AlertTitle>Error</AlertTitle>
        this is an error alert
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        this is an warning alert
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>Info</AlertTitle>
        this is an info alert
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        icon={<CheckIcon fontSize="inherit" />}
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        <AlertTitle>Success</AlertTitle>
        this is an success alert
      </Alert>
    </Stack>
  );
};

export default MuiAlert;
