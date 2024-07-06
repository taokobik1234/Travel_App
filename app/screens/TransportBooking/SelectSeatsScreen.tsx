import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { COLORS, FONTFAMILY } from '../../constants';
import CustomHeader from '../../components/CustomHeader ';



const TravellerSelection = ({ onSelectTraveller, selectedTraveller }:any) => {
  return (
    <View>
      <View>
            <Text style={{
              fontSize: 15,
              fontFamily: FONTFAMILY.poppins_semibold,
              color:COLORS.black,
              paddingLeft:10,
              marginTop:20,
          }}>
              Traveller
          </Text>
        </View>
      <View style={styles.travellerContainer}>
        
        {Array.from({ length: 6 }, (_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.travellerButton,
              selectedTraveller === index + 1 && styles.selectedTravellerButton,
            ]}
            onPress={() => onSelectTraveller(index + 1)}
          >
            <Text style={{color:COLORS.black}}>{index + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const SeatSelection = ({ seats, onSeatSelect, selectedSeat }:any) => {
  const renderSeat = ({ item }:any) => (
    <TouchableOpacity
      style={[
        styles.seat,
        item.status === 'available' && styles.availableSeat,
        item.status === 'booked' && styles.bookedSeat,
        item.status === 'unavailable' && styles.unavailableSeat,
        selectedSeat === item.id && styles.selectedSeat,
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

const App = ({navigation,route}:any) => {
  const [selectedTraveller, setSelectedTraveller] = useState(1);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const {flight,passengers} = route.params;
  const AVAILABLE_SEATS = flight.available_seats;
  const BOOKED_SEATS = flight.booked_seats;

const generateSeats = () => {
  const seats = [];
  const columns = ['A', 'B', 'C', 'D'];

  let seatIndex = 1;
  for (let row = 1; row <= 6; row++) {
    for (let col = 0; col < columns.length; col++) {
      const seatId = `${columns[col]}${row}`;
      if (BOOKED_SEATS.includes(seatIndex)) {
        seats.push({ id: seatId, status: 'booked' });
      } else if (AVAILABLE_SEATS.includes(seatIndex)) {
        seats.push({ id: seatId, status: 'available' });
      } else {
        seats.push({ id: seatId, status: 'unavailable' });
      }
      seatIndex++;
    }
  }

  return seats;
};
  const seats = generateSeats();
  
  const handleTravellerSelect = (traveller:any) => {
    setSelectedTraveller(traveller);
  };

  const handleSeatSelect = (seat:any) => {
    setSelectedSeat(seat);
  };

  return (
    <View style={styles.container}>
      <CustomHeader title='Select Seats' onBackPress={()=> navigation.goBack()}/>
      <TravellerSelection
        onSelectTraveller={handleTravellerSelect}
        selectedTraveller={selectedTraveller}
      />

<View style={styles.legendContainer}>
      <View style={styles.legendItem}>
        <View style={[styles.colorBox, styles.selectedColor]} />
        <Text style={styles.legendText}>Selected</Text>
      </View>
      <View style={styles.legendItem}>
        <View style={[styles.colorBox, styles.bookedColor]} />
        <Text style={styles.legendText}>Booked</Text>
      </View>
      <View style={styles.legendItem}>
        <View style={[styles.colorBox, styles.availableColor]} />
        <Text style={styles.legendText}>Available</Text>
      </View>
    </View>
      <SeatSelection seats={seats} onSeatSelect={handleSeatSelect} selectedSeat={selectedSeat} />
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          Your seats: Traveller {selectedTraveller} / Seat {selectedSeat}
        </Text>
        <Text style={styles.infoText}>Total price: $50.00</Text>
      </View>
      <TouchableOpacity style={styles.continueButton}>
        <Text>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  travellerContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginBottom: 20,
  },
  travellerButton: {
    width:50,
    padding: 10,
    borderWidth: 2,
    borderColor: COLORS.white,
    borderRadius: 5,
    alignItems: 'center',
    marginRight:10
  },
  selectedTravellerButton: {
    backgroundColor: '#ffcc80',
  },
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
  infoContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    color:COLORS.black
  },
  continueButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: COLORS.primaryOrangeHex,
    alignItems: 'center',
    borderRadius: 5,
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: COLORS.white,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorBox: {
    width: 20,
    height: 20,
    marginRight: 5,
    borderRadius: 5,
  },
  selectedColor: {
    backgroundColor: COLORS.primaryOrangeHex,
  },
  bookedColor: {
    backgroundColor: '#004d40',
  },
  availableColor: {
    backgroundColor: '#b2dfdb',
  },
  legendText: {
    fontSize: 16,
    color: COLORS.black
  },
});

export default App;