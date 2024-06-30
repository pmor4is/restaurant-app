import React from "react";
import {View, StyleSheet, Text, Dimensions} from 'react-native';


export default function Header({label}) {
    return (
        <View style={styles.container}>
            <Text style={styles.labelStyle}> {label} </Text>
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        width: '100%',
        height: 110,
        backgroundColor: '#85A16D', // Example: Red
        justifyContent: 'flex-end',
        paddingBottom: 20,
        alignItems: 'center',
        // Add shadow properties if needed
      },
      labelStyle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#fff', // White text for contrast
      },
});
