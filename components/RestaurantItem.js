import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function RestaurantItem() {

    const localrestaiurants = [
        {
            name: 'Beachside bar',
            image: 'https://p2d7x8x2.stackpathcdn.com/content/uploads/2013/07/Shimmy-Beach-club.jpg',
            category: ['Cafe', 'Bar'],
            price: '$$',
            review: 10,
            rating: 4.5,
        },
        {
            name: 'Farmhouse Kitchen Thai Cuisine',
            image: 'https://www.businesslist.pk/img/cats/restaurants.jpg',
            category: ['Food', 'Sweets'],
            price: '$$',
            review: 5,
            rating: 3.5,
        },
        {
            name: 'Pakistan Grills',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvQlDD6Yrg-1NZhIJhNyool_BWlfNUNAgFHQ&usqp=CAU',
            category: ['Food', 'Grills'],
            price: '$$',
            review: 15,
            rating: 6,
        },
    ]

    return (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
            {
                localrestaiurants.map((restaurant, index) => (
                    <View key={index} style={{ marginTop: 10, padding: 15, backgroundColor: '#fff' }}>
                        <RestaurantImage image={ restaurant.image } />
                        <RestaurantInfo  />
                    </View>
                ))
            }
        </TouchableOpacity>
    )
}

const RestaurantImage =(props)=> (
    <>
        <Image
            source={{ uri: props.image }}
            style={{ width: '100%', height: 180 }}
        />

        <TouchableOpacity style={{ position: 'absolute', top:20, right: 20 }}>
            <MaterialCommunityIcons name='heart-outline' size={ 26 } color='#fff' />
        </TouchableOpacity>
    </>
); 

const RestaurantInfo =()=> (
    <>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Farmhouse Kitchen Thai Cuisine</Text>
                <Text style={{ fontSize: 13, color: 'gray' }}>30-45 mins</Text>
            </View>
            <View style={{
                backgroundColor: '#eee',
                alignItems: 'center',
                justifyContent: 'center',
                width: 30,
                height: 30,
                borderRadius: 15
            }}>
                <Text style={{ fontWeight: 'bold'}}>4.5</Text>
            </View>
        </View>
    </>
);