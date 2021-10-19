import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import HeaderGrid from "./HeaderGrid";

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: theme.spacing(3),
    gridArea: "header / span 12",
  },
  title: {
    gridColumn: "5/ span 4",
    gridRow: "title",
    color: "#58595b",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  menu: {
    gridColumn: "1/ span 3",
    gridRow: "menu",
    marginBottom: theme.spacing(5),
  },
  action: {
    gridColumn: "8/ 12",
    gridRow: "action",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  returnButton: {
    gridColumn: "12 / 12",
    gridRow: "menu",
    marginBottom: theme.spacing(5),
  },
}));

export default function Header(props) {
  const { children, menu, action, title, returnButton } = props;
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <div className={classes.header}>
      <HeaderGrid>
        <Typography className={classes.title} variant="h4" component="h2">
          {children}
        </Typography>
        {menu && (
          <div className={classes.menu}>
            <span> {menu}</span>
          </div>
        )}
        {title && (
          <div className={classes.title}>
            <span> {title}</span>
          </div>
        )}
        {action && (
          <div className={classes.action}>
            <span> {action}</span>
          </div>
        )}
        {returnButton && (
          <div className={classes.returnButton}>
            <span> {returnButton}</span>
          </div>
        )}
      </HeaderGrid>
    </div>
  );
}
