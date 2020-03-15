import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { store } from "./store/store";
import { addExpense } from "./store/actions/expenses";

store.dispatch(
    addExpense({
        description: "Water bill",
        amount: 4500
    })
);

store.dispatch(
    addExpense({
        description: "Rent",
        createdAt: 1234
    })
);

store.dispatch(
    addExpense({
        description: "Gas bill",
        createdAt: 3452
    })
);

const state = store.getState();
console.log("====================================");
console.log(state);
console.log("====================================");

export const App = () => <AppRoutes />;
