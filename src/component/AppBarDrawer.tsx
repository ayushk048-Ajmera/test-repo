import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
const AppBarDrawer = () => {
  return (
    <div>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6"></Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBarDrawer;
