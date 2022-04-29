import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 400, bgcolor: "#F3EEFF" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#a1a8dd" }} aria-label="recipe">
            EM
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Elon Musk"
        subheader="Agent level 1"
      />
      <CardMedia
        component="img"
        height="194"
        image="/profile.jpeg"
        alt="Agent profile pic"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Customer service operations special agent
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="edit profile">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="add profile pic">
          <AddReactionIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h6">Manager</Typography>
          <Typography paragraph>Julieta Noguez</Typography>
          <Typography variant="h6">Area</Typography>
          <Typography paragraph>Operations customer services</Typography>
          <Typography variant="h6">Performance</Typography>
          <Typography paragraph>4.5/5</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
