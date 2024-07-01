import { StyleSheet, Text, TouchableOpacity, View ,TextInput} from 'react-native'
import React,{useState} from 'react'
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { COLORS, FONTS,FONTFAMILY } from '../../constants';


const HomeScreen = () => {
  const [searchText,setSearchText] = useState('');
  return (
    <View>
      <View>
      <Text style={{
        fontSize: 28,
        fontFamily: FONTFAMILY.poppins_semibold,
        color:COLORS.black,
        paddingLeft:30
    }}>
            Explore the beautiful world !
        </Text>
      </View>
      {/* // search bar */}
      <View style={styles.InputContainer}>
            <TouchableOpacity onPress={() =>{}}>
                <SimpleLineIcons 
                    style={styles.InputIcon}
                    name="magnifier" 
                    size={28} 
                    color={searchText.length> 0 ? COLORS.blue : COLORS.black}/>
            </TouchableOpacity>
            <TextInput 
                style={styles.TextInput}
                placeholder='Search' 
                value={searchText}
                onChangeText={text => setSearchText(text)}
                placeholderTextColor={COLORS.black}/>
        </View>
        {/* BOOking service */}
        <View>
          <Text style={{
            fontSize: 20,
            fontFamily: FONTFAMILY.poppins_semibold,
            color:COLORS.black,
            paddingLeft:30
        }}>
            Booking service
        </Text>
      </View>

        <View style={styles.BookingContainer}>
          <View style={{flexDirection:'column',height:96,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity style={styles.sizeBox}>
              <SimpleLineIcons 
                      style={styles.InputIcon}
                      name="magnifier" 
                      size={28} 
                      color= {COLORS.white}/>
            </TouchableOpacity>
            <Text style={{color:COLORS.black}}>Trips</Text>
          </View>
          
          <View style={{flexDirection:'column',height:96,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity style={styles.sizeBox}>
              <SimpleLineIcons 
                      style={styles.InputIcon}
                      name="magnifier" 
                      size={28} 
                      color= {COLORS.white}/>
            </TouchableOpacity>
            <Text style={{color:COLORS.black}}>Hotel</Text>
          </View>

          <View style={{flexDirection:'column',height:96,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity style={styles.sizeBox}>
              <SimpleLineIcons 
                      style={styles.InputIcon}
                      name="plane" 
                      size={28} 
                      color= {COLORS.white}/>
            </TouchableOpacity>
            <Text style={{color:COLORS.black}}>Transport</Text>
          </View>

          <View style={{flexDirection:'column',height:96,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity style={styles.sizeBox}>
              <SimpleLineIcons 
                      style={styles.InputIcon}
                      name="magnifier" 
                      size={28} 
                      color= {COLORS.white}/>
            </TouchableOpacity>
            <Text style={{color:COLORS.black}}>Events</Text>
          </View>
          
          
        </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  InputContainer:{
    flexDirection:'row',
    margin: 30,
    borderRadius: 20,
    backgroundColor: COLORS.gray,
    alignItems:'center'
},
  InputIcon:{
    marginHorizontal:20,
  },
  TextInput:{
    flex: 1,
    height:20*3,
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: COLORS.black
},
  BookingContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    marginBottom: 5,
    marginHorizontal: 10
  },
  sizeBox:{
    // flex: 1,
    backgroundColor:COLORS.primaryOrangeHex,
    alignItems:'center',
    justifyContent:'center',
    height:24*2,
    borderRadius:10,
    borderWidth:2,
    borderColor: COLORS.primaryOrangeHex
  }
})