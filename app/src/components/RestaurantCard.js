import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableHighlight } from 'react-native';
import IconLabel from './IconLabel';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function RestaurantCard({ info }) {
    const { name, categories, deliveryTime, distance, image } = info;

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                {/* <Image style={styles.imageStyle} source={image} /> */}
                <View style={styles.infoStyle}>
                    <Text style={styles.titleStyle}>{name}</Text>
                    <Text style={styles.categoryStyle}>{categories}</Text>

                    <View style={styles.iconLabelStyle}>
                        <FontAwesomeIcon icon={faLocationDot} color='#85A16D' />
                        <Text style={styles.labelStyle}>{deliveryTime}</Text>
                    </View>
                    <TouchableHighlight style={styles.viewRestaurant}>
                        <Text style={styles.viewRestaurantText}>Ver restaurante</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 20;
const styles = StyleSheet.create({
    container: {
        width: deviceWidth - 20,
        alignItems: 'center',
        marginTop: 25,
    },
    cardContainer: {
        width: deviceWidth - offset,
        backgroundColor: '#FFFFFF',
        height: 150,
        borderRadius: radius,
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
    },
    imageStyle: {
        height: 130,
        width: deviceWidth - offset,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        opacity: 0.9,
        alignContent: 'center',
        alignSelf: 'center',
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: '800',
    },
    categoryStyle: {
        fontWeight: '200',
    },
    infoStyle: {
        marginHorizontal: 10,
        marginVertical: 5,
    },
    iconLabelStyle: {
        flexDirection: 'row',
        marginTop: 10,
    },
    viewRestaurant: {
        backgroundColor: '#85A16D',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    viewRestaurantText: {
        color: '#FFF', // Cor do texto "Ver restaurante"
        textAlign: 'center',
    }
});
