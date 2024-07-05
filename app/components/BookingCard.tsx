import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTFAMILY } from '../constants';

interface BBookingCardProps{
    title:string;
    imageSource:any;
    onPress: any;
}

const BookingCard:React.FC<BBookingCardProps> = ({ title, imageSource, onPress }) => {
    return (
        <View style={styles.cardContainer}>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Image source={imageSource} style={styles.image}  />
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
            
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        // flex:2,
        elevation: 3,
        backgroundColor: COLORS.white,
        borderRadius: 8,
        padding: 20,
        margin: 10,
        alignItems: 'center',
    },
    image: {
        width: 350,
        height: 328,
        borderRadius: 5
    },
    button: {
        backgroundColor: COLORS.white,
        // paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 5,
    },

    title: {
        textAlign:'center',
        color:COLORS.black,
        marginTop: 5,
        fontSize: 18,
        fontFamily:FONTFAMILY.poppins_semibold
    }
});

export default BookingCard;
