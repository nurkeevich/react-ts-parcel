import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useSelector } from "../../store/selector/selector";
import ExpenseForm from "./ExpenseForm";

interface EditExpensePageProps extends RouteComponentProps<{ id: string }> {
    // Add own props here
}

const EditExpensePage: React.FC<EditExpensePageProps> = props => {
    const expense = useSelector(state => {
        return state.expenses.expenses.find(expense => {
            return expense.id === props.match.params.id;
        });
    });

    return (
        <ExpenseForm
            handleSubmit={expense => {
                console.log(expense);
            }}
            expense={expense}
        />
    );
};

export default EditExpensePage;
