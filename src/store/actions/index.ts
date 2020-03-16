import { ExpenseActionTypes } from "../types/expenses";
import { FilterActionTypes } from "../types/filters";

export type AppActions = ExpenseActionTypes | FilterActionTypes;
