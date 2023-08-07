import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../../ContextApi/DataReducer'

const ResultField = () => {
    const { state } = useContext(Context)
    return (
        <View style={styles.resultFieldContainer}>
            <Text style={styles.resultFieldText}>{state.result}</Text>
        </View>
    )
}

export default ResultField

const styles = StyleSheet.create({
    resultFieldContainer: {
        flexGrow: 0.1
    },
    resultFieldText: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        paddingHorizontal: "2%",
        // backgroundColor: "#000",
        // width: "100%",
        // height: 50,
        zIndex: 999,
        fontSize: 20
    }
})