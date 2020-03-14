import React from "react";

const ExpenseForm = () => {
    return (
        <div>
            <form action="">
                <input type="text" placeholder="description" />
                <input type="text" placeholder="amount" />
                <textarea
                    name=""
                    id=""
                    placeholder="Add a not for your expense (optionals)"
                ></textarea>
                <button>Add Expense</button>
            </form>
        </div>
    );
};

export default ExpenseForm;
