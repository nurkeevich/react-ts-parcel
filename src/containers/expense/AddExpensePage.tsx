import React, { Dispatch } from "react";
import ExpenseForm from "../expense/ExpenseForm";
import { RouteComponentProps } from "react-router-dom";
import { Routes } from "../../constants/AppConstants";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { addExpense } from "../../store/actions/expenses";

interface AddExpensePageProps extends RouteComponentProps {
    // Add here own props
}

const AddExpensePage: React.FC<AddExpensePageProps> = props => {
    // const dispatch: AppDispatch = useDispatch();

    return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm
                handleSubmit={expense => {
                    console.log(expense);
                    // dispatch(addExpense(expense));
                    props.history.push(Routes.HOME_PAGE);
                }}
            />
        </div>
    );
};

export default AddExpensePage;
