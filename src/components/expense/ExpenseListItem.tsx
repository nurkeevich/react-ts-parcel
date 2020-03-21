import React from "react";
import { Expense } from "../../store/types/expenses";
import { Link } from "react-router-dom";
import { Routes } from "../../constants/AppConstants";

interface ExpenseListItemProps {
    expense: Expense;
}

const ExpenseListItem = ({ expense }: ExpenseListItemProps) => {
    const { amount, createdAt, description, id } = expense;

    return (
        <div>
            <Link to={Routes.EDIT_EXPENSE + "/" + id}>
                <h3>{description}</h3>
            </Link>
            <p>amount: {amount}</p>
            <p>createdAt: {createdAt}</p>
        </div>
    );
};

export default ExpenseListItem;
