import React from "react";
import ExpenseForm from "../expense/ExpenseForm";
import { RouteComponentProps } from "react-router-dom";
import { Routes } from "../../constants/AppConstants";

interface AddExpensePageProps extends RouteComponentProps {
    // Add here own props
}

const AddExpensePage: React.FC<AddExpensePageProps> = props => {
    return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm
                handleSubmit={expenses => {
                    console.log(expenses);
                    props.history.push(Routes.HOME_PAGE);
                }}
            />
        </div>
    );
};

export default AddExpensePage;
