import * as ROUTES from '../../routes/routes';
import React, { Fragment } from 'react';
import { Button, IconButton, SvgIcon, Grid, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { HashLink as LinkTwo } from 'react-router-hash-link';
import {Box } from '@material-ui/core';

const cssStyles = makeStyles(theme => ({
  container: {
      '& button': {
          [theme.breakpoints.up("sm")] : {
            color: "#ffffff",
            fontWeight: "370",
          },
        '& #imgBtn':{
            width: "30px",
            height:"30px",
            marginTop:"auto",
            marginBottom:"auto"
        }
      }
  }
}));

export default function NavBarSelf(props) {
    const useStyle = cssStyles();
    return (
        <Fragment>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                spacing={2}
                className={useStyle.container}
            >
                <Grid item xs={12} sm={1} md={1} style={{textAlign:"center"}}>
                    <LinkTwo smooth={true} to={ROUTES.HOME} style={{textDecoration: "none"}}>

                        {props.display === "desktop" ?<IconButton><div id="imgBtn" src={process.env.PUBLIC_URL + '/home.svg'}></div></IconButton> :
                            <LinkTwo to={ROUTES.HOME} smooth={true} style={{textDecoration: "none"}}>
                                <Button  fullWidth>
                                    Home
                                </Button>
                            </LinkTwo>}

                    </LinkTwo>
                </Grid>
                <Grid item xs={12} sm={3} md={2}  style={{textAlign:"center"}}>
                <LinkTwo smooth={true} to={ROUTES.SKILLS} style={{textDecoration: "none"}} >
                    <Button  fullWidth>
                            Skills
                    </Button>
                    </LinkTwo>
                </Grid>
                <Grid item xs={12} sm={3} md={2}  style={{textAlign:"center"}}>
                <LinkTwo  smooth={true} to={ROUTES.PROJECTS} style={{textDecoration: "none"}} >
                    <Button fullWidth>
                            Work
                    </Button>
                    </LinkTwo>
                </Grid>
                <Grid item xs={12} sm={3} md={2}  style={{textAlign:"center"}}>
                    <LinkTwo  smooth={true} to={ROUTES.CONTACT} style={{textDecoration: "none"}} >
                        <Button fullWidth>
                            Contact
                        </Button>
                    </LinkTwo>
                </Grid>
                <Grid item xs={12} sm={2} md={2} xs  style={{textAlign:"center", marginLeft:"auto"}}>
                    <Button style={{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"}} href="https://resume.creddle.io/resume/9z1w2cxjkdh" >       
                        <Box fontWeight={"bolder"}>RESUMÉ</Box>
                    </Button>
                </Grid>
            </Grid>
        </Fragment>         
    );
}
