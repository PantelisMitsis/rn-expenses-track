import { TabRouter } from "@react-navigation/native";
import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'a pair of shoes',
        amount: 59.99,
        date: new Date('12/12/2021')
    },
    {
        id: 'e2',
        description: 'ps monitor',
        amount: 399.99,
        date: new Date('2/20/2022')
    },
    {
        id: 'e3',
        description: 'a laptop',
        amount: 1399.99,
        date: new Date('2/25/2022')
    },
    {
        id: 'e4',
        description: 'sports bands',
        amount: 23.79,
        date: new Date('3/1/2022')
    },
    {
        id: 'e5',
        description: 'a React lecture',
        amount: 9.99,
        date: new Date('3/30/2022')
    },
    {
        id: 'e6',
        description: 'ps monitor',
        amount: 399.99,
        date: new Date('20/2/2022')
    },
    {
        id: 'e7',
        description: 'a laptop',
        amount: 1399.99,
        date: new Date('25/2/2022')
    },
    {
        id: 'e8',
        description: 'sports bands',
        amount: 23.79,
        date: new Date('1/3/2022')
    },
    {
        id: 'e9',
        description: 'a React lecture',
        amount: 9.99,
        date: new Date('30/3/2022')
    }
]

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { description, amount, date }) => { }
});

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: id }, ...state]
        case 'Update':
            const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = {...updatableExpense, ...action.payload.data };
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex]= updatedItem;
            return updatedExpenses;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload)
        default:
            return state;
    }
}

function ExpensesContextProvider({ children }) {
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData });
    }

    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payload: id });
    }

    function updateExpense(id, expenseData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
    }

    return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>
}


export default ExpensesContextProvider