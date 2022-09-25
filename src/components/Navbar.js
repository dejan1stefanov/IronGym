import React from "react";
import { NavLink } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/logo.png";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{ gap: { sm: "122px", xs: "40px" }, justifyContent: 'none' }} px="20px"
    >
      <NavLink to="/">
        <img src={Logo} alt="logo" className={classes.logo} />
      </NavLink>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="center">
        <NavLink to="/" className={classes.home}>
          Home
        </NavLink>
        <a href="#exercises" className={classes.exercises}>
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
