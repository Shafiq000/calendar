import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react';
import Calendarr from '../components/Calendarr';
import Icon from 'react-native-vector-icons/Ionicons';
const Main = ({ navigation }) => {
    const [language, setLanguage] = useState('Islam');
    const handlePress = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'Islam' ? 'Georgian' : 'Islam'));
    };
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <Pressable onPress={() => navigation.navigate('Setting')}>
                    <Icon name="settings-outline" size={30} color="#fff" left={10} />
                </Pressable>
                <Text style={{ fontSize: 20, fontWeight: "600", color: "#fff", left: 25 }}>Calendar</Text>
                <View style={{ flexDirection: "row", alignItems: "center", height: 50, width: 100, justifyContent: "center" }}>
                    <Pressable style={{ flexDirection: "row", alignItems: "center" }} onPress={handlePress}>
                        <Image
                            style={{ height: 20, width: 20, right: 5 }}
                            source={require("../Images/swap.png")}/>
                        <Text style={{ fontSize: 15, fontWeight: "600", color: "#fff", alignItems: "center" }}>{language}</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.calendar}>
                <Calendarr />
            </View>
        </View>
    );
}
export default Main;
const styles = StyleSheet.create({
    container: {
        flex: 0.09,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#0a9484",
        alignItems: "center",
    },
    calendar: {
        flex: 1,
    }
});
