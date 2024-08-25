import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { PropsWithChildren } from 'react'

import DiseOne from '../assets/One.png'
import DiseTwo from '../assets/Two.png'
import DiseThree from '../assets/Three.png'
import DiseFour from '../assets/Four.png'
import DiseFive from '../assets/Five.png'
import DiseSix from '../assets/Six.png'

// It is to make datatype of image through typescript
type DiseProps = PropsWithChildren <{
  imageUrl: ImageSourcePropType
}>


// Dise uses that datatype and pass that prop into Image tag
const Dise = ({imageUrl}:DiseProps):JSX.Element => {
  return(
    <View>
      <Image style={styles.diceImage} source={imageUrl}/>
    </View>
  )
}

export default function App(): JSX.Element {

  // useState uses the specific Datatype which does not accept any string
  const [diseOne, setDiseOne] = useState <ImageSourcePropType>(DiseOne)

  // This is used to get a random value between 1 to 6 with the help of switch case
  const rollDiseOnTap =() => {
    let randomNumber = Math.floor(Math.random() *6 +1 )
    
    switch (randomNumber) {
      case 1:
        setDiseOne(DiseOne)
        break;
      case 2:
        setDiseOne(DiseTwo)
        break;
      case 3:
        setDiseOne(DiseThree)
        break;
      case 4:
        setDiseOne(DiseFour)
        break;
      case 5:
        setDiseOne(DiseFive)
        break;
      case 6:
        setDiseOne(DiseSix)
        break;
      default:
        setDiseOne(DiseOne)
        break;
    }
  }
  

  return (
    <View style={styles.container}>
      <Dise imageUrl={diseOne}/>
      <Pressable onPress={rollDiseOnTap}>
        <Text style={styles.rollDiceBtnText}>
          Tap To Roll
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
})