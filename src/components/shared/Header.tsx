import React from "react";
import { NavLink, Route } from "react-router-dom";
import { Routes } from "../../constants/AppConstants";

const Header = () => {
    return (
        <header>
            <h1>My Expensify</h1>
            <NavLink
                to={Routes.HOME_PAGE}
                exact={true}
                activeClassName="is-active"
            >
                Home
            </NavLink>
            <NavLink to={Routes.ADD_EXPENSE} activeClassName="is-active">
                Add Expense
            </NavLink>
            <NavLink to={Routes.HELP_PAGE} activeClassName="is-active">
                Help
            </NavLink>
        </header>
    );
};

export default Header;
