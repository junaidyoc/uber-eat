import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'

export default function Categories() {
    const items = [
        {
            image: require("../assets/images/shopping-bag.png"),
            text: 'Pick Up'
        },
        {
            image: require("../assets/images/soft-drink.png"),
            text: 'Soft Drinks'
        },
        {
            image: require("../assets/images/bread.png"),
            text: 'Bread Items'
        },
        {
            image: require("../assets/images/fast-food.png"),
            text: 'Fast Food'
        },
        {
            image: require("../assets/images/deals.png"),
            text: 'Deals'
        },
        {
            image: require("../assets/images/coffee.png"),
            text: 'Coffee & Tea'
        }
    ]

    return (
        <View style={{ backgroundColor: '#fff', marginTop: 5, paddingVertical: 10, paddingLeft: 20 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    items.map((item, index)=> (
                        <View key={index} style={{ alignItems: 'center', margin: 10 }}>
                            <Image source={ item.image } style={{ width: 50, height: 40, resizeMode: 'content' }} />
                            <Text style={{ fontSize: 13, fontWeight:900 }}>{ item.text }</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}