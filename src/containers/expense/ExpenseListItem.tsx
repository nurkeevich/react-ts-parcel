import React from "react";
import { Expense } from "../../store/types/expenses";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { removeExpense } from "../../store/actions/expenses";

interface ExpenseListItemProps {
    expense: Expense;
}

const ExpenseListItem = ({ expense }: ExpenseListItemProps) => {
    const { amount, createdAt, description, id } = expense;
    const dispatch: AppDispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeExpense(id!));
        // console.log("Remove button clicked");
    };

    return (
        <div>
            <h3>{description}</h3>
            <p>amount: {amount}</p>
            <p>createdAt: {createdAt}</p>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
};

export default ExpenseListItem;
