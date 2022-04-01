import { View, StyleSheet } from 'react-native';
import { useLayoutEffect } from 'react';

import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import Button from '../components/UI/Button';


function ManageExpense({ route, navigation }) {
    const editedExpenseId = route.params?.expenseId; //? checks if parent is undefined
    const isEditing = !!editedExpenseId //!! coomon js trick to convert into boolean

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing])

    function deleteExpenseHandler() {
        navigation.goBack();
     }

    function cancelHandler () {
        navigation.goBack();
    }

    function confirmHandler() {
        navigation.goBack();
    }

    return <View style={styles.container}>
        <View style={styles.buttonContainer}>
            <Button style={styles.button} mode='flat' onPress={cancelHandler}>Cancel</Button>
            <Button style={styles.button} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'} </Button>
        </View>
        {isEditing && <View style={styles.deleteContainer}>
            <IconButton icon="trash" color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler} />
        </View>}

    </View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    }
});


export default ManageExpense;