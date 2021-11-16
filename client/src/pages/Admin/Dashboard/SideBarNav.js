import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import { NavLink, Router } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { useRouteMatch } from "react-router";

export const SideBarNav = () => {
  let { path, url } = useRouteMatch();
  return (
    <List>
      <ListItem button component={NavLink} to={`${url}/dashboard`}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <Divider sx={{ m: 1 }} />
      <ListItem button component={NavLink} to={`${url}/new-post`}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Create post" />
      </ListItem>
      <ListItem button component={NavLink} to={`${url}/posts`}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Posts" />
      </ListItem>
      <Divider sx={{ m: 1 }} />
      <ListItem button component={NavLink} to={`${url}/new-category`}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Create category" />
      </ListItem>
      <ListItem button component={NavLink} to={`${url}/categories`}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Categories" />
      </ListItem>
      <Divider sx={{ m: 1 }} />
      <ListItem button component={NavLink} to={`${url}/new-tag`}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Create tag" />
      </ListItem>
      <ListItem button component={NavLink} to={`${url}/tags`}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Tags" />
      </ListItem>
    </List>
  );
};
