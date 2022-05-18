import React from 'react'
import { View } from 'react-native'
import {Card ,Button, Title,TextInput ,Paragraph } from 'react-native-paper'

const Card = () => {
  return (
    <View>
         <Card style={Styles.container}>
        <Card.Content>
            <Title>Geeks For Geeks</Title>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.abplive.com%2Fentertainment%2Ftmkoc-actor-amit-bhatt-aka-bapuji-resembles-shah-rukh-khan-in-this-picture-1848297&psig=AOvVaw3zdAW5Dl44fonV2JdNPtvL&ust=1652804501426000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIio_Nu25PcCFQAAAAAdAAAAABAD' }} />
       <Card.Content>
        <Paragraph>A Computer Science portal for Geeks</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button><a href="https://www.geeksforgeeks.org/create-a-card-view-in-react-native-using-react-native-paper/">Add To Favourites</a></Button>
        </Card.Actions>
      </Card>
      
    </View>
    )
}

export default Card