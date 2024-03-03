import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

const MiuCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          width="240px"
          height="240px"
          image="https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg"
          alt="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            react
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus,
            quasi! Ipsa accusamus atque quibusdam eligendi explicabo, mollitia
            quia rem animi. Assumenda officiis hic debitis possimus laudantium
            eum facere temporibus tempore.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">share</Button>
          <Button size="small">Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MiuCard;
