import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View, Image, FlatList } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
// import { FlatList } from 'react-native-gesture-handler';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';


const data = [
  {
    id: '123',
    title: 'Economy',
    multiplier: 2,
    image: "https://links.papareact.com/3pn"
  },
  {
    id: '456',
    title: 'Minivan',
    multiplier: 3,
    image: "https://links.papareact.com/5w8"
  },
  {
    id: '789',
    title: 'Lada',
    multiplier: 1,
    image: "https://links.papareact.com/7pf"
  },
];

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation)
  const mileToNumber = parseInt(travelTimeInformation?.distance?.text)
  const kilometter = mileToNumber * 1.60934;
  const price = (kilometter * 15) + 95;
  return (
    <SafeAreaView style={tw`bg-white flex-grow`} >
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
        >
          <Icon name="chevron-left" type="fontawsome" />
        </TouchableOpacity>
        <Text style={tw`text-center p-5 text-xl`}>Select a Ride - {kilometter.toFixed(2)}Km</Text>
      </View>
      <FlatList data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row items-center justify-between px-10 ${item.id === selected?.id && 'bg-gray-200'}`}
          >

            <Image
              style={{
                width: 70,
                height: 70,
                resizeMode: "contain"
              }}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>{travelTimeInformation?.duration?.text} Travel Time</Text>
            </View>
            <Text style={tw`text-xl`}>{price.toFixed(0) * multiplier} Birr</Text>
          </TouchableOpacity>
        )}
      />
      <View>
        <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 ${!selected && 'bg-gray-300'} `}>
          <Text style={tw`text-center text-white text-xl`} >Choose {selected?.title} </Text>
        </TouchableOpacity>


      </View>


    </SafeAreaView>

  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})