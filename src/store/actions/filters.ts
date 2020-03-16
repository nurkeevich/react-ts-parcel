import {
    FilterActionTypes,
    SET_END_DATE,
    SET_START_DATE,
    SET_TEXT_FILTER,
    SORT_BY_AMOUNT,
    SORT_BY_DATE
} from "../types/filters";

export const setEndDate = (endDate: number): FilterActionTypes => {
    return {
        type: SET_END_DATE,
        endDate
    };
};

export const setStartDate = (startDate: number): FilterActionTypes => {
    return {
        type: SET_START_DATE,
        startDate
    };
};

export const setTextFilter = (text: string): FilterActionTypes => {
    return {
        type: SET_TEXT_FILTER,
        text
    };
};

export const SortByAmount = (): FilterActionTypes => {
    return {
        type: SORT_BY_AMOUNT
    };
};

export const SortByDate = (): FilterActionTypes => {
    return {
        type: SORT_BY_DATE
    };
};
