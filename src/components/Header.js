import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import HeaderGrid from "./HeaderGrid";

const useStyles = makeStyles((theme) => ({
  header: {
    gridArea: "header / span 12",
    backgroundColor: (props) =>
      `${props.headerColor ? props.headerColor : "#685DC5"}`,
  },
  title: {
    marginTop: "50px",
    marginLeft: "50px",
    gridColumn: "1/ span 3",
    gridRow: "title",
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  sideTitle: {
    marginTop: "50px",
    gridColumn: "3/ span 3",
    gridRow: "title",
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  applyButton: {
    gridRow: "title",
    color: "#FFFFFF",
    gridColumn: "10/ 12",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  action: {
    marginTop: "50px",
    color: "#FFFFFF",
    gridColumn: "12/ 12",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function Header(props) {
  const {
    children,
    breadcrumbs,
    action,
    title,
    sideTitle,
    applyButton,
    headerColor,
  } = props;
  const classes = useStyles({ headerColor });
  return (
    <div className={classes.header}>
      <HeaderGrid>
        <Typography className={classes.title} variant="h4" component="h2">
          {children}
        </Typography>
        {breadcrumbs && (
          <div className={classes.breadcrumb}>
            <span> {breadcrumbs}</span>
          </div>
        )}
        {applyButton && (
          <div className={classes.applyButton}>
            <span> {applyButton}</span>
          </div>
        )}
        {title && (
          <div className={classes.title}>
            <span> {title}</span>
          </div>
        )}
        {sideTitle && (
          <div className={classes.sideTitle}>
            <span> {sideTitle}</span>
          </div>
        )}
        {action && (
          <div className={classes.action}>
            <span> {action}</span>
          </div>
        )}{" "}
      </HeaderGrid>
    </div>
  );
}
