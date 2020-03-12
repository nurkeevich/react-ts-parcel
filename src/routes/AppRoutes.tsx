import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../containers/shared/Header";
import { Routes } from "../constants/AppConstants";
import HomePage from "../containers/HomePage";
import HelpPage from "../containers/HelpPage";
import NotFoundPage from "../containers/NotFoundPage";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route
                        path={Routes.HOME_PAGE}
                        exact={true}
                        children={HomePage}
                    />
                    <Route path={Routes.HELP_PAGE} children={HelpPage} />
                    <Route children={NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default AppRoutes;
