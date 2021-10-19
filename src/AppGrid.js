import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridTemplateRows: (props) =>
      `[header] ${
        props.headerHeight ? props.headerHeight : "128px"
      } [body] auto`,
    gridColumnGap: theme.spacing(5),
    //  gridRowGap: theme.spacing(5),
  },
}));

export default function GridWrapper({ headerHeight, children }) {
  const classes = useStyles({ headerHeight });

  return <div className={classes.wrapper}>{children}</div>;
}
