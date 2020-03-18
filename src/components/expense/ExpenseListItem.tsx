import React from "react";
import { Expense } from "../../store/types/expenses";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { removeExpense } from "../../store/actions/expenses";
import { Link } from "react-router-dom";
import { Routes } from "../../constants/AppConstants";

interface ExpenseListItemProps {
    expense: Expense;
}

const ExpenseListItem = ({ expense }: ExpenseListItemProps) => {
    const { amount, createdAt, description, id } = expense;
    const dispatch: AppDispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeExpense(id!));
    };

    return (
        <div>
            <Link to={Routes.EDIT_EXPENSE + "/" + id}>
                <h3>{description}</h3>
            </Link>
            <p>amount: {amount}</p>
            <p>createdAt: {createdAt}</p>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
};

export default ExpenseListItem;
