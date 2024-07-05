import { StyleSheet, Text, View, TouchableOpacity ,FlatList} from 'react-native';
import React, { useEffect, useState ,useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import CustomHeader from '../../components/CustomHeader ';
import FlightCard from '../../components/FlightCard';
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS, FONTFAMILY } from '../../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatDateToISO } from '../../helpers/FormatDate';
interface Flight {
  arrival_time: string;
  available_seats: number[];
  booked_seats: number[];
  class: string;
  created_at: string;
  departure_date: string;
  departure_time: string;
  facilities: string[];
  from_location: string;
  id:string;
  number: string; 
  price: number;
  return_date: string | null;
  return_time: string | null;
  seat_available: number;
  seat_max: number;
  to_location: string;
}

// Example usage:
const flights: Flight[] = [];
const FlightsScreen = ({ route, navigation }:any) => {
  const days = ["TH", "FR", "SA", "SU", "MO", "TU", "WE"];  
  const [flights, setFlights] = useState<Flight[]>([]);
  const { fromCity, toCity, departureDate,Class } = route.params;
  const [selectedDate, setSelectedDate] = useState<number>(0);
  const handlePressFlight = useCallback((flight:any) => {
    navigation.navigate('SelectSeats', { flight });
  }, [navigation]);
  

  
    useEffect(() => {
    const newDepartureDate = new Date(departureDate);
    newDepartureDate.setDate(newDepartureDate.getDate() + selectedDate);
    const formattedDate = formatDateToISO(newDepartureDate);
    const unsubscribe = firestore()
      .collection('FlightBooking')
      .where('from_location', '==', fromCity)
      .where('to_location', '==', toCity)
      .where('departure_date', '==', formattedDate)
      .where('class','==',Class)
      .onSnapshot(querySnapshot => {
        const flightsData = querySnapshot.docs.map(doc => {
          const data = doc.data() as Flight; 
          data.id = doc.id;
          return {
            ...data,
          };
        });
       
        setFlights(flightsData);
      });

    return () => unsubscribe();
  }, [fromCity, toCity, selectedDate])
  
  return (
    <ScrollView style={styles.container}>
      <CustomHeader title='Flight' onBackPress={()=> navigation.goBack()}/>
      <View   style={styles.dateSelector}>
        {days.map((day, index) => (
          <TouchableOpacity key={index} style={[styles.dateItem, selectedDate === index && styles.selectedDate]} onPress={
              ()=>{;
                setSelectedDate(index);
              }
          }>
            <Text style={[styles.day, selectedDate === index && styles.selectedDay]}>{day} </Text>
            <Text style={[styles.date, selectedDate === index && styles.selectedDateText]}>{new Date(departureDate).getDate() + index}</Text>
          </TouchableOpacity>
        ))}
      </View>
        <View style={styles.flightInfo}>
          <Text style={{color:COLORS.black,paddingLeft:10,fontFamily:FONTFAMILY.poppins_extrabold}}>{flights.length} flights availabe {fromCity} to {toCity} </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Filters')} style={{backgroundColor:COLORS.primaryOrangeHex,borderRadius:15,height:40,width:40,alignItems:'center',justifyContent:'center'}}>
            <Icon name="filter-list" size={24} color="white" />
          </TouchableOpacity>
        </View>
      
        {flights.map((flight,index) =>(
          <TouchableOpacity onPress={()=> handlePressFlight(flight)} key={index}>
            <FlightCard  flight={flight}/>
          </TouchableOpacity>
          
        ))}
      
    </ScrollView> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:COLORS.gray
  },
  flightItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  filterButton: {
    padding: 10,
    backgroundColor: '#ddd',
    alignItems: 'center',
  },
  dateSelector: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent:'space-between',
    alignContent:'center'
  },
  flightInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  dateItem: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  selectedDate: {
    backgroundColor: '#FFA500',
    borderRadius: 8,
    padding: 8,
  },
  day: {
    fontSize: 14,
    color: '#000',
  },
  selectedDay: {
    color: '#FFF',
  },
  date: {
    fontSize: 14,
    color: '#000',
  },
  selectedDateText: {
    color: '#FFF',
  },
});

export default FlightsScreen;
