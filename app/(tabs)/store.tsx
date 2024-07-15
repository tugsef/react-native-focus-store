import React from "react";

import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  FlatList,
  View,
} from "react-native";
import products from "@/assets/data/focus_store_data.json";
import ProductCard from "@/components/Card/ProductCard";

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>FocusStore</Text>
        <TextInput
          style={styles.input}
          onChangeText={() => "Test"}
          placeholder="Search..."
          keyboardType="numeric"
        />
      </View>

      <FlatList
        keyExtractor={(product) => product.id.toString()}
        data={products}
        renderItem={(product) => <ProductCard product={product.item} />}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
  },
  input: {
    height: 40,
    backgroundColor: "#C7C8CC",
    margin: 4,
    paddingStart: 10,
    paddingEnd: 10,
    borderRadius: 10,
  },
  header:{
    padding:4,
  },
  text:{
    fontSize:30,
    padding:4,
    letterSpacing: -2,
    fontWeight:"bold"
  }
});
