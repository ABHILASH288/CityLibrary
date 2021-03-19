import React, { useState } from "react";
import { Image, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import AppMenu  from '../components/AppMenu';

const DATA = [
  {"id":1,"title":"Vivek Singhwal","author":"vivek@pyther.com","description":"565656565","cover":"India"},
  {"id":2,"title":"Rama","author":"rama@pyther.com","description":"565656565","cover":"India"},
  {"id":3,"title":"Kavita","author":"kavita@pyther.com","description":"565656565","cover":"India"},
  {"id":4,"title":"Krishna","author":"vivek@pyther.com","description":"565656565","cover":"India"},
  {"id":5,"title":"Rahim","author":"vivek@pyther.com","description":"565656565","cover":"India"}];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <View
      style={{
        flexDirection: "column",
        height: 100
      }}
    >
      <View style={ {flex: 2 }} >
      <View style={ {flex: 2, flexDirection: "row",}} >
        <View style={ {flex: 6}} >
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={ {flex: 1}} >
          <Image
          style={styles.tinyLogo}
          source={{
            uri: 'http://training.pyther.com/icons/edit.png?9',
          }}
        />
       </View>
        <View style={ {flex: 1}} >
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'http://training.pyther.com/icons/delete.png',
          }}
        />
        </View>
      </View>
      </View>
      <View style={ {flex: 2,padding:2, flexDirection: "row",}} >
        <View style={ {flex: 2}} >
          <Text>{item.author}</Text>
        </View>
        <View style={ {flex: 2}} >
          <Text>{item.description}</Text>
        </View>
      </View>
      <View style={{flex: 1}} >
        <Text>{item.cover}</Text>
      </View>
      </View>
  </TouchableOpacity>
);

const Customers = (props) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <View>
      <AppMenu  navigation={props.navigation}/>
      <Button title="Add Customer"></Button>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 32,
  },
});

export default Customers;
