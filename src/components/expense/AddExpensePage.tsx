import React from "react";
import ExpenseForm from "../expense/ExpenseForm";
import { addExpense } from "../../store/actions/expenses";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { Expense } from "../../store/types/expenses";
import { RouteComponentProps } from "react-router-dom";
import { Routes } from "../../constants/AppConstants";

interface AddExpenePageProps extends RouteComponentProps {
    // add own props here
}

const AddExpensePage: React.FC<AddExpenePageProps> = props => {
    const dispatch: AppDispatch = useDispatch();

    const handleSubmit = (expense: Expense) => {
        dispatch(addExpense(expense));
        props.history.push(Routes.HOME_PAGE);
    };

    return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm handleSubmit={handleSubmit} />
        </div>
    );
};

export default AddExpensePage;
