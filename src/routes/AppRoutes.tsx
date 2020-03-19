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
                        children={HomePage}
                    />
                    <Route path={Routes.ADD_EXPENSE}>
                        <AddExpensePage />
                    </Route>
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
