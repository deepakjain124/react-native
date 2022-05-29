import { StyleSheet, Text,View,Image } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import {foods} from "./api/Food"

const Course = () => {
  const foodCard=({item})=>{
    return <View style={styles.maincontainer}>
      <View style={styles.foodcontainer}>
        <View>
          <Image style={styles.f} source={{item.image}} resizeMode="contain"/>
        </View>
        
      </View>
    </View> 
  }
  return (
   <FlatList data={foods}
   renderItem={foodCard}
   keyExtractor={(item)=>item.id}
   />
  )
}
const styles = StyleSheet.create({})

export default Course
