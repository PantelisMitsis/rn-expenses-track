import { View, StyleSheet } from 'react-native';

import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import {GlobalStyles} from '../../constants/styles';


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

function ExpensesOutput({ expenses, expensesPeriod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    );
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:24,
        paddingHorizontal: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700
    }
});


export default ExpensesOutput;