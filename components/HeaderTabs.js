import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function HeaderTabs() {

    const [activeTab, setActiveTab] = useState('Delivery')
    
    return (
        <View style={{ flexDirection:'row', alignSelf:'center', marginBottom: 15 }}>
            {/* Header Button */}
            <HeaderButtons text="Delivery" btnColor="black" textColor="white" activeTab={activeTab} setActiveTab={setActiveTab} />
            <HeaderButtons text="Pickup" btnColor="white" textColor="black" activeTab={activeTab} setActiveTab={setActiveTab} />
            {/* Header Button */}
        </View>
    )
}

const HeaderButtons =(props)=> (
    <TouchableOpacity 
        style={{ backgroundColor: props.activeTab===props.text ? 'black' : 'white', paddingVertical: 6, paddingHorizontal: 16, borderRadius: 30 }}
        onPress={()=> props.setActiveTab(props.text)}
    >
        <Text style={{ color: props.activeTab===props.text ? 'white' : 'black', fontWeight: 900 }}>{ props.text }</Text>
    </TouchableOpacity>
)