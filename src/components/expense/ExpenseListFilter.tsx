import React, { useState } from "react";
import { useSelector } from "../../store/selector/selector";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import {
    setTextFilter,
    sortByDate,
    sortByAmount
} from "../../store/actions/filters";
import { SortBy } from "../../constants/AppConstants";

const ExpenseListFilter = () => {
    const filters = useSelector(state => state.filters);
    const dispatch: AppDispatch = useDispatch();
    const [selectOption, setSelectOption] = useState(filters.sortBy);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setTextFilter(event.currentTarget.value));
    };

    const handleOptionChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        if (event.currentTarget.value === SortBy.date) {
            setSelectOption(SortBy.date);
            dispatch(sortByDate());
        } else if (event.currentTarget.value === SortBy.amount) {
            setSelectOption(SortBy.amount);
            dispatch(sortByAmount());
        }
    };

    return (
        <div>
            <input
                type="text"
                value={filters.text}
                onChange={handleInputChange}
            />
            <select value={selectOption} onChange={handleOptionChange}>
                <option value={SortBy.date}>Date</option>
                <option value={SortBy.amount}>Amount</option>
            </select>
        </div>
    );
};

export default ExpenseListFilter;
