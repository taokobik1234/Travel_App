import { StyleSheet, Text, View,TouchableOpacity,FlatList } from 'react-native'
import React from 'react'
import { COLORS } from '../constants';

const SeatSelection = ({ seats, onSeatSelect, selectedSeat }:any) => {
  
    const renderSeat = ({ item }:any) => (
      <TouchableOpacity
        style={[
          styles.seat,
          item.status === 'available' && styles.availableSeat,
          item.status === 'booked' && styles.bookedSeat,
          Object.values(selectedSeat).includes(item.id) && styles.selectedSeat,
        ]}
        disabled={item.status !== 'available'}
        onPress={() => onSeatSelect(item.id)}
      >
        <Text>{item.id}</Text>
      </TouchableOpacity>
    );
  
    return (
      <FlatList
        data={seats}
        renderItem={renderSeat}
        keyExtractor={(item) => item.id.toString()}
        numColumns={4}
        contentContainerStyle={styles.seatContainer}
      />
    );
  };

export default SeatSelection

const styles = StyleSheet.create({
    seatContainer: {
        alignItems: 'center',
      },
      seat: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#ccc',
      },
      availableSeat: {
        backgroundColor: '#b2dfdb',
      },
      bookedSeat: {
        backgroundColor: '#004d40',
      },
      unavailableSeat: {
        backgroundColor: '#ccc',
      },
      selectedSeat: {
        backgroundColor: COLORS.primaryOrangeHex,
      },
})