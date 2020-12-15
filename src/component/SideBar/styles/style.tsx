import { createStyles, styled } from "@material-ui/core";

const Styles = createStyles({
  root: {
    width: "300px",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 24px",
  },
  logo: {
    margin: " 25px auto",
    width: " 80px",
  },
  typo: {
    textAlign: "center",
    wordWrap: "break-word",
  },
  spanUppercase: {
    textAlign: "center",

    textTransform: "uppercase",
  },
  btn: {
    marginTop: "25px",
  },
});
export default Styles;
