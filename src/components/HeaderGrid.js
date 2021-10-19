import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridTemplateRows: `[menu] 20px
       [title] 120px [action] 50px`,
    gridColumnGap: theme.spacing(5),
    padding: "0",
    margin: "0",
  },
}));

export default function HeaderGrid({ children }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  return <div className={classes.wrapper}> {children}</div>;
}
