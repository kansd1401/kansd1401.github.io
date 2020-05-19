
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

export default function CustomizedExpansionPanels() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
        <p>
        Held a volunteer position as a software developer at CrowdDoing. Handled programming duties including app design and record keeping. Some highlights include:
        </p>
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><li>Researching, building an MVP, and setting up the production version of microservices architecture.</li></Typography>
        </ExpansionPanelSummary>
        {/* <ExpansionPanelDetails>
          <Typography>
            Worked alongside other teammates to evaluate various microservices architectural options. Build a minimum viable product
            using Azure Automation Runbooks and Azure Cloud Function App to meet the company's hybrid infrastructure requirements. Setup production 
            pipeline from Azure DevOps to automate build and release pipeline for our production setup, including setting up automated API testing using PostMan.
          </Typography>
        </ExpansionPanelDetails> */}
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography><li>Worked with 10+ team members to produce creative, efficient solutions.</li></Typography>
        </ExpansionPanelSummary>
        {/* <ExpansionPanelDetails>
          <Typography>
            Built an automation script using C# and Selenium to track uptime of a company site. Script
            checked for performance degradation and sends alert via email to team members. Logs each instance
            to help track potential problems using log4net
          </Typography>
        </ExpansionPanelDetails> */}
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography><li>Collaborated with UX/UI designers to make the app more user-friendly and responsive.</li></Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography><li>Fixed bugs and implemented enhancements that significantly improved web functionality and speed.</li></Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>
    </div>
  );
}
