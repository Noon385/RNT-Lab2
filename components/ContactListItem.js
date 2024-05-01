import { TouchableOpacity,View } from "react-native";
import { Avatar,Divider,Text } from "react-native-paper";
const ContactListItem=({name,avatar,phone,onPress})=>{
    return( 
            <TouchableOpacity onPress={onPress}>
                <View style={{flexDirection:"row",padding:10}}>
                    <Avatar.Image source={{uri:avatar}} size={40}/>
                    <View style={{marginLeft:10}}>
                        <Text style={{fontSize:18,fontWeight:"bold"}}>{name}</Text>
                        <Text style={{fontSize:18,fontWeight:"italic"}}>{phone}</Text>
                    </View>
                </View>
            </TouchableOpacity>
    )
}