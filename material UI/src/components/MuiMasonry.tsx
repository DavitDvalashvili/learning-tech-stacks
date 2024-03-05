import {
  Box,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { Masonry } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const height = [
  150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
];
const MuiMasonry = () => {
  return (
    <Box sx={{ width: 500, height: 400 }}>
      <Masonry columns={4} spacing={1}>
        {height.map((height, index) => (
          <Paper
            key={index}
            sx={{
              //   display: "flex",
              //   justifyContent: "center",
              //   alignItems: "center",
              //   height,
              border: "1px solid",
            }}
          >
            <Accordion sx={{ minHeight: height }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Accordion {index + 1}</Typography>
              </AccordionSummary>
              <AccordionDetails>Content</AccordionDetails>
            </Accordion>
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
};

export default MuiMasonry;
