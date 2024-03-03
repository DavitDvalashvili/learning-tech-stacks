import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">subtitle 1</Typography>
      <Typography variant="subtitle2">subtitle 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
        consequuntur odio! Magnam quo hic eaque ullam ad alias adipisci,
        voluptates porro corrupti distinctio fuga repellendus temporibus
        blanditiis enim eos non.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum magnam
        dolorum iste repellendus sint nihil quam suscipit non. Molestias,
        explicabo. Quibusdam deserunt soluta explicabo? Perferendis, tempore
        placeat? Cum, cupiditate nihil.
      </Typography>
    </div>
  );
};

export default MuiTypography;
