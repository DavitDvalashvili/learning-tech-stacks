import { Stack, Rating } from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const MiuRating = () => {
  const [value, setValue] = useState<number | null>(3);
  console.log({ value });

  const handleChange = (
    _event: React.ChangeEvent<object>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };

  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorderIcon />}
        //readOnly
        //highlightSelectedOnly
      />
    </Stack>
  );
};

export default MiuRating;
