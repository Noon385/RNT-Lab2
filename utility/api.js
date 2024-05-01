import 'react-native-get-random-values';
import { Avatar } from 'react-native-paper';
import { v4 } from 'uuid';
const mapContact=(contact)=>{
    const {name,phone,cell,email,picture}=contact;

    return {
        id: v4(),
        name,
        phone,
        cell,
        email,
            avatar:picture.large,
        favorite:Math.random()>0.5,
    }
}
const fecthContacts =async()=>{
    const response =await fetch("https://randomuser.me/api/?results=100&seed=fullstackio")
    const data =await response.json();
    return data.results.map(mapContact);
}
const fecthUserContacts =async()=>{
    const response =await fetch("https://randomuser.me/api/?seed=fullstackio")
    const data =await response.json();
    return data.results.map(mapContact);
}
const fecthRandomContacts =async()=>{
    const response =await fetch("https://randomuser.me/api/")
    const data =await response.json();
    return data.results.map(mapContact);
}
export{fecthContacts,fecthUserContacts,fecthRandomContacts}
