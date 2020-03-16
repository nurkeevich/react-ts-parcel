import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useSelector } from "../../store/selector/selector";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";

interface EditExpensePageProps extends RouteComponentProps<{ id: string }> {
    // Add own props here
}

const EditExpensePage: React.FC<EditExpensePageProps> = props => {
    // const expense = useSelector(state => {
    //     state.expenses.expenses.find(
    //         expense => expense.id === props.match.params.id
    //     );
    // });
    // console.log(expense);

    // const dispatch: AppDispatch = useDispatch();

    return <div>Editing the expense with ID: {props.match.params.id}</div>;
};

export default EditExpensePage;
