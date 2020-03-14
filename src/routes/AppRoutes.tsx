import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../containers/shared/Header";
import { Routes } from "../constants/AppConstants";
import HomePage from "../containers/HomePage";
import HelpPage from "../containers/HelpPage";
import NotFoundPage from "../containers/NotFoundPage";
import AddExpensePage from "../containers/expense/AddExpensePage";
import EditExpensePage from "../containers/expense/EditExpensePage";

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
                    <Route
                        path={Routes.ADD_EXPENSE}
                        children={AddExpensePage}
                    />
                    <Route
                        path={Routes.EDIT_EXPENSE + "/:id"}
                        children={EditExpensePage}
                    />
                    <Route path={Routes.HELP_PAGE} children={HelpPage} />
                    <Route children={NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default AppRoutes;
