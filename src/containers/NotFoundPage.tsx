import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "../constants/AppConstants";

const NotFoundPage = () => {
    return (
        <div>
            404 - <Link to={Routes.HOME_PAGE}>Go Home</Link>
        </div>
    );
};

export default NotFoundPage;
