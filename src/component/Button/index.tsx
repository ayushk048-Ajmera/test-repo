import {
  Button,
  createStyles,
  withStyles,
  // makeStyles,
  // styled,
  WithStyles,
} from "@material-ui/core";
import React from "react";

interface ButtonComponentProps {}
//HOOK API

// const useStyles = makeStyles({
//   root: {
//     background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//     borderRadius: 3,
//     color: "white",
//     height: "auto",
//   },
// });

// export const ButtonComponent = (props: ButtonComponentProps) => {
//   const classes = useStyles();
//   return (
//     <Button
//       variant="contained"
//       className={classes.root}
//       color="primary"
//       disableRipple
//       disableElevation
//     >
//       ayush
//     </Button>
//   );
// };

// Styled components API

// const MyButton = styled(Button)({
//   background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//   color: "white",
// });

// export const ButtonComponent = (props: ButtonComponentProps) => {
//   return  <MyButton>Styled Component APi</MyButton>;
// };

const styles = createStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,

    color: "white",
    transition: "ease 0.5s",
    "&:hover": {
      background: "#99f",
    },
  },
});

function index(props: WithStyles<typeof styles>) {
  const { classes } = props;
  return <Button className={classes.root}>Higher-order component</Button>;
}

export default withStyles(styles)(index);
