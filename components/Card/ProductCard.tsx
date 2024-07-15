import React from 'react'

import Product from '@/constants/Product'
import { Image, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './ProductCard.style';


function ProductCard({product}:{product:Product}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
      <Image style={styles.image}  source={{uri:product.imgURL}} 
      />
        <Text style={styles.text}>{product.title}</Text>
        <Text>{product.price}</Text>
      </View>
      

    </SafeAreaView>
  )
}

export default ProductCard