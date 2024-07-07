import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { boardingPass,Plane,Code } from '../../constants/images';
import { COLORS, FONTFAMILY } from '../../constants';
import CustomHeader from '../../components/CustomHeader ';
const BoardingPass = ({navigation,route}:any) => {
    
    const {flight,seatSelections} = route.params;
    const seatList = Object.values(seatSelections).join(',');
    const selectedSeatsCount = Object.keys(seatSelections).length;
    function encodeString(str: string): string {
        // Split the string into an array of words
        const words: string[] = str.split(' ');
    
        // Map each word to its first letter concatenated with its last letter
        const encoded: string = words.map((word: string) => {
            if (word.length > 1) {
                return word[0] + word[word.length - 1].toLocaleUpperCase();
            }
            return word[0];
        }).join('');
    
        return encoded;
    }
  return (
    <View style={{backgroundColor:COLORS.gray,flex:1}}>
        <CustomHeader title='Boarding Pass' onBackPress={()=>{navigation.goBack()}}/>
        <View style={styles.container}>
        
      <ImageBackground 
        style={styles.backgroundImage}
        source={boardingPass} // Update the path to the correct image path
        imageStyle={styles.backgroundImageStyle}
      >
        
          <Image 
            style={styles.image}
            source={Plane} // Update the path to the correct image path
          />
          <Text style={styles.flightInfo}>British Airways Flight </Text>
          <View style={styles.dashedLine}></View>
          <View style={styles.flightDetails}>
            <View style={styles.detailSection}>
              <Text style={styles.label}>{encodeString(flight.from_location)}</Text>
              <Text style={styles.value}>{flight.from_location}</Text>
            </View>
            <Text style={styles.icon}>🛫</Text>
            <View style={styles.detailSection}>
              <Text style={styles.label}>{encodeString(flight.to_location)}</Text>
              <Text style={styles.value}>{flight.to_location}</Text>
            </View>
          </View>

          <View style={styles.dateTimeDetails}>
            <View style={styles.detailSection}>
              <Text style={styles.label}>Date</Text>
              <Text style={styles.value}>{flight.departure_date}</Text>
            </View>
            <View style={styles.detailSection}>
              <Text style={styles.label}>Departure</Text>
              <Text style={styles.value}>{flight.departure_time}</Text>
            </View>
          </View>

          <View style={styles.dashedLine}></View>
          <View style={styles.passengerDetails}>
            <View style={styles.detailSection}>
              <Text style={styles.label}>Passenger</Text>
              <Text style={styles.value}>{selectedSeatsCount} Adult</Text>
            </View>
            <View style={styles.detailSection}>
              <Text style={styles.label}>Ticket</Text>
              <Text style={styles.value}>{flight.number}</Text>
            </View>
            <View style={styles.detailSection}>
              <Text style={styles.label}>Class</Text>
              <Text style={styles.value}>{flight.class}</Text>
            </View>
            <View style={styles.detailSection}>
              <Text style={styles.label}>Seat</Text>
              <Text style={styles.value}>{seatList}</Text>
            </View>
          </View>

          <View style={styles.barcodeContainer}>
            <Image
              
              source={Code}
            />
            <Text style={styles.barcodeText}>A3427371903848</Text>
          </View>
        
        
      </ImageBackground>
      <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>Download ticket</Text>
        </TouchableOpacity>
    </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: COLORS.gray,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 20,
  },
  backgroundImage: {
    width:400,
    height:650,
    padding: 10,
    borderRadius: 6,
    overflow: 'hidden',
    marginVertical: 8,
    marginHorizontal: 10,
    elevation: 3,
    backgroundColor:COLORS.gray,
    borderColor:COLORS.gray,
    alignItems:'center',
  },
  backgroundImageStyle: {
     opacity: 0.9,
  },
  image: {
    marginTop:20,
    width: 180,
    height: 155,
    marginBottom: 20,
  },
  flightInfo: {
    color:COLORS.black,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  flightDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dashedLine: {
    marginTop:30,
    width: '95%',
    borderWidth: 2,
    borderColor: '#777',
    borderStyle: 'dashed',
    marginVertical: 10,
    marginHorizontal:20
  },
  detailSection: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  label: {
    color: COLORS.green,
    fontSize: 12,
  },
  value: {
    fontSize: 16,
    color:COLORS.black
  },
  icon: {
    fontSize: 24,
    marginHorizontal: 10,
  },
  dateTimeDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  passengerDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  barcodeContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  barcode: {
    width: '80%',
    height: 50,
  },
  barcodeText: {
    marginTop: 5,
    fontSize: 12,
    color:COLORS.black
  },
  downloadButton: {
    width:'90%',
    backgroundColor: COLORS.primaryOrangeHex,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 20,
    marginHorizontal:20,
    justifyContent:'center',
    alignItems:'center'
  },
  downloadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily:FONTFAMILY.poppins_bold
  },
});

export default BoardingPass;