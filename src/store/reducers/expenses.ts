import {
    ADD_EXPENSE,
    EDIT_EXPENSE,
    REMOVE_EXPENSE,
    ExpenseActionTypes,
    ExpensesState
} from "../types/expenses";

const initialState: ExpensesState = {
    expenses: [
        {
            id: "1",
            amount: 1500.0,
            description: "Rent",
            note: "Rent payment for October",
            createdAt: 123456678
        },
        {
            id: "2",
            amount: 2500.0,
            description: "Bank",
            note: "Bank payment for November",
            createdAt: 9876543221
        }
    ]
};

export const expensesReducer = (
    state = initialState,
    action: ExpenseActionTypes
): ExpensesState => {
    switch (action.type) {
        case ADD_EXPENSE:
            return {
                expenses: [...state.expenses, action.expense]
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

        case REMOVE_EXPENSE:
            return {
                expenses: state.expenses.filter(expense => {
                    console.log("Expense ID " + expense.id);
                    console.log("Action ID " + action.id);

                    expense.id !== action.id;
                })
            };

        default:
            return state;
    }
};
