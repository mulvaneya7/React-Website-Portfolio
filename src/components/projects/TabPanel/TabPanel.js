import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import ProjectAccordian from './Accordian/Accordian';
import ProjectCards from './ProjectCards/projectCards';
import { Container } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`project-tabpanel-${index}`}
      aria-labelledby={`project-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `project-tab-${index}`,
    'aria-controls': `project-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ProjectTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="Project-Tabs" centered>
          <Tab label="C++" {...a11yProps(0)} />
          <Tab label="React.Js" {...a11yProps(1)} />
          <Tab label="Flutter&Dart" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ProjectAccordian 
          p1text="C++ project#1"
          p2text="C++ Project#2"
          p3text="C++ Project#3"/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProjectCards 
          proj1Title="NFL Graph"
          proj2Title="C++ project#2"
          proj3Title="C++ project#3"/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Flutter&Dart
      </TabPanel>
    </div>
  );
}