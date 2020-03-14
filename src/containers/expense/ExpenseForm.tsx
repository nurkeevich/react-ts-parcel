import React, { useState } from "react";
import * as moment from "moment";
import { SingleDatePicker } from "react-dates";
import { Expense } from "../../store/types/expenses";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

interface ExpenseFormProps {
    handleSubmit: (expense: Expense) => void;
}

const ExpenseForm = (props: ExpenseFormProps) => {
    enum errorTypes {
        error = "Please provide description and amount",
        noError = ""
    }

    const [description, setDescription] = useState("");
    const [createdAt, setCreatedAt] = useState(moment.default());
    const [calendarFocused, setCalendarFocused] = useState(false);
    const [amount, setAmount] = useState("");
    const [note, setNote] = useState("");
    const [error, setError] = useState(errorTypes.noError);

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!amount || !description) {
            setError(errorTypes.error);
        } else {
            setError(errorTypes.noError);
            props.handleSubmit({
                description,
                note,
                amount: parseFloat(amount) * 100,
                createdAt: createdAt.valueOf()
            });
        }
    };

    const handleDateChange = (createdAt: any) => {
        setCreatedAt(createdAt);
    };

    const handleCalendarFocusChange = ({ focused }: any) => {
        setCalendarFocused(focused);
    };

    const handleDescriptionChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setDescription(event.currentTarget.value);
    };

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentAmount = event.currentTarget.value;

        if (currentAmount && currentAmount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            setAmount(currentAmount);
        }
    };

    const handleNoteChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setNote(event.currentTarget.value);
    };

    return (
        <div>
            {error && <p>{error}</p>}
            <form action="" onSubmit={handleFormSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="description"
                        autoFocus
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="amount"
                        value={amount}
                        onChange={handleAmountChange}
                    />
                    <SingleDatePicker
                        id="datePicker"
                        date={createdAt}
                        onDateChange={handleDateChange}
                        focused={calendarFocused}
                        onFocusChange={handleCalendarFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                </div>

                <textarea
                    value={note}
                    onChange={handleNoteChange}
                    placeholder="Add a not for your expense (optionals)"
                ></textarea>
                <button>Add Expense</button>
            </form>
        </div>
    );
};

export default ExpenseForm;
