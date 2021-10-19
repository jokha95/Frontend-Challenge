// import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
import GridWrapper from "./components/GridWrapper";
import Header from "./components/Header";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { green } from "@mui/material/colors";
import Pattern from "./Pattern.png";
import Logo from "./Logo.png";
import photo from "./photo.png";
import Icon from "./Icon.png";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import image from "./Image.png";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: green[500],
  height: "160px",
  width: "160px",
  borderRadius: "50%",
  marginTop: "150px",
  fontWeight: "100px",
  fontSize: "22px",
  lineHeight: "26px",
}));

function App() {
  const [info, setInfo] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://stage.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab"
      );
      if (data !== "") {
        const arrayObj = data;
        setInfo(arrayObj);
        console.log(data);
      }
    };

    fetchData();
  }, []);
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div style={{ position: "absolute" }}>
      <GridWrapper headerHeight="100px">
        <Header
          title={<h1>HARBOUR SPACE</h1>}
          sideTitle={<h3>/INTERACTION DESIGN</h3>}
          action={
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          }
          applyButton={<ColorButton variant="contained">APPLY NOW</ColorButton>}
        ></Header>{" "}
        <div
          style={{
            //   gridColumn: "span 4",
            backgroundImage: `url(${Icon})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top  62.98px  left 421.98px  ",
            height: "600px",
            width: "660px",
            marginRight: "0px",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            style={{
              marginLeft: "200px",
              marginTop: "161px",
              width: "440px",
              font: "Apercu Pro",
              color: "#685DC5",
              fontWeight: "500px",
              fontSize: "48px",
              letterSpacing: "-0.6px",
              lineHeight: "56px",
            }}
          >
            Interaction Design Apprenticeship
          </Typography>
          <Typography
            style={{
              marginLeft: "200px",
              marginTop: "48px",
              width: "440px",
              font: "Apercu Pro",
              color: "#535353",
              fontWeight: "500px",
              fontSize: "22px",
              letterSpacing: "-0.33 px",
              lineHeight: "32px",
            }}
          >
            <b>A fully funded work-study program to launch your tech career</b>{" "}
          </Typography>
          <Typography
            style={{
              marginLeft: "200px",
              marginTop: "48px",
              width: "440px",
              font: "Apercu Pro",
              color: "#535353",
              fontWeight: "300px",
              fontSize: "22px",
              letterSpacing: "-0.33 px",
              lineHeight: "32px",
            }}
          >
            Harbour.Space has partnered with SCG to empower driven talent and
            eliminate the barriers to accessing exceptional education and career
            opportunities through a Masters Fellowship.
          </Typography>
          <Typography
            style={{
              marginLeft: "200px",
              marginTop: "40px",
              width: "440px",
              font: "Apercu Pro",
              color: "#535353",
              fontWeight: "300px",
              fontSize: "22px",
              letterSpacing: "-0.33 px",
              lineHeight: "32px",
            }}
          >
            <b> Position: </b>Marketing Performance
          </Typography>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#685DC5",
              borderRadius: "29px",
              height: "58px",
              width: "166px",
              marginLeft: "200px",
              marginTop: "48px",
            }}
          >
            APPLY NOW
          </Button>
        </div>
        <div
          style={{
            marginLeft: "0px",
            //gridColumn: "5/ span 8",
            backgroundImage: `url(${Pattern})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top  513px  right 0px",
            backgroundSize: "560px 606px",
            height: "800px",
            // width: "799px",
          }}
        >
          <div style={{ display: "flex" }}>
            <img
              alt=""
              src={Logo}
              style={{
                marginLeft: "113.8px",
                // marginRight: "14.42%",
                width: "80px",
                height: "80px",
                marginTop: "161px",
                //  display: "flex",
                justifyContent: "flex-start",
              }}
            />
            <div style={{ justifyContent: "center" }}>
              <Typography
                style={{
                  //  marginLeft: "200px",
                  marginTop: "169px",
                  marginLeft: "40px",
                  font: "Apercu Pro",
                  fontStyle: "normal",
                  opacity: "0.5",
                  color: "#000000",
                  fontWeight: "300px",
                  fontSize: "18px",
                  letterSpacing: "-0.18 px",
                  lineHeight: "24px",
                  // display: "flex",
                  // alignItems: "flex-start",
                }}
              >
                Powered by:
              </Typography>
              <Typography
                style={{
                  //  marginLeft: "200px",
                  marginTop: "10px",
                  marginLeft: "40px",
                  fontFamily: "apercu-font",
                  fontStyle: "normal",
                  color: "#535353",
                  fontWeight: "300px",
                  fontSize: "27px",
                  letterSpacing: "-0.27px",
                  lineHeight: "24px",
                  // display: "flex",
                  // alignItems: "flex-start",
                  // justifyContent: "center",
                }}
              >
                Zeptolab
              </Typography>
            </div>
          </div>
          <div
            style={{
              width: "480px",
              height: "116px",
              backgroundColor: "#FFFFFF",
              marginTop: "41px",
              marginLeft: "113.8px",

              border: "1px solid #DADADA",
            }}
          >
            <Typography
              style={{
                //  marginLeft: "200px",
                marginTop: "10px",
                marginLeft: "40px",
                fontFamily: "apercu-font",
                fontStyle: "normal",
                color: "#685DC5",
                fontWeight: "500px",
                fontSize: "16px",
                letterSpacing: "-0.145455px",
                lineHeight: "24px",
                // display: "flex",
                // alignItems: "flex-start",
                // justifyContent: "center",
              }}
            >
              Application closes in
            </Typography>
            <Typography
              style={{
                //  marginLeft: "200px",
                marginTop: "16px",
                marginLeft: "40px",
                fontFamily: "apercu-font",
                fontStyle: "normal",
                color: "#535353",
                fontWeight: "500px",
                fontSize: "27px",
                letterSpacing: "-0.145455px",
                lineHeight: "24px",
                opacity: "0.5",

                // display: "flex",
                // alignItems: "flex-start",
                // justifyContent: "center",
              }}
            >
              6 Day : 22 Hrs : 56 Min : 13 Seg
            </Typography>
          </div>

          <div
            style={{
              backgroundColor: "#FFFFFF",
              marginTop: "30px ",
              marginLeft: "113.8px",
              width: "480px",
              height: "200px",
              border: "1px solid #DADADA",
              display: "flex",
            }}
          >
            <div style={{ justifyContent: "flex-start" }}>
              <Typography
                style={{
                  //  marginLeft: "200px",
                  marginTop: "40px",
                  marginLeft: "40px",
                  fontFamily: "apercu-font",
                  fontStyle: "normal",
                  color: "#685DC5",
                  fontWeight: "300px",
                  fontSize: "16px",
                  letterSpacing: "-0.145455px",
                  lineHeight: "24px",
                  // display: "flex",
                  // alignItems: "flex-start",
                  // justifyContent: "center",
                }}
              >
                Location
              </Typography>
              <Typography
                style={{
                  //  marginLeft: "200px",

                  marginLeft: "40px",
                  fontFamily: "apercu-font",
                  fontStyle: "normal",
                  color: "#535353",
                  fontWeight: "300px",
                  fontSize: "16px",
                  letterSpacing: "-0.145455px",
                  lineHeight: "24px",
                  opacity: "0.5",

                  // display: "flex",
                  // alignItems: "flex-start",
                  // justifyContent: "center",
                }}
              >
                Bangkok
              </Typography>
              <Typography
                style={{
                  //  marginLeft: "200px",
                  marginTop: "23px",
                  marginLeft: "40px",
                  fontFamily: "apercu-font",
                  fontStyle: "normal",
                  color: "#685DC5",
                  fontWeight: "300px",
                  fontSize: "16px",
                  letterSpacing: "-0.145455px",
                  lineHeight: "24px",
                  // display: "flex",
                  // alignItems: "flex-start",
                  // justifyContent: "center",
                }}
              >
                Start date
              </Typography>
              <Typography
                style={{
                  //  marginLeft: "200px",

                  marginLeft: "40px",
                  fontFamily: "apercu-font",
                  fontStyle: "normal",
                  color: "#535353",
                  fontWeight: "300px",
                  fontSize: "16px",
                  letterSpacing: "-0.145455px",
                  lineHeight: "24px",
                  opacity: "0.5",
                  // display: "flex",
                  // alignItems: "flex-start",
                  // justifyContent: "center",
                }}
              >
                30 June 2020
              </Typography>
            </div>
            <div
              style={{
                justifyContent: "flex-end",
                marginLeft: "96px",
                marginTop: "40px",
              }}
            >
              <Typography
                style={{
                  //  marginLeft: "200px",

                  marginLeft: "40px",
                  fontFamily: "apercu-font",
                  fontStyle: "normal",
                  color: "#685DC5",
                  fontWeight: "300px",
                  fontSize: "16px",
                  letterSpacing: "-0.145455px",
                  lineHeight: "24px",
                  // display: "flex",
                  // alignItems: "flex-start",
                  // justifyContent: "center",
                }}
              >
                Duration
              </Typography>
              <Typography
                style={{
                  //  marginLeft: "200px",

                  marginLeft: "40px",
                  fontFamily: "apercu-font",
                  fontStyle: "normal",
                  color: "#535353",
                  fontWeight: "300px",
                  fontSize: "16px",
                  width: "106px",
                  letterSpacing: "-0.145455px",
                  lineHeight: "24px",
                  opacity: "0.5",
                  // display: "flex",
                  // alignItems: "flex-start",
                  // justifyContent: "center",
                }}
              >
                1 Year Full-Time
              </Typography>
              <Typography
                style={{
                  //  marginLeft: "200px",

                  marginLeft: "40px",
                  fontFamily: "apercu-font",
                  fontStyle: "normal",
                  color: "#685DC5",
                  fontWeight: "300px",
                  fontSize: "16px",
                  letterSpacing: "-0.145455px",
                  lineHeight: "24px",
                  // display: "flex",
                  // alignItems: "flex-start",
                  // justifyContent: "center",
                }}
              >
                End date
              </Typography>
              <Typography
                style={{
                  //  marginLeft: "200px",

                  marginLeft: "40px",
                  fontFamily: "apercu-font",
                  fontStyle: "normal",
                  color: "#535353",
                  fontWeight: "300px",
                  fontSize: "16px",
                  width: "106px",
                  letterSpacing: "-0.145455px",
                  lineHeight: "24px",
                  opacity: "0.5",
                  // display: "flex",
                  // alignItems: "flex-start",
                  // justifyContent: "center",
                }}
              >
                3 Aug 2020
              </Typography>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "692px",
            gridColumn: "span 12",
            display: "flex",
          }}
        >
          <div style={{ justifyContent: "flex-start" }}>
            <img
              alt=""
              src={Pattern}
              style={{
                position: "absolute",
                marginLeft: "203px",
                width: "438px",
                height: "438px",
                borderRadius: "50%",
                marginTop: "200px",
                justifyContent: "flex-start",
                border: "1px solid #EEEEEE",
                zIndex: "-1",
              }}
            />
            <img
              alt=""
              src={photo}
              style={{
                position: "relative",
                marginLeft: "232px",
                width: "390px",
                height: "390px",
                borderRadius: "50%",
                marginTop: "229px",
                border: "1px solid #EEEEEE",
              }}
            />
          </div>
          <div
            style={{
              justifyContent: "flex-end",
              marginLeft: "219px",
              marginTop: "236px",
            }}
          >
            <Typography
              style={{
                //  marginLeft: "200px",
                width: "479px",
                marginLeft: "40px",
                fontFamily: "apercu-font",
                fontStyle: "normal",
                color: "#685DC5",
                fontWeight: "500px",
                fontSize: "48px",
                letterSpacing: "-0.145455px",
                lineHeight: "56px",
                // display: "flex",
                // alignItems: "flex-start",
                // justifyContent: "center",
              }}
            >
              About the apprenticeship
            </Typography>
            <Typography
              style={{
                //  marginLeft: "200px",
                marginTop: "40px",
                marginLeft: "40px",
                fontFamily: "apercu-font",
                fontStyle: "normal",
                color: "#535353",
                fontWeight: "300px",
                fontSize: "22px",
                width: "479px",
                letterSpacing: "-0.145455px",
                lineHeight: "24px",
                opacity: "0.5",
                // display: "flex",
                // alignItems: "flex-start",
                // justifyContent: "center",
              }}
            >
              Our scholarships are designed to give talented and driven young
              people from any background access to top-class education,
              experience and network. We offer a fully-funded master’s degree
              alongside an apprenticeship and a guaranteed job upon graduation.
            </Typography>
          </div>
        </div>
        <div
          style={{ display: "flex", height: "1000px", gridColumn: "span 12" }}
        >
          <div
            style={{
              backgroundColor: "#FFFFFF",
              marginTop: "30px ",
              marginLeft: "201px",
              width: "320px",
              height: "524px",
              border: "1px solid #DADADA",
              justifyContent: "flex-start",
            }}
          >
            {" "}
            <Typography
              style={{
                //  marginLeft: "200px",
                marginTop: "32px",
                marginLeft: "40px",
                fontFamily: "apercu-font",
                fontStyle: "normal",
                color: "#685DC5",
                fontWeight: "500px",
                fontSize: "16px",
                letterSpacing: "-0.145455px",
                lineHeight: "24px",
                // display: "flex",
                // alignItems: "flex-start",
                // justifyContent: "center",
              }}
            >
              Scholarship value
            </Typography>
            <Typography
              style={{
                //  marginLeft: "200px",
                marginTop: "33px",
                marginLeft: "40px",
                fontFamily: "apercu-font",
                fontStyle: "normal",
                color: "#535353",
                fontWeight: "300px",
                fontSize: "48px",
                letterSpacing: "-0.145455px",
                lineHeight: "24px",

                // display: "flex",
                // alignItems: "flex-start",
                // justifyContent: "center",
              }}
            >
              €31,300
            </Typography>
            <Divider
              style={{
                marginTop: "188px",
                marginRight: "27px",
                marginLeft: "27px",
              }}
            />
            <div>
              <div style={{ display: "flex" }}>
                <div style={{ justifyContent: "flex-start" }}>
                  <Typography
                    style={{
                      //  marginLeft: "200px",
                      marginTop: "61px",
                      marginLeft: "40px",
                      fontFamily: "apercu-font",
                      fontStyle: "normal",
                      color: "#685DC5",
                      fontWeight: "500px",
                      fontSize: "16px",
                      letterSpacing: "-0.145455px",
                      lineHeight: "24px",
                      // display: "flex",
                      // alignItems: "flex-start",
                      // justifyContent: "center",
                    }}
                  >
                    Tuition covered
                  </Typography>
                  <Typography
                    style={{
                      //  marginLeft: "200px",

                      marginLeft: "44px",
                      fontFamily: "apercu-font",
                      fontStyle: "normal",
                      color: "#535353",
                      fontWeight: "300px",
                      fontSize: "16px",
                      letterSpacing: "-0.145455px",
                      lineHeight: "24px",
                      opacity: "0.5",
                      // display: "flex",
                      // alignItems: "flex-start",
                      // justifyContent: "center",
                    }}
                  >
                    {" "}
                    €20,900
                  </Typography>
                </div>
                <div style={{ justifyContent: "flex-end" }}>
                  <Typography
                    style={{
                      //  marginLeft: "200px",
                      marginTop: "61px",
                      marginLeft: "40px",
                      fontFamily: "apercu-font",
                      fontStyle: "normal",
                      color: "#685DC5",
                      fontWeight: "500px",
                      fontSize: "16px",
                      letterSpacing: "-0.145455px",
                      lineHeight: "24px",
                      // display: "flex",
                      // alignItems: "flex-start",
                      // justifyContent: "center",
                    }}
                  >
                    Remaining
                  </Typography>
                  <Typography
                    style={{
                      //  marginLeft: "200px",

                      marginLeft: "44px",
                      fontFamily: "apercu-font",
                      fontStyle: "normal",
                      color: "#535353",
                      fontWeight: "300px",
                      fontSize: "16px",
                      letterSpacing: "-0.145455px",
                      lineHeight: "24px",
                      opacity: "0.5",
                      // display: "flex",
                      // alignItems: "flex-start",
                      // justifyContent: "center",
                    }}
                  >
                    {" "}
                    €2,000
                  </Typography>
                </div>
              </div>
              <Typography
                style={{
                  //  marginLeft: "200px",
                  marginTop: "23px",
                  marginLeft: "40px",
                  fontFamily: "apercu-font",
                  fontStyle: "normal",
                  color: "#685DC5",
                  fontWeight: "500px",
                  fontSize: "16px",
                  letterSpacing: "-0.145455px",
                  lineHeight: "24px",
                  // display: "flex",
                  // alignItems: "flex-start",
                  // justifyContent: "center",
                }}
              >
                Living stipend
              </Typography>
              <Typography
                style={{
                  //  marginLeft: "200px",

                  marginLeft: "44px",
                  fontFamily: "apercu-font",
                  fontStyle: "normal",
                  color: "#535353",
                  fontWeight: "300px",
                  fontSize: "16px",
                  letterSpacing: "-0.145455px",
                  lineHeight: "24px",
                  opacity: "0.5",
                  // display: "flex",
                  // alignItems: "flex-start",
                  // justifyContent: "center",
                }}
              >
                {" "}
                €8,400 (€700/month)
              </Typography>
            </div>
          </div>
          <div style={{ justifyContent: "flex-end" }}>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  marginTop: "30px ",
                  marginLeft: "40px",
                  width: "320px",
                  height: "274px",
                  border: "1px solid #DADADA",
                  justifyContent: "flex-start",
                }}
              >
                <Typography
                  style={{
                    //  marginLeft: "200px",
                    marginTop: "32px",
                    marginLeft: "25px",
                    fontFamily: "apercu-font",
                    fontStyle: "normal",
                    color: "#685DC5",
                    fontWeight: "500px",
                    fontSize: "16px",
                    letterSpacing: "-0.145455px",
                    lineHeight: "24px",
                    // display: "flex",
                    // alignItems: "flex-start",
                    // justifyContent: "center",
                  }}
                >
                  Study commitment
                </Typography>
                <Typography
                  style={{
                    marginTop: "8px",

                    marginLeft: "25px",
                    fontFamily: "apercu-font",
                    fontStyle: "normal",
                    color: "#535353",
                    fontWeight: "300px",
                    fontSize: "26px",
                    letterSpacing: "-0.145455px",
                    lineHeight: "24px",
                    opacity: "0.5",
                    // display: "flex",
                    // alignItems: "flex-start",
                    // justifyContent: "center",
                  }}
                >
                  {" "}
                  3 hours / day
                </Typography>
                <Divider
                  style={{
                    marginLeft: "25px",
                    marginTop: "22px",
                    width: "27.82px",
                  }}
                />
                <Typography
                  style={{
                    marginTop: "16px",
                    width: "270px",
                    marginLeft: "25px",
                    fontFamily: "apercu-font",
                    fontStyle: "normal",
                    color: "#535353",
                    fontWeight: "300px",
                    fontSize: "16px",
                    letterSpacing: "-0.145455px",
                    lineHeight: "24px",
                    opacity: "0.5",
                    // display: "flex",
                    // alignItems: "flex-start",
                    // justifyContent: "center",
                  }}
                >
                  You will complete 15 modules to graduate. Daily classes are 3
                  hours, plus coursework to complete in your own time.
                </Typography>
              </div>
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  marginTop: "30px ",
                  marginLeft: "40px",
                  width: "320px",
                  height: "274px",
                  border: "1px solid #DADADA",
                  justifyContent: "flex-end",
                }}
              >
                <Typography
                  style={{
                    //  marginLeft: "200px",
                    marginTop: "32px",
                    marginLeft: "25px",
                    fontFamily: "apercu-font",
                    fontStyle: "normal",
                    color: "#685DC5",
                    fontWeight: "500px",
                    fontSize: "16px",
                    letterSpacing: "-0.145455px",
                    lineHeight: "24px",
                    // display: "flex",
                    // alignItems: "flex-start",
                    // justifyContent: "center",
                  }}
                >
                  Work commitment
                </Typography>
                <Typography
                  style={{
                    marginTop: "8px",

                    marginLeft: "25px",
                    fontFamily: "apercu-font",
                    fontStyle: "normal",
                    color: "#535353",
                    fontWeight: "300px",
                    fontSize: "26px",
                    letterSpacing: "-0.145455px",
                    lineHeight: "24px",
                    opacity: "0.5",
                    // display: "flex",
                    // alignItems: "flex-start",
                    // justifyContent: "center",
                  }}
                >
                  4 hours / day
                </Typography>
                <Divider
                  style={{
                    marginLeft: "25px",
                    marginTop: "22px",
                    width: "27.82px",
                  }}
                />
                <Typography
                  style={{
                    marginTop: "16px",
                    width: "270px",
                    marginLeft: "25px",
                    fontFamily: "apercu-font",
                    fontStyle: "normal",
                    color: "#535353",
                    fontWeight: "300px",
                    fontSize: "16px",
                    letterSpacing: "-0.145455px",
                    lineHeight: "24px",
                    opacity: "0.5",
                    // display: "flex",
                    // alignItems: "flex-start",
                    // justifyContent: "center",
                  }}
                >
                  Immerse yourself in the professional world during your
                  apprenticeship. You’ll learn the ropes from the best and get
                  to apply your newly acquired knowledge in the field from day
                  one.
                </Typography>
              </div>
            </div>
            <Divider style={{ marginTop: "24px", marginLeft: "40px" }}>
              <Typography
                style={{
                  marginTop: "0px",
                  marginLeft: "25px",
                  marginRight: "25px",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                GRADUATION
              </Typography>
            </Divider>
            <div
              style={{
                backgroundColor: "#FFFFFF",
                marginTop: "24px ",
                marginLeft: "40px",
                width: "680px",
                height: "178px",
                border: "1px solid #DADADA",
                alignItems: "flex-end",
              }}
            >
              <Typography
                style={{
                  //  marginLeft: "200px",
                  marginTop: "32px",
                  marginLeft: "25px",
                  fontFamily: "apercu-font",
                  fontStyle: "normal",
                  color: "#685DC5",
                  fontWeight: "500px",
                  fontSize: "16px",
                  letterSpacing: "-0.145455px",
                  lineHeight: "24px",
                  // display: "flex",
                  // alignItems: "flex-start",
                  // justifyContent: "center",
                }}
              >
                A full-time contract
              </Typography>
              <Typography
                style={{
                  marginTop: "8px",

                  marginLeft: "25px",
                  fontFamily: "apercu-font",
                  fontStyle: "normal",
                  color: "#535353",
                  fontWeight: "300px",
                  fontSize: "26px",
                  letterSpacing: "-0.145455px",
                  lineHeight: "24px",
                  opacity: "0.5",
                  // display: "flex",
                  // alignItems: "flex-start",
                  // justifyContent: "center",
                }}
              >
                1 Year / Full-Time
              </Typography>
              <Divider
                style={{
                  marginLeft: "25px",
                  marginTop: "22px",
                  width: "27.82px",
                }}
              />
              <Typography
                style={{
                  marginTop: "16px",
                  width: "596px",
                  marginLeft: "25px",
                  fontFamily: "apercu-font",
                  fontStyle: "normal",
                  color: "#535353",
                  fontWeight: "300px",
                  fontSize: "16px",
                  letterSpacing: "-0.145455px",
                  lineHeight: "24px",
                  opacity: "0.5",
                  // display: "flex",
                  // alignItems: "flex-start",
                  // justifyContent: "center",
                }}
              >
                You’ll be guaranteed a 1 year contract with SCG upon graduation.
              </Typography>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{

              width: "800px",
              height: "459.92px",
              display: "flex",
              flexDirection: "row",
              JustifyContent: "space-between",
            }}
          >
            <GridWrapper headerHeight="148px">
              <Header
                headerColor="#FFFFFF"
                title={
                  <img
                    src={image}
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      marginTop: "1px",
                      marginRight: "60px",
                    }}
                  />
                }
                sideTitle={
                  <div
                    style={{
                      marginLeft: "64px",
                      fontFamily: "apercu-font",
                      color: "#535353",
                      fontSize: "16px",
                      letterSpacing: "-0.145455px",
                      lineHeight: "24px",
                      width: "230px",
                    }}
                  >
                    <Typography
                      style={{
                        marginTop: "21px",
                        fontWeight: "bold",
                      }}
                    >
                      Irene Pereyra
                    </Typography>
                    <Typography> Interaction Design Fellow ‘19</Typography>
                  </div>
                }
              ></Header>
              <div
                style={{
                  gridColumn: "span 12",
                  backgroundColor: "#FBFBFB",
                  width: "800px",
                  marginTop: "0px",
                  height: "310.54px",
                }}
              >
                <Typography
                
                  style={{
                    marginLeft: "700px",
                    marginTop: "56.02px",
                    width: "440px",
                    font: "Apercu Pro",
                    color: "#535353",
                    fontWeight: "300px",
                    fontSize: "22px",
                    letterSpacing: "-0.33 px",
                    lineHeight: "32px",
                    opacity: "0.7",
                  }}

                  
                >
                  This Fellowship was a turning point in my career. I wouldn’t
                  be where I am today without the financial support and
                  experienced offered through the program.
                </Typography>
                <Typography
                  style={{
                    marginLeft: "700px",
                    marginTop: "31.02px",
                    width: "440px",
                    font: "Apercu Pro",
                    color: "#535353",
                    fontWeight: "300px",
                    fontSize: "22px",
                    letterSpacing: "-0.33 px",
                    lineHeight: "32px",
                    opacity: "0.7",
                  }}
                >
                  Education · B.A. Visual Design
                </Typography>
              </div>
            </GridWrapper>
            <GridWrapper headerHeight="148px">
              <Header
                headerColor="#FFFFFF"
                title={
                  <img
                    src={image}
                    style={{

                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      marginTop: "35px",
                      marginRight: "60px",
                    }}
                  />
                }
                sideTitle={
                  <div
                    style={{
                      marginLeft: "64px",
                      fontFamily: "apercu-font",
                      color: "#535353",
                      fontSize: "16px",
                      letterSpacing: "-0.145455px",
                      lineHeight: "24px",
                      width: "230px",
                    }}
                  >
                    <Typography
                      style={{
                        marginTop: "21px",
                        fontWeight: "bold",
                      }}
                    >
                      Irene Pereyra
                    </Typography>
                    <Typography> Interaction Design Fellow ‘19</Typography>
                  </div>
                }
              ></Header>
              <div
                style={{
                  gridColumn: "span 12",
                  backgroundColor: "#FBFBFB",
                  width: "800px",
                  marginTop: "0px",
                  height: "310.54px",
                }}
              ></div>
            </GridWrapper>
            <GridWrapper headerHeight="148px">
              <Header
                headerColor="#FFFFFF"
                title={
                  <img
                    src={image}
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      marginTop: "35px",
                      marginRight: "60px",
                    }}
                  />
                }
                sideTitle={
                  <div
                    style={{
                      marginLeft: "64px",
                      fontFamily: "apercu-font",
                      color: "#535353",
                      fontSize: "16px",
                      letterSpacing: "-0.145455px",
                      lineHeight: "24px",
                      width: "230px",
                    }}
                  >
                    <Typography
                      style={{
                        marginTop: "21px",
                        fontWeight: "bold",
                      }}
                    >
                      Irene Pereyra
                    </Typography>
                    <Typography> Interaction Design Fellow ‘19</Typography>
                  </div>
                }
              ></Header>
              <div
                style={{
                  gridColumn: "span 12",
                  backgroundColor: "#FBFBFB",
                  width: "800px",
                  marginTop: "0px",
                  height: "310.54px",
                }}
              ></div>
            </GridWrapper>
          </div>
        </div>
        {/* </div> */}
      </GridWrapper>
      <List
        style={{
          width: "100%",
          maxWidth: "1041px",
          bgcolor: "background.paper",
          marginBottom: "-100px",
          marginLeft: "148px",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <div style={{ display: "flex", flexDirection: "row" }}>
            <ListSubheader
              style={{
                marginTop:"120px",

                //  marginLeft: "200px",
                width: "479px",
                marginLeft: "40px",
                fontFamily: "apercu-font",
                fontStyle: "normal",
                color: "#685DC5",
                fontWeight: "500px",
                fontSize: "48px",
                letterSpacing: "-0.145455px",
                lineHeight: "56px",
                // display: "flex",
                // alignItems: "flex-start",
                // justifyContent: "center",
              }}
            >
              Frequently asked questions
            </ListSubheader>
            <Typography style={{  marginTop:"120px", marginLeft: "285px" }}>Filter by:</Typography>
            <Button
              style={{
                marginTop:"120px",

                width: "235px",
                height: "58px",
                borderColor: "#DADADA",
                borderRadius: "29px",
                backgroundColor: "white",
                color: "#685DC5",
                fontSize: "14px",
                fontWeight: "100",
              }}
              endIcon={<KeyboardArrowDownIcon />}
              variant="outlined"
            >
              Program conditions
            </Button>
          </div>
        }
      >
        <div
         style={{
          backgroundColor: "#FFFFFF",
          marginTop: "30px ",
          marginLeft: "201px",
          width: "320px",
          height: "524px",
          justifyContent: "flex-start",
        }}

    
        >
<h1> Program conditions </h1>

<div  style={{
                    width: "320px",
                    height: "524px",
          marginTop: "60px ",

                    marginLeft: "433px",
                    fontWeight: "300px",
                    fontSize: "16px",
                    letterSpacing: "-0.145455px",
                    lineHeight: "24px",
                    opacity: "0.5",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}
>

<p 
          > <h1> What are my obligations? </h1>
The majority of our students receive numerous job offers at the end of the second academic year of their Bachelor's programme and at the end of the first academic year of their Master's programme. The best applicants receive an offer from our industrial partners at the beginning of their programmes.
Harbour.Space is highly recognized among innovative employers and is strategic partner of B.Grimm multi- industry corporation with 140 years of history in Thailand. Together we insure students get the best knowledge about the current job market opportunities.
We offer our students paid internships options during studies jointly with our industrial partners.
Employers that hired graduates of Harbour.Space in the past include Google, IBM, Accenture, Typeform, Frog, and other tech centric companies. Our industry specific employability report could be provided to you separately during the admission process.</p>
         
  </div>
          </div>
          
        <ListItemButton
         style={{
          width: "800px",
          marginTop: "270px",
        }}
        
        onClick={handleClick}>
          <ListItemText primary="Program conditions" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Do I get a job placement upon graduation?" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Program conditions" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="What if I want to start my own company? " />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Program conditions" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Do I need a visa? " />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
     
    </div>
  );
}

export default App;
