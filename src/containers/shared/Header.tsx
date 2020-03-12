import React from "react";
import { NavLink } from "react-router-dom";
import { Routes } from "../../constants/AppConstants";

const Header = () => {
    return (
        <header>
            <h1>My Expensify</h1>
            <NavLink to={Routes.HOME_PAGE} exact={true}>
                Home
            </NavLink>
            <NavLink to={Routes.HELP_PAGE}>Help</NavLink>
        </header>
    );
};

export default Header;
