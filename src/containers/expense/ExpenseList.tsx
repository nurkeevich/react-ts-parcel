import React from "react";
import ExpenseListItem from "./ExpenseListItem";
import { useSelector } from "../../store/selector/selector";

const ExpenseList = () => {
    const expenses = useSelector(state => state.expenses.expenses);

    return (
        <div>
            <h1>Expense List</h1>
            {expenses.map(expense => (
                <ExpenseListItem expense={expense} key={expense.id} />
            ))}
        </div>
    );
};

export default ExpenseList;
