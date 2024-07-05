import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/CustomHeader '
const SelectSeatsScreen = ({navigation}:any) => {
  return (
    <View>
      <CustomHeader title='Select Seats' onBackPress={()=>navigation.goBack()}/>
    </View>
  )
}

export default SelectSeatsScreen

const styles = StyleSheet.create({})