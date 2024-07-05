import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { flightCard } from '../constants/images';
import { COLORS } from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
const FlightCard = ({ flight }:any) => {
  return (
    <ImageBackground
      source={flightCard}
      style={styles.card}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.route}>
        <Text style={styles.city}>{flight.from_location}</Text>
        <Icon name ='flight' size={20} color={COLORS.primaryOrangeHex} style={{ transform: [{ rotate: '90deg' }]}}/>
        {/* <Text style={styles.arrow}>→</Text> */}
        <Text style={styles.city}>{flight.to_location}</Text>
      </View>
      <View style={styles.dashedLine}></View>
      <View style={styles.row}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Date</Text>
          <Text style={styles.infoText}>{flight.departure_date}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Departure</Text>
          <Text style={styles.infoText}>{flight.departure_time}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Price</Text>
          <Text style={styles.infoText}>{flight.price}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Number</Text>
          <Text style={styles.infoText}>{flight.number}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 6,
    overflow: 'hidden',
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 3,
    backgroundColor:COLORS.gray,
    borderColor:COLORS.gray
  },
  backgroundImage: {
    opacity: 0.9, 
  },
  route: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  city: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black', 
  },
  arrow: {
    color: 'orange',
    fontSize: 24,
  },
  separator: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 4,
  },
  details: {
    flexDirection:'row'
  },
  detailText: {
    fontSize: 14,
    color: 'black', 
  },
  dashedLine: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 16,
  },
  infoContainer: {
    alignItems: 'center',
  },
  infoTitle: {
    color: '#008080',
    fontSize: 12,
  },
  infoText: {
    fontSize: 14,
    fontWeight: 'bold',
    color:COLORS.black
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default FlightCard;
