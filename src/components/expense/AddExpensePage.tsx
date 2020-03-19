import React from "react";
import ExpenseForm from "../expense/ExpenseForm";
import { RouteComponentProps } from "react-router-dom";
import { Routes } from "../../constants/AppConstants";
import { addExpense } from "../../store/actions/expenses";
import { store, AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { Expense } from "../../store/types/expenses";

const AddExpensePage = () => {
    const dispatch: AppDispatch = useDispatch();

    const handleSubmit = (expense: Expense) => {
        dispatch(addExpense(expense));
    };

    return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm handleSubmit={handleSubmit} />
        </div>
    );
};

export default AddExpensePage;
