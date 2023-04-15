import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import { Share, Favorite, MoreVert, FavoriteBorder } from "@mui/icons-material";

const Posts = ({ profile, img }) => {
  return (
    <>
      <Card sx={{ marginBottom: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe" src={profile} />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Lorem ipsum dolor sit amet"
          subheader="September 14, 2016"
        />
        <CardMedia component="img" height="20%" image={img} alt="Paella dish" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            fuga officia doloribus tenetur, temporibus nemo officiis fugiat
            velit qui. Dolorem id atque quo voluptatem molestias repellat
            perspiciatis tempora quae distinctio! Dolores aliquid sit ipsa
            aperiam.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default Posts;
