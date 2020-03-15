import React from "react";
import ExpenseListItem from "./ExpenseListItem";
import { useExpensesSelector } from "../../store/selectors/expenses";

export const ExpenseList = () => {
    const expenses = useExpensesSelector(state => state.expenses.expenses);

    return (
        <div>
            <h1>Expense List</h1>
            {expenses.map(expense => {
                return <ExpenseListItem expense={expense} key={expense.id} />;
            })}
        </div>
    );
};
