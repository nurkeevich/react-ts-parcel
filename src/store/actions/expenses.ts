import { v4 as uuid } from "uuid";
import {
    ADD_EXPENSE,
    EDIT_EXPENSE,
    REMOVE_EXPENSE,
    ExpenseActionTypes,
    Expense
} from "../types/expenses";

export const addExpense = ({
    id = uuid(),
    description = "",
    note = "",
    amount = 0,
    createdAt = 0
}: Expense = {}): ExpenseActionTypes => {
    return {
        type: ADD_EXPENSE,
        expense: {
            id: uuid(),
            description,
            amount,
            note,
            createdAt
        }
    };
};

export const editExpense = (
    id: string,
    expense: Expense
): ExpenseActionTypes => {
    return {
        type: EDIT_EXPENSE,
        id,
        expense
    };
};

export const removeExpense = (id: string): ExpenseActionTypes => {
    return {
        type: REMOVE_EXPENSE,
        id
    };
};
