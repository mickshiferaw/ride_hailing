import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API } from "@env";
import { useDispatch } from "react-redux";
import { selectDestination, selectOrigin, setDestination, setOrigin } from "../slices/navSlice";
import NavFavorites from '../components/NavFavorites';

const HomeScreen = () => {
  const dispatch = useDispatch()
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain'
          }}
          source={{
            uri: "a"
          }}
        />
        <GooglePlacesAutocomplete
          placeholder='where from?'
          styles={{
            container: {
              flex: 0
            },
            textInput: {
              fontSize: 18
            }
          }}
          onPress={(data, details = null) => {
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description,
            }));
            dispatch(setDestination(null))
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_API,
            language: 'en'
          }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}

        />
        <NavOptions />
        <NavFavorites />
      </View>

    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

});










  // //data:image/png;base64,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