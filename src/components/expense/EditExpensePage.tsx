import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useSelector } from "../../store/selector/selector";
import ExpenseForm from "./ExpenseForm";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { editExpense, removeExpense } from "../../store/actions/expenses";
import { Routes } from "../../constants/AppConstants";
import { Expense } from "../../store/types/expenses";

interface EditExpensePageProps extends RouteComponentProps<{ id: string }> {
    // Add own props here
}

const EditExpensePage: React.FC<EditExpensePageProps> = props => {
    const dispatch: AppDispatch = useDispatch();
    const expense = useSelector(state => {
        return state.expenses.expenses.find(expense => {
            return expense.id === props.match.params.id;
        });
    });

    const handleSubmit = (expense: Expense) => {
        console.log("====================================");
        console.log("updated", expense);
        console.log("====================================");

        dispatch(editExpense(props.match.params.id, expense));
        props.history.push(Routes.HOME_PAGE);
    };

    const handleRemoveExpense = () => {
        dispatch(removeExpense(props.match.params.id));
        props.history.push(Routes.HOME_PAGE);
    };

    return (
        <div>
            <ExpenseForm handleSubmit={handleSubmit} expense={expense} />
            <button onClick={handleRemoveExpense}>Remove</button>
        </div>
    );
};

export default EditExpensePage;
