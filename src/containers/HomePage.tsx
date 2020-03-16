import React from "react";
import ExpenseList from "./expense/ExpenseList";
import ExpenseListFilter from "./expense/ExpenseListFilter";

const HomePage = () => {
    return (
        <div>
            <ExpenseListFilter />
            <ExpenseList />
        </div>
    );
};

export default HomePage;
