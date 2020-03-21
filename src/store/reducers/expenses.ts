import {
    ADD_EXPENSE,
    EDIT_EXPENSE,
    REMOVE_EXPENSE,
    ExpenseActionTypes,
    ExpensesState
} from "../types/expenses";

const initialState: ExpensesState = {
    expenses: []
};

export const expensesReducer = (
    state = initialState,
    action: ExpenseActionTypes
): ExpensesState => {
    switch (action.type) {
        case ADD_EXPENSE:
            return {
                // Have a look to this line later
                expenses: [...state.expenses, action.expense]
            };

        case REMOVE_EXPENSE:
            return {
                expenses: state.expenses.filter(({ id }) => id !== action.id)
            };

        case EDIT_EXPENSE:
            return {
                expenses: state.expenses.map(expense => {
                    if (expense.id === action.expense.id) {
                        return {
                            // Have a look to this line later
                            ...expense,
                            ...action.expense
                        };
                    } else {
                        return expense;
                    }
                })
            };

        default:
            return state;
    }
};
