import "./App.css";
import React, { useState } from "react";
import {
  AppBar,
  Grid,
  IconButton,
  Typography,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  Divider,
  Drawer,
} from "@material-ui/core";
import {
  AccountCircle,
  Assessment,
  AssignmentTurnedInOutlined,
  Storage,
  ViewList,
  Work,
  Close
} from "@material-ui/icons";
import DataSource from "./components/datasource/DataSource";
import TestSuit from "./components/testsuit/TestSuit";
import TestCases from "./components/testcases/TestCases";
import ReportSuit from "./components/reportsuit/Report";

function App() {
  const [auth, setAuth] = useState(true);
  const [userDialog, setUserDialog] = useState(false);
  const [displayOption, setDisplayOption] = useState(null);
  const [sidBarAction, setSideBarAction] = useState(false);

  const handleAccountMenu = () => {
    setUserDialog(!userDialog);
  };

  const handleSidebarClick = (option) => {
    setDisplayOption(option);
    setSideBarAction(!sidBarAction);
  }

  const handleSidebarOpen = () => {
    setSideBarAction(!sidBarAction);
  }



  return (
    <div>
      <AppBar position="static" style={{ padding: "1%"}}>
        <Grid container>
          <Grid xs={1}>
            <ViewList
              style={{ color: "white", fontSize: "2.2rem", cursor:"pointer" }}
              onClick={() => handleSidebarOpen()}
            ></ViewList>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="h6" style={{ padding: "1%" }}>
              Testing Tool
            </Typography>
          </Grid>
          {auth ? (
            <Grid item xs={1}>
              <IconButton onClick={(e) => handleAccountMenu(e)}>
                <AccountCircle
                  style={{ color: "white", fontSize: "2rem" }}
                ></AccountCircle>
              </IconButton>
            </Grid>
          ) : null}
        </Grid>
      </AppBar>

      <Drawer anchor="left" open={sidBarAction} variant="temporary">
        <List style={{ padding: "4%", marginTop: "45%" }}>
          <ListItem onClick={() => handleSidebarOpen() }>
            <Close style={{width:"100%", textAlign:"centre", cursor: "pointer", fontWeight:"bold"}}></Close>
          </ListItem>
          <Divider></Divider>

          <ListItem className="sidebar-list-item" onClick={() => handleSidebarClick("DATA_SOURCE")}>
            <ListItemIcon>
              <Storage style={{fontWeight:"500"}}></Storage>
            </ListItemIcon>
            <ListItemText>Data Source</ListItemText>
          </ListItem>
          

          <ListItem className="sidebar-list-item" onClick={() => handleSidebarClick("TEST_SUIT")} >
            <ListItemIcon>
              <Work style={{fontWeight:"500"}}></Work>
            </ListItemIcon>
            <ListItemText>Test Suit</ListItemText>
          </ListItem>

          <ListItem className="sidebar-list-item" onClick={() => handleSidebarClick("TEST_CASES")}>
            <ListItemIcon>
              <AssignmentTurnedInOutlined style={{fontWeight:"500"}}></AssignmentTurnedInOutlined>
            </ListItemIcon>
            <ListItemText>Test Cases</ListItemText>
          </ListItem>

          <ListItem className="sidebar-list-item" onClick={() => handleSidebarClick("REPORT")}>
            <ListItemIcon>
              <Assessment style={{fontWeight:"500"}}></Assessment>
            </ListItemIcon>
            <ListItemText>Test Report</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <Grid container style={{padding:"5%"}}>
        <Grid item xs={10}>
          {getComponent(displayOption)}
        </Grid>
      </Grid>
    </div>
  );
}

function getComponent(option) {
  switch (option) {
    case "DATA_SOURCE": return <DataSource></DataSource>
    case "TEST_SUIT": return <TestSuit></TestSuit>
    case "TEST_CASES": return <TestCases></TestCases>
    case "REPORT": return <ReportSuit></ReportSuit>
    default:
      return <div>Please Choose some option to continue, Dashboard page is in progress !</div>
  }
}

export default App;
