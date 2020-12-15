import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

export default function DrawerCustom() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <>
      <Button onClick={toggleDrawer}>click</Button>
      <Drawer
        open={open}
        onClose={toggleDrawer}
        anchor="right"
        style={{ width: "300px  " }}
      >
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
