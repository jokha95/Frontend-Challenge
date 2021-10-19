import React, { useRef } from "react";
import GridWrapper from "../components/GridWrapper";
import Header from "../components/Header";
import { usePath } from "hookrouter";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FullWidthWrapper from "../components/FullWidthWrap";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import BrushIcon from "@material-ui/icons/Brush";
import BuildIcon from "@material-ui/icons/Build";
import WorkIcon from "@material-ui/icons/Work";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { pure } from "recompose";
import Button from "@material-ui/core/Button";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import Trainings from "./Trainings";
import Projects from "./Projects";
import Education from "./Education";
import Skills from "./Skills";
import Workshops from "./Workshops";
import SideMenu from "../components/SideMenu";
import MenuWrapper from "../components/MenuWrapper";
function CV() {
  const [value, setValue] = React.useState(0);
  const path = usePath();
  const componentRef = useRef();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Router>
      <Switch>
        <GridWrapper headerHeight="190px">
          <Header
            title={<p>Welcome to my Online CV</p>}
            action={
              <Paper square>
                <Tabs
                  value={value}
                  indicatorColor="primary"
                  textColor="primary"
                  onChange={handleChange}
                  aria-label="disabled tabs example"
                >
                  <Tab
                    icon={<CastForEducationIcon />}
                    component={Link}
                    to={`/education`}
                    label="Education"
                  ></Tab>
                  <Tab
                    icon={<BrushIcon />}
                    component={Link}
                    to={`/skills`}
                    label="Skills"
                  />
                  <Tab
                    icon={<BorderColorIcon />}
                    component={Link}
                    to={`/trainings`}
                    label="Trainings"
                  />
                  <Tab
                    icon={<BuildIcon />}
                    component={Link}
                    to={`/projects`}
                    label="Projects"
                  />
                  <Tab
                    icon={<WorkIcon />}
                    component={Link}
                    to={`/workshops`}
                    label="Workshops"
                  />
                </Tabs>
              </Paper>
            }
            menu={
              <Button
                variant="contained"
                color="primary"
                href="#contained-buttons"
              >
                menu
              </Button>
            }
            returnButton={
              <Button
                variant="contained"
                color="primary"
                endIcon={<KeyboardReturnIcon />}
              >
                return
              </Button>
            }
          ></Header>
          <MenuWrapper>
            <SideMenu />
          </MenuWrapper>

          <FullWidthWrapper>
            <Route exact path="/education" component={Education} />
            <Route path="/skills" component={Skills} />
            <Route path="/trainings" component={Trainings} />
            <Route path="/projects" component={Projects} />
            <Route path="/workshops" component={Workshops} />
          </FullWidthWrapper>
        </GridWrapper>
      </Switch>
    </Router>
  );
}
export default pure(CV);
