import { TouchableOpacity, View } from "react-native";
import { Avatar, Divider, Icon, Text } from "react-native-paper";

const DetailListItem = ({ icon, label, value }) => {
    return (
        <TouchableOpacity>
            <View style={{ flexDirection: "row", padding: 10 }}>
                <Icon source={icon} size={40} />
                <View style={{marginLeft:10}}>
                    <Text variant="labelLarge">{label}</Text>
                    <Text>{value}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default DetailListItem
