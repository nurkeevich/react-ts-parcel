import { SortBy } from "../../constants/AppConstants";

export const SET_TEXT_FILTER = "SET_TEXT_FILTER";
export const SORT_BY_DATE = "SORT_BY_DATE";
export const SORT_BY_AMOUNT = "SORT_BY_AMOUNT";
export const SET_START_DATE = "SET_START_DATE";
export const SET_END_DATE = "SET_END_DATE";

export interface FilterState {
    text: string;
    sortBy: SortBy;
    startDate?: number;
    endDate?: number;
}

interface SetTextFilter {
    type: typeof SET_TEXT_FILTER;
    text: string;
}

interface SetStartDate {
    type: typeof SET_START_DATE;
    startDate: number;
}

interface SetEndDate {
    type: typeof SET_END_DATE;
    endDate: number;
}

interface SortByDate {
    type: typeof SORT_BY_DATE;
}

interface SortByAmount {
    type: typeof SORT_BY_AMOUNT;
}

export type FilterActionTypes =
    | SetTextFilter
    | SetStartDate
    | SetEndDate
    | SortByDate
    | SortByAmount;
