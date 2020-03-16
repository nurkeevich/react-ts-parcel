import React from "react";
import ExpenseListItem from "./ExpenseListItem";
import { useSelector } from "../../store/selector/selector";
import filterExpenses from "../../store/helpers/filterExpenses";

const ExpenseList = () => {
    const expenses = useSelector(state => {
        return filterExpenses(state.expenses.expenses, state.filters);
    });

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
