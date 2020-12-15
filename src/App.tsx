import {
  Typography,
  Box,
  Container,
  CardContent,
  Card,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
  FormLabel,
  Input,
  TextField,
  createStyles,
  WithStyles,
  withStyles,
  Paper,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

import { Person, PersonInterface } from "./util/dataPersons";
import {
  cityInterface,
  dataCity,
  areaInterface,
  dataArea,
} from "./util/dataAddress";

// import logo from "./images/royal.svg";

const styles = createStyles({
  textF: {
    margin: "2rem",
  },
});

function App(props: WithStyles<typeof styles>) {
  const [name, setName] = useState<string>("");
  const { classes } = props;
  return (
    <>
      <Paper elevation={1}>
        <FormControl className={classes.textF}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormHelperText>enter your name</FormHelperText>
        </FormControl>

        <TextField
          className={classes.textF}
          color="secondary"
          label="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
          helperText="your name"
        />
      </Paper>
    </>
  );
}

export default withStyles(styles)(App);

// const classes = useStyles();
// const useStyles = makeStyles({
//   root: { height: "100vh", width: "300px", margin: " 0 24px" },
//   logo: { margin: "25px auto", width: "80px", height: "80px" },
// });
// {/* <Drawer variant="permanent" anchor="right">
//   <Box className={classes.root}>
//     <Avatar src={galaxy} className={classes.logo} />
//     {data.map((data) => (
//       <AutoCompleteCustom
//         key={data.id}
//         id={data.id}
//         variant={data.variant}
//         label={data.label}
//         options={data.options}
//       />
//     ))}
//   </Box>
// </Drawer> */}
// {/* <Button />
// <AdaptingHook /> */}
// {/* <SideBar /> */}
// <Drawer />
