import {
  Box,
  Button,
  Drawer,
  Typography,
  WithStyles,
  withStyles,
} from "@material-ui/core";
import img from "../../images/galaxy.jpeg";
import React from "react";

import styles from "./styles/style";

function Sidebar(props: WithStyles<typeof styles>) {
  const { classes } = props;
  return (
    <Drawer variant="permanent" anchor="right">
      <Box className={classes.root}>
        <img src={img} alt="LOGO" className={classes.logo} />
        <Typography variant="body1">
          Lorem ipsum dolor sit amet,consectetur
          <br />{" "}
        </Typography>
        <span className={classes.spanUppercase}>
          adipisicing elit. Sit, quam.
        </span>
        <Button className={classes.btn} variant="contained" color="secondary">
          Login
        </Button>
      </Box>
    </Drawer>
  );
}

export default withStyles(styles)(Sidebar);
