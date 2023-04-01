import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Grid,
  Tooltip,
  Tab,
  Tabs,
} from "@mui/material";
import PropTypes from "prop-types";
import FilterComponent from "./FilterComponent";
import MenuIcon from "@mui/icons-material/Menu";

import { useSelector } from "react-redux";
import { topics } from "../stores/Topics/topicsSlice";
import { useTopicSave, usePostSave } from "../services";
function ElevationScroll(props: any) {
  const { children, window } = props;

  return React.cloneElement(children, {
    elevation: 0,
    sx: {
      bgcolor: "white",
      height: 100,
      justifyContent: "center",
    },
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};
const HeaderComponent = (props: any) => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const topicList = useSelector(topics);
  const { setTopicsList, setTopicValue } = useTopicSave();
  const { setPostsList } = usePostSave();
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event: any, newValue: any) => {
    setTabValue(newValue);
    setTopicValue(topicList[newValue]);
    setPostsList(topicList[newValue].slug);
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  useEffect(() => {
    // getTopicList();
  }, []);
  const getTopicList = () => {
    setTopicsList();
  };
  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ElevationScroll {...props}>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Grid
              container
              spacing={3}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Grid item md={2} xs={12}>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "black",
                    textDecoration: "none",
                    mt: 2,
                  }}
                >
                  LOGO
                </Typography>
              </Grid>
              <Grid item md={8} sx={{ display: { xs: "none", md: "flex" } }}>
                <FilterComponent />
              </Grid>
            </Grid>

            <Grid
              container
              spacing={3}
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <Grid item xs={3}>
                <Typography
                  variant="h5"
                  component="a"
                  href=""
                  sx={{
                    display: { xs: "flex", md: "none" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  LOGO
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <FilterComponent borderRadius={"20px"} />
              </Grid>
              <Grid item xs={3}>
                <Box>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }}></IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              ></Menu>
            </Box>
          </Toolbar>
        </Container>
        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          value={tabValue}
          onChange={handleChange}
        >
          {topicList &&
            topicList.map((item: any) => {
              return <Tab label={item.slug} key={item.id} />;
            })}
        </Tabs>
      </AppBar>
    </ElevationScroll>
  );
};
export default HeaderComponent;
