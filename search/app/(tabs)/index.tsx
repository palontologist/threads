import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Image,TextInput, Dimensions } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function TabOneScreen() {
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
       <TextInput placeholder='Search' 
                style={styles.searchBar}
            />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  searchBar:{
    borderWidth:1,
    borderColor:Colors.GRAY,
    padding:4,
    borderRadius:50,
    paddingLeft:10,
    width:Dimensions.get('screen').width*0.53,
    
  },
});
