import { Box, Stack, Divider, Grid, Paper } from "@mui/material";

const MiuLayout = () => {
  return (
    <Paper sx={{ padding: "32px" }} elevation={4}>
      <Stack
        sx={{ border: "1px solid" }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          //component="span"
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            width: "100px",
            height: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          codeVolution
        </Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}
        ></Box>
      </Stack>
      <Grid container my={4} rowSpacing={2} columnSpacing={5}>
        <Grid item bgcolor="primary.light" p={2} xs={6}>
          item 1
        </Grid>
        <Grid item bgcolor="primary.light" p={2} xs={6}>
          item 12
        </Grid>
        <Grid item bgcolor="primary.light" p={2} xs={6}>
          item 3
        </Grid>
        <Grid item bgcolor="primary.light" p={2} xs={6}>
          item 4
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MiuLayout;
