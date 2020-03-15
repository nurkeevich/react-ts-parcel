import { Expense } from "../types/expenses";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AppState } from "../reducers";

export const useExpensesSelector: TypedUseSelectorHook<AppState> = useSelector;
