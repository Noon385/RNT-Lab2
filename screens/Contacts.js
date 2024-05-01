import { View, Text ,FlatList,View} from 'react-native'
import React from 'react'
import { useEffect,useState } from 'react'
import { ActivityIndicator } from 'react-native-paper'
import {fetchContacts} from "../utility/api"
import ContactListItem from "../components/ContactListItem"

const Contacts = () => {
    const [contacts , setContacts]= useState([])
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState(false)
    useEffect(()=>{
        fetchContacts()
        .then(data=>{
            setContacts(data)
            setLoading(false)
            setError(false)

        })
        .catch(e=>{
            console.log(e)
            setLoading(false)
            setError(true)
        })
    },[])
    const renderItem=({item})=>{
        return(
            <ContactListItem>
                name={item.name}
                phone={item.phone}
                avatar={item.avatar}
                onPress={()=>console.log(item)}
            </ContactListItem>
        )
    }
    return(
        <View style={{flex:1,justifyContent:"center"}}>
            {loading && <ActivityIndicator size={40} color='red'/>}
            {error&& <Text variant="headlineLarge">Error Loading ...</Text>}
            <FlatList 
            data={contacts}
            keyExtractor={item=>item.id}
            renderItem={renderItem}
            /> 
        </View>
    )
}

export default Contacts