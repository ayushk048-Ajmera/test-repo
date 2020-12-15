import {
  Card,
  CardContent,
  CardMedia,
  createStyles,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import React from "react";

import CardCustomProps from "../interfaces/CardCustomProps";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 400,
    },
    media: { height: 150 },
  })
);

const CardCustom: React.FC<CardCustomProps> = ({ title, image, desc }) => {
  const classes = useStyles();
  return (
    <>
      <Card raised={false} className={classes.root}>
        {image && (
          <CardMedia
            className={classes.media}
            src="image"
            component="img"
            image={image}
          />
        )}
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {desc}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CardCustom;
