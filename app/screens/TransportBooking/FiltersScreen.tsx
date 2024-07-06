import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React,{useState,useCallback} from 'react'
import CustomHeader from '../../components/CustomHeader '
import { COLORS, FONTFAMILY } from '../../constants'
import { ScrollView } from 'react-native-gesture-handler'
import Slider  from 'rn-range-slider';
import { TextInput,RadioButton } from 'react-native-paper';
import Thumb from '../SliderComponent/Thumb'
import RailSelected from '../SliderComponent/RailSelected'
import Rail from '../SliderComponent/Rail'
import Notch from '../SliderComponent/Notch'
import Label from '../SliderComponent/Label'
import Icon from 'react-native-vector-icons/MaterialIcons';

const FiltersScreen = ({navigation}:any) => {
  const [rangeDisabled, setRangeDisabled] = useState(false);
  const [lowPrice, setLowPrice] = useState(0);
  const [highPrice, setHighPrice] = useState(300);
  const [MinPrice, setMinPrice] = useState(0);
  const [MaxPrice, setMaxPrice] = useState(300);
  const [floatingLabel, setFloatingLabel] = useState(false);
  const times = [
    {time:'12AM - 06AM',value:{min:0,max :6}},
    {time:'06AM - 12PM',value:{min:6,max :12}},
    {time:'12PM - 06PM',value:{min:12,max :18}},
    {time:'06PM - 12AM',value:{min:18,max :24}},
  ]
  const [departureTime, setDepartureTime] = useState({min:0,max :6});
  const [arrivalTime, setArrivalTime] = useState({min:0,max :6});
  const [sortBy, setSortBy] = useState('');
  const [facilities, setFacilities] = useState({
    coffee: false,
    food: false,
    wifi: false,
    ac: false,
  });
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback((value:any) => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const renderThumb = useCallback(
    (name: 'high' | 'low') => <Thumb name={name} />,
    [],
  );
  
  const handleValueChange = useCallback((lowValue:any, highValue:any) => {
  setLowPrice(lowValue);
  setHighPrice(highValue);
}, []);
  
  const handleReset = (()=>{
    setArrivalTime({min:0,max :6});
    setDepartureTime({min:0,max :6});
    setLowPrice(0);
    setHighPrice(300);
    setFacilities({
      coffee: false,
      food: false,
      wifi: false,
      ac: false,
    });
    setSortBy('');
  })

  return (
    <View style={{backgroundColor:COLORS.gray,flex:1}}>
      <CustomHeader title='Filters' onBackPress={()=>navigation.goBack()}/>
      <View>
        <View>
            <Text style={{
              fontSize: 15,
              fontFamily: FONTFAMILY.poppins_semibold,
              color:COLORS.black,
              paddingLeft:30
          }}>
              Departure
          </Text>
        </View>

        <ScrollView horizontal style={styles.optionContainer} showsHorizontalScrollIndicator={false}>
          {times.map((Time) => (
            <TouchableOpacity
              key={Time.time}
              style={[styles.optionButton, departureTime.min == Time.value.min&& departureTime.max == Time.value.max&& styles.selectedButton]}
              onPress={() => setDepartureTime(Time.value)}
            >
              <Text style={[styles.optionText,departureTime.min == Time.value.min&& departureTime.max == Time.value.max&& styles.selectedText]}>{Time.time}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView >
      </View>

      <View>
        <View>
            <Text style={{
              fontSize: 15,
              fontFamily: FONTFAMILY.poppins_semibold,
              color:COLORS.black,
              paddingLeft:30
          }}>
              Arrival
          </Text>
        </View>

        <ScrollView horizontal style={styles.optionContainer} showsHorizontalScrollIndicator={false}>
          {times.map((Time) => (
            <TouchableOpacity
              key={Time.time}
              style={[styles.optionButton, arrivalTime.min == Time.value.min&& arrivalTime.max == Time.value.max&& styles.selectedButton]}
              onPress={() => setArrivalTime(Time.value)}
            >
              <Text style={[styles.optionText,arrivalTime.min == Time.value.min&& arrivalTime.max == Time.value.max&& styles.selectedText]}>{Time.time}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView >
      </View>
      
      <View>
        <View>
            <Text style={{
              fontSize: 15,
              fontFamily: FONTFAMILY.poppins_semibold,
              color:COLORS.black,
              paddingLeft:30
          }}>
              Price
          </Text>
        </View>

        <Slider
          style={styles.slider}
          min={MinPrice}
          max={MaxPrice}
          low={lowPrice}
          high={highPrice}
          step={1}
          disableRange={rangeDisabled}
          floatingLabel={floatingLabel}
          renderThumb={renderThumb}
          renderRail={renderRail}
          renderRailSelected={renderRailSelected}
          renderLabel={renderLabel}
          renderNotch={renderNotch}
          onValueChanged={handleValueChange}
        />

        <View style={styles.priceText}>
        <TextInput 
          keyboardType='numeric'
          label={"From"}
          style={styles.input}
          value={'$'+lowPrice.toString()}
        />
        
        
        <TextInput 
          label={"To"}
          style={styles.input}
          value={'$'+highPrice.toString()}
        />
        </View>
      </View>

      <View>
        <View>
            <Text style={{
              fontSize: 15,
              fontFamily: FONTFAMILY.poppins_semibold,
              color:COLORS.black,
              paddingLeft:30
          }}>
              Facilities
          </Text>
        </View>

        <View style={styles.facilitiContainer}>
          <TouchableOpacity style={[styles.sizeBox,facilities.coffee && styles.sizeBoxSelect]} onPress={()=>{setFacilities(prevFacilities => ({...prevFacilities,coffee: !prevFacilities.coffee}));}}>
            <Icon name="free-breakfast" size={24} color={facilities.coffee? COLORS.white: COLORS.green} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.sizeBox,facilities.food && styles.sizeBoxSelect]} onPress={()=>{setFacilities(prevFacilities => ({...prevFacilities,food: !prevFacilities.food}));}}>
            <Icon name="restaurant-menu" size={24} color={facilities.food? COLORS.white: COLORS.green} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.sizeBox,facilities.wifi && styles.sizeBoxSelect]} onPress={()=>{setFacilities(prevFacilities => ({...prevFacilities,wifi: !prevFacilities.wifi}));}}>
            <Icon name="wifi" size={24} color={facilities.wifi? COLORS.white: COLORS.green} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.sizeBox,facilities.ac && styles.sizeBoxSelect]} onPress={()=>{setFacilities(prevFacilities => ({...prevFacilities,ac: !prevFacilities.ac}));}}>
            <Icon name="ac-unit" size={24} color={facilities.ac? COLORS.white: COLORS.green} />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View>
            <Text style={{
              fontSize: 15,
              fontFamily: FONTFAMILY.poppins_semibold,
              color:COLORS.black,
              paddingLeft:30
          }}>
              Sort By
          </Text>
        </View>

        <View>
          <View style={{flexDirection:'row',paddingLeft:20}}>
            <RadioButton value='arrivalTime' status={sortBy ==='arrivalTime'? 'checked': 'unchecked'} onPress={()=>setSortBy('arrivalTime')} color={COLORS.green}/>
            <Text style={{justifyContent:'center',fontSize:20,color:COLORS.black}}>Arrival Time</Text>
          </View>
          <View style={{flexDirection:'row',paddingLeft:20}}>
            <RadioButton value='departureTime' status={sortBy ==='departureTime'? 'checked': 'unchecked'} onPress={()=>setSortBy('departureTime')} color={COLORS.green}/>
            <Text style={{justifyContent:'center',fontSize:20,color:COLORS.black}}>Departure Time</Text>
          </View>
          <View style={{flexDirection:'row',paddingLeft:20}}>
            <RadioButton value='price' status={sortBy ==='price'? 'checked': 'unchecked'} onPress={()=>setSortBy('price')} color={COLORS.green}/>
            <Text style={{justifyContent:'center',fontSize:20,color:COLORS.black}}>Price</Text>
          </View>
          <View style={{flexDirection:'row',paddingLeft:20}}>
            <RadioButton value='lowestFare' status={sortBy ==='lowestFare'? 'checked': 'unchecked'} onPress={()=>setSortBy('lowestFare')} color={COLORS.green}/>
            <Text style={{justifyContent:'center',fontSize:20,color:COLORS.black}}>Lowest fare</Text>
          </View>
          <View style={{flexDirection:'row',paddingLeft:20}}>
            <RadioButton value='duration' status={sortBy ==='duration'? 'checked': 'unchecked'} onPress={()=>setSortBy('duration')} color={COLORS.green}/>
            <Text style={{justifyContent:'center',fontSize:20,color:COLORS.black}}>Duration</Text>
          </View>
        </View>
      </View>

      <View style={{flexDirection:'row',padding:10,justifyContent:'space-evenly',alignItems:'center'}}>
        <TouchableOpacity onPress={()=> handleReset()} style={{
          height:60,
          width:180,
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 20,
          borderRadius: 20,
          marginTop:10,
          backgroundColor:COLORS.white
        }} >
        
          <Text style={{color: COLORS.primaryOrangeHex,marginLeft: 10, fontFamily:FONTFAMILY.poppins_bold,textAlign:'center',fontSize:18
            }}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} >
        
          <Text style={{color: 'white',marginLeft: 10, fontFamily:FONTFAMILY.poppins_bold,textAlign:'center',fontSize:18
            }}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default FiltersScreen

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 0,
    marginLeft: 20,
    marginBottom: 20,
  },
  optionButton: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.white,
    backgroundColor:COLORS.white,
    margin: 5,
  },
  selectedButton: {
    backgroundColor: COLORS.green,
    borderColor: COLORS.green,
  },
  optionText: {
    color: COLORS.green,
  },
  selectedText:{
    color: COLORS.white
  },
  slider:{
    marginHorizontal:15,
  },
  priceText:{
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
  facilitiContainer:{
    marginBottom:20,
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 20
  },
  sizeBox:{
    backgroundColor:COLORS.white,
    borderColor: COLORS.white,
    alignItems:'center',
    justifyContent:'center',
    height:24*2,
    width:24*2,
    borderRadius:10,
    borderWidth:2,
    marginRight: 20
  },
  sizeBoxSelect:{
    backgroundColor:COLORS.green,
    borderColor:COLORS.green
  },
  button:{
    height:60,
    width:180,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    borderRadius: 20,
    marginTop:10,
    backgroundColor:COLORS.primaryOrangeHex
  }

})