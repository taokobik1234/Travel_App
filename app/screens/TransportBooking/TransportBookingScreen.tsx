import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import CustomHeader from '../../components/CustomHeader '
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import DateTimePicker from '@react-native-community/datetimepicker';
import { COLORS, FONTFAMILY } from '../../constants';
import { TextInput } from 'react-native-paper';
import { formatDateToISO } from '../../helpers/FormatDate'
const TransportBookingScreen = ({navigation}:any) => {  
  const Classes =["Economy","Business"]
  const Transport =["airplane","ferry","train","bus"];
  const [fromCity, setFromCity] = useState('New York ');
  const [toCity, setToCity] = useState('London ');
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [passengers, setPassengers] = useState(1);
  const [Class,setClass]=useState("Economy")
  const [showDeparturePicker, setShowDeparturePicker] = useState(false);
  const [showReturnPicker, setShowReturnPicker] = useState(false);
  const [transport,setTransort] = useState("airplane")

  const swapCities = () => {
    setFromCity(toCity);
    setToCity(fromCity);
  };

  return (
    <View style={{flex:1}}>
      <CustomHeader title='Transport Booking' onBackPress={()=>navigation.pop()}/>

      <View style={styles.container}>
        
        <TextInput 
          label={"From"}
          style={styles.input}
          onChangeText={setFromCity}
          value={fromCity}
          
        />
        <TouchableOpacity onPress={swapCities} style={styles.swapButton} >
          <Icon name="swap-horizontal" size={37} color="white" />
        </TouchableOpacity>
        
        
        <TextInput 
          label={"To"}
          style={styles.input}
          onChangeText={setToCity}
          value={toCity}
        />
        
      </View>

      <View style={{
        flexDirection: 'row',      
        alignItems: 'center',     
        justifyContent: 'space-between',
        marginTop: 20,
        marginHorizontal: 30
      }}>
        <TouchableOpacity onPress={() => setShowDeparturePicker(true)} style={{borderRadius:10, backgroundColor:COLORS.white,width:'45%'}}>
          <Text style={{color:COLORS.black,fontSize:10}}>Departure</Text>
          <Text style={{color:COLORS.black}}>{departureDate.toDateString()}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => setShowReturnPicker(true)} style={{borderRadius:10, backgroundColor:COLORS.white,width:'45%'}}>
          <Text style={{color:COLORS.black,fontSize:10}}>Return</Text>
          <Text style={{color:COLORS.black}}>{returnDate.toDateString()}</Text>
        </TouchableOpacity>

        
        {showDeparturePicker && (
          <DateTimePicker
            value={departureDate}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowDeparturePicker(false);
              if (selectedDate) {
                setDepartureDate(selectedDate);
              }
            }}
          />
        )}
        
        {showReturnPicker && (
        <DateTimePicker
          value={returnDate}
          minimumDate={departureDate}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowReturnPicker(false);
            if (selectedDate) {
              setReturnDate(selectedDate);
            }
          }}
        />
      )}
  
      </View>

      <View>
        <View style={{marginTop:20}}>
            <Text style={{
              fontSize: 20,
              fontFamily: FONTFAMILY.poppins_regular,
              color:COLORS.black,
              paddingLeft:30
          }}>
              Passenger & luggage
          </Text>
        </View>
        <View style={{
          // width: '100%',             // full width
          // flex: 1,                   // enables flex layout
          flexDirection: 'row',      // sets flex direction to row
          alignItems: 'center',      // centers children vertically in the row
          justifyContent: 'space-between',
          marginTop: 5,
          marginHorizontal: 30
        }}>
          <View style={{alignItems:'center'}}>
            <MaterialCommunityIcons name ='account' size={30} color={COLORS.black}/>
            <TextInput 
              keyboardType='numeric'
              value={passengers.toString()}
              style={{marginHorizontal:10,
                borderColor: COLORS.white,  
                backgroundColor: COLORS.white,
                color: COLORS.black,
                borderRadius: 10,
                borderWidth: 2,
                padding: 0,
                fontSize: 14,
                textAlign:'center'
              }}
              onChangeText={text => {
                const number = parseInt(text);
                setPassengers(Number.isNaN(number) ? 0 : number);
              }}
            />
          </View>
          
          <View style={{alignItems:'center'}}>
            <MaterialCommunityIcons name ='baby-face-outline' size={30} color={COLORS.black}/>
            <TextInput 
              keyboardType='numeric'
              label={''}
              value={"0"}
              style={{marginHorizontal:10,
                borderColor: COLORS.white,  
                backgroundColor: COLORS.white,
                color: COLORS.black,
                borderRadius: 10,
                borderWidth: 2,
                padding: 0,
                fontSize: 14,
                textAlign:'center'
              }}
            />
          </View>

          <View style={{alignItems:'center'}}>
            <MaterialCommunityIcons name ='dog' size={30} color={COLORS.black}/>
            <TextInput 
              keyboardType='numeric'
              label={''}
              value={"0"}
              style={{marginHorizontal:10,
                borderColor: COLORS.white,  
                backgroundColor: COLORS.white,
                color: COLORS.black,
                borderRadius: 10,
                borderWidth: 2,
                padding: 0,
                fontSize: 14,
                textAlign:'center'
              }}
            />
          </View>

          <View style={{alignItems:'center'}}>
            <MaterialCommunityIcons name ='bag-suitcase' size={30} color={COLORS.black}/>
            <TextInput 
              keyboardType='numeric'
              label={''}
              value={"0"}
              style={{marginHorizontal:10,
                borderColor: COLORS.white,  
                backgroundColor: COLORS.white,
                color: COLORS.black,
                borderRadius: 10,
                borderWidth: 2,
                padding: 0,
                fontSize: 14,
                textAlign:'center'
              }}
            />
          </View>
        </View>
        
        
        {/* Class */}

        <View style={{marginTop:20}}>
            <Text style={{
              fontSize: 20,
              fontFamily: FONTFAMILY.poppins_regular,
              color:COLORS.black,
              paddingLeft:30
          }}>
              Class
          </Text>
        </View>
        <View style={{
          flexDirection: 'row',     
          justifyContent: 'space-between',
          marginTop: 20,
          marginHorizontal: 30,
          gap: 20
        }}> 
          {Classes.map((data: any) => (
              <TouchableOpacity
                key={data}
                onPress={() => {
                  setClass(data);
                }}
                style={[
                  styles.SizeBox,
                  {
                    backgroundColor:
                      data == Class
                      ? COLORS.green
                      : COLORS.white,
                    borderColor:
                      data == Class
                        ? COLORS.green
                        : COLORS.white,
                  },
                ]}>
                <Text
                  style={[
                    styles.SizeText,
                    {
                      fontSize: 16,
                      color:
                        data == Class
                          ? COLORS.white
                          : COLORS.green,
                    },
                  ]}>
                  {data}
                </Text>
              </TouchableOpacity>
            ))}
        </View>

            {/* Transport */}
        <View style={{marginTop:20}}>
            <Text style={{
              fontSize: 20,
              fontFamily: FONTFAMILY.poppins_regular,
              color:COLORS.black,
              paddingLeft:30
          }}>
              Transport
          </Text>
        </View>
        
        <View style={{
          flexDirection: 'row',      
          justifyContent: 'space-between',
          marginTop: 20,
          marginHorizontal: 30,
          gap: 20
        }}>
           {Transport.map((data: any) => (
              <TouchableOpacity
                key={data}
                onPress={() => {
                  setTransort(data);
                }}
                style={[
                  styles.SizeBox,
                  {
                    backgroundColor:
                      data == transport
                      ? COLORS.green
                      : COLORS.white,
                    borderColor:
                      data == transport
                        ? COLORS.green
                        : COLORS.white,
                  },
                ]}>
                <MaterialCommunityIcons
                  name = {data}
                  size={30}
                  color={data == transport
                    ? COLORS.white
                    : COLORS.green}
                  >
                </MaterialCommunityIcons>
              </TouchableOpacity>
            ))}

        </View>
        <TouchableOpacity style={styles.button} onPress={()=>{
          navigation.navigate("Flights",{fromCity,toCity,departureDate:formatDateToISO(departureDate),returnDate: formatDateToISO(returnDate),passengers,Class,});
        }}>
        
          <Text style={{color: 'white',marginLeft: 10,
            }}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TransportBookingScreen

const styles = StyleSheet.create({
  container: {
    width:'100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection:'row',
    margin: 10,
  },
  input: {
    width: '35%',
    marginHorizontal:10,
    borderColor: COLORS.white,  
    backgroundColor: COLORS.white,
    color: COLORS.black,
    borderRadius: 10,
    borderWidth: 2,
    padding: 0,
    fontSize: 14,
    fontFamily:FONTFAMILY.poppins_semibold
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
  swapButton: {
    backgroundColor:COLORS.primaryOrangeHex,
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center',
    marginVertical:20
  },
  SizeBox:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    height:24*2,
    borderRadius:10,
    borderWidth:2
  },
  SizeText: {
    fontFamily: FONTFAMILY.poppins_medium,
  },
  button: {
    height:50,
    flexDirection: 'row',
    backgroundColor: COLORS.primaryOrangeHex,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
    padding: 10,
    borderRadius: 20,
    marginTop:30
  },
})