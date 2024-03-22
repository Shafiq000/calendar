import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View, Linking, Alert, Share, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useAuthContext } from '../Navigation/AuthContext';
const Setting = ({ navigation }) => {
    const { themeMode, toggleThemeMode } = useAuthContext();
    const aboutUsURL = 'https://mslm.io/jamaat/about';
    const privacyUsURL = 'https://mslm.io/jamaat/privacy-policy';
    const handleAboutUsPress = () => {
        Linking.openURL(aboutUsURL);
    };
    const handlePrivacyPress = () => {
        Linking.openURL(privacyUsURL);
    };
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'Jammat Calendar https://play.google.com/store/apps/details?id=com.mslm.islamic.calendar',
            });
            if (result.action === Share.sharedAction) {
                // Handle share success
            }
        } catch (error) {
            Alert.alert(error.message);
        }
    };
    return (
        <SafeAreaView style={[styles.container, themeMode === "dark" && { backgroundColor: "#1C1C22" }]}>
            <View style={styles.setting}>
                <Pressable hitSlop={30} onPress={() => navigation.goBack()}>
                    <Icon name="left" size={20} color="#fff" left={10} />
                </Pressable>
                <Text style={styles.settingIcon}>Settings</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
                <Pressable onPress={handleAboutUsPress}>
                    <View style={styles.items}>
                        <Text style={[styles.title, themeMode === "dark" && { color: "#fff" }]}>About Us</Text>
                        <Icon name="right" size={18} color="#000" style={[styles.icon, themeMode === "dark" && { color: "#fff" }]} />
                    </View>
                </Pressable>
                <Pressable onPress={handlePrivacyPress}>
                    <View style={styles.items}>
                        <Text style={[styles.title, themeMode === "dark" && { color: "#fff" }]}>Privacy Policy</Text>
                        <Icon name="right" size={18} color="#000" style={[styles.icon, themeMode === "dark" && { color: "#fff" }]} />
                    </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("MoreApps")}>
                    <View style={styles.items}>
                        <Text style={[styles.title, themeMode === "dark" && { color: "#fff" }]}>More Apps</Text>
                        <Icon name="right" size={18} color="#000" style={[styles.icon, themeMode === "dark" && { color: "#fff" }]} />
                    </View>
                </Pressable>
                <Pressable onPress={onShare}>
                    <View style={styles.items}>
                        <Text style={[styles.title, themeMode === "dark" && { color: "#fff" }]}>Share App</Text>
                    </View>
                </Pressable>
                <View style={styles.items}>
                    <Text style={[styles.title, themeMode === "dark" && { color: "#fff" }]}>Dark Mode</Text>
                    <Switch
                        trackColor={{ false: '#B2B2B2', true: '#5BB5AB' }}
                        thumbColor={themeMode === "dark" ? '#0a9484' : '#f4f3f4'}
                        onValueChange={toggleThemeMode}
                        value={themeMode === "dark"}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};
export default Setting;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    setting: {
        flexDirection: "row",
        backgroundColor: "#0a9484",
        gap: 115,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: "center",
        flex: .11,
    },
    settingIcon: {
        color: "#FFF",
        fontSize: 22,
        fontWeight: "700",
    },
    items: {
        flexDirection: "row",
        borderBottomColor: '#DCDCDC',
        borderBottomWidth: 1,
        justifyContent: "space-between",
        padding: 25
    },
    title: {
        fontSize: 15,
        fontWeight: "500"
    },

});
