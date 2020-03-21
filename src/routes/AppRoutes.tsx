import React from "react";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import Header from "../components/shared/Header";
import { Routes } from "../constants/AppConstants";
import HomePage from "../components/HomePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import AddExpensePage from "../components/expense/AddExpensePage";
import EditExpensePage from "../components/expense/EditExpensePage";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route
                        path={Routes.HOME_PAGE}
                        exact={true}
                        component={HomePage}
                    />
                    <Route
                        path={Routes.ADD_EXPENSE}
                        component={AddExpensePage}
                    />
                    <Route
                        path={Routes.EDIT_EXPENSE + "/:id"}
                        component={EditExpensePage}
                    />
                    <Route path={Routes.HELP_PAGE} component={HelpPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default AppRoutes;
