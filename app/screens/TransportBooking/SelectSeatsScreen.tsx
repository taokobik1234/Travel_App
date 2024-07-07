import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList ,Alert} from 'react-native';
import { COLORS, FONTFAMILY } from '../../constants';
import CustomHeader from '../../components/CustomHeader ';
import TravellerSelection from '../../components/TravellerSelection';
import SeatSelection from '../../components/SeatSelection';

type Seat = {
  id: string;
  status: 'available' | 'booked' | 'unavailable';
};

type Traveller = number;

const App = ({navigation,route}:any) => {
  const [selectedTraveller, setSelectedTraveller] = useState<Traveller>(1);
  const [seatSelections, setSeatSelections] = useState<{ [key: number]: string }>({});


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
    // Check if the seat is already selected
    if (Object.values(seatSelections).includes(seat)) {
      Alert.alert('This seat is already taken.');
      return;
    }
    // Update the seat selection for the current traveler
    setSeatSelections((prev) => ({ ...prev, [selectedTraveller]: seat }));
  };
  
  const selectedSeatsCount = Object.keys(seatSelections).length;
  
  return (
    <View style={styles.container}>
      <CustomHeader title='Select Seats' onBackPress={()=> navigation.goBack()}/>
      <TravellerSelection
        onSelectTraveller={handleTravellerSelect}
        selectedTraveller={selectedTraveller}
        passengers={passengers}
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
      <SeatSelection seats={seats} onSeatSelect={handleSeatSelect} selectedSeat={seatSelections} />
      <View style={styles.summaryContainer}>
        <View>
          <Text style={styles.summaryLabel}>Your seats</Text>
          {Object.entries(seatSelections).map(([traveller, seat]) => (
            <Text key={traveller} style={styles.summaryText}>
              Traveller {traveller} / Seat {seat}
            </Text>
          ))}
        </View>
        <View>
          <Text style={styles.summaryLabel}>Total price</Text>
          <Text style={styles.totalPriceText}>${selectedSeatsCount*flight.price}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('BoardingPass',{flight,seatSelections})}>
        <Text>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  summaryLabel: {
    fontSize: 16,
    color: COLORS.green,
    fontWeight: 'bold',
  },
  summaryText: {
    fontSize: 16,
    color: COLORS.black,
  },
  totalPriceText: {
    fontSize: 16,
    color: COLORS.black,
  },
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
    borderRadius: 15,
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