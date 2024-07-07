import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY } from '../constants';

const TravellerSelection = ({ onSelectTraveller, selectedTraveller,passengers }:any) => {
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
          
          {Array.from({ length: passengers }, (_, index) => (
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
  

export default TravellerSelection

const styles = StyleSheet.create({
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
})