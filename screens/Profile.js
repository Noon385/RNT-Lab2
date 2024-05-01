import { View, Text ,FlatList,View} from 'react-native'
import { useEffect,useState } from 'react'
import { ActivityIndicator, Avatar } from 'react-native-paper'
import {fetchRandomContacts} from "../utility/api"
import DetailListItem from "../components/DetailListItem"

const Profile = () => {
    const[contact, setContact]=useState([])
    useEffect(()=>{
        fetchRandomContacts()
        .then(data=>{
            console.log(data)
            setContact(data)
        })
        .catch(e=>console.log(e))
    },[])

  return (
    <View style={{flex:1}}>
      <View style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"aqua",
      }}>
        <Avatar.Image size={100} source={{uri:avatar}}/>
        <Text variant ="headlineLarge" style={{color:"white"}}>{name}</Text>
        <Text>
            <Icon source="phone"/>
            {phone}
        </Text>
      </View>
      <View style={{flex:1}}>
      <DetailListItem icon="email" label="email" value={email}/>
      <DetailListItem icon="phone" label="Work" value={phone}/>
      <DetailListItem icon="cellphone" label="Personal" value={cell}/>
      

      </View>
    </View>
  )
}

export default Profile