import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { FONTFAMILY,COLORS } from '../../constants'
import BookingCard from '../../components/BookingCard';
import { Hotel,Transport,Events,Trips } from '../../constants/images';

const BookingScreen = ({navigation}:any) => {
  const bookings = [
    { id: '1', title: 'Hotel', image: Hotel ,handleBooking:()=>{}},
    { id: '2', title: 'Transport', image: Transport ,handleBooking:()=>{ navigation.navigate('TransportBooking')}},
    { id: '3', title: 'Events', image: Events,handleBooking:()=>{} },
    { id: '4', title: 'Trips', image: Trips,handleBooking:()=>{} }
  ];
  return (
    <View>
      {/* TiTLe */}
      <View>
        <Text style={{
          fontSize: 28,
          fontFamily: FONTFAMILY.poppins_semibold,
          color:COLORS.black,
          textAlign:'center'
        }}>
              Booking
          </Text>
      </View>

      <View style={{marginBottom:200,}}>
        <FlatList 
          data={bookings} 
          renderItem={({ item }:any) => (
            <BookingCard
                title={item.title}
                imageSource={item.image}
                onPress={item.handleBooking}
            />
          )} 
          keyExtractor={item => item.id}/>
      </View>

    </View>
  )
}

export default BookingScreen

const styles = StyleSheet.create({})