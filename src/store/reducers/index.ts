import { expensesReducer } from "./expenses";
import { filtersReducer } from "./filters";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
});

export type AppState = ReturnType<typeof rootReducer>;
