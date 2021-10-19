import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridTemplateRows: `[title] 20px [sideTitle] 20px
      [applyButton] auto [action] 50px`,
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
