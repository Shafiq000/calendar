import React from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';
import eventData from '../data.json';
import { useAuthContext } from '../Navigation/AuthContext';
const Events = ({ selectedDate }) => {
    const { themeMode } = useAuthContext();
    const renderEvents = (events) => {
        return Object.keys(events).map((eventName, index) => {
            const event = events[eventName];
            const gregorianDate = new Date(event.gregorianDate);
            const formattedDate = gregorianDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            // const hijriDate = new Date(event.hijriDate);
            // const formattedHijriDate = hijriDate.toLocaleDateString('ar-islamic', { day: 'numeric', month: 'long', year: 'numeric' });
            return (
                <View style={[styles.item, themeMode === "dark" && { backgroundColor: "#1C1C22" }, event.gregorianDate === selectedDate ? styles.selectedEvent(themeMode) : null,]} key={index}>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={[styles.title, themeMode === "dark" && { color: "#fff" }]}>{eventName}</Text>
                        {/* <Text style={styles.hijriDate}>{formattedHijriDate}</Text> */}
                    </View>
                    <Text style={[styles.gregorianDate, themeMode === "dark" && { color: "#fff" }]}>{formattedDate}</Text>
                </View>
            );
        });
    };
    const events2023 = eventData["2023"];
    const events2024 = eventData["2024"];
    const events = { ...events2023, ...events2024 };
    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.item, { borderTopColor: '#DCDCDC', borderTopWidth: 1 }, themeMode === "dark" && { backgroundColor: "#1C1C22" }]}>
                <Text style={[{ fontSize: 25, fontWeight: "500" }, themeMode === "dark" && { color: "#fff" }]}>Events</Text>
            </View>
            {renderEvents(events)}
        </SafeAreaView>
    );
}
export default Events;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: '#DCDCDC',
        borderBottomWidth: 1,
        padding: 19,
    },
    title: {
        fontSize: 17,
        fontWeight: "600",
    },
    gregorianDate: {
        fontSize: 17,
        fontWeight: "600",
    },
    hijriDate: {
        fontSize: 12,
        fontWeight: "600",
        textAlign: "left"
    },
    selectedEvent: (themeMode) => ({
        backgroundColor: themeMode === "dark" ? '#91CDC7' : '#DCF2EF',
    })
});
