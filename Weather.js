import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions= {
    Haze: {
        iconName: 'weather-hail',
        gradient: ["#4DA0B0", "#D39D38"],
        title: 'Haze',
        subtitle: 'Haze Good Luck'
    },
    ThunderStorm: {
        iconName: 'weather-cloudy',
        gradient: ['#00b09b', '#96c93d'],
        title: 'ThunderStorm',
        subtitle: 'ThunderStorm Good Luck'
    },
    Rain: {
        iconName: 'weather-fog',
        gradient: ['#CAC531', '#F3F9A7'],
        title: 'Rain',
        subtitle: 'Rain Good Luck'
    },
    Snow: {
        iconName: 'weather-hail',
        gradient: ['#800080', '#ffc0cb'],
        title: 'Snow',
        subtitle: 'Snow Good Luck'
    },
    Atmosphere: {
        iconName: 'weather-night',
        gradient: ['#00F260', '#0575E6'],
        title: 'Atmosphere',
        subtitle: 'Atmosphere Good Luck'
    },
    Clear: {
        iconName: 'weather-partlycloudy',
        gradient: ['#fc4a1a', '#f7b733'],
        title: 'Clear',
        subtitle: 'Clear Good Luck'
    },
    Cloud: {
        iconName: 'weather-pouring',
        gradient: ['#74ebd5', '#ACB6E5'],
        title: 'Cloud',
        subtitle: 'Cloud Good Luck'
    },
    Mist: {
        iconName: 'weather-rainy',
        gradient: ['#6D6027', '#D3CBB8'],
        title: 'Mist',
        subtitle: 'Mist Good Luck'
    },
    Dust: {
        iconName: 'weather-snowy',
        gradient: ['#e1eec3', '#f05053'],
        title: 'Dust',
        subtitle: 'Dust Good Luck'
    },
    Drizzle: {
        iconName: 'weather-snowy-rainy',
        gradient: ['#22c1c3', '#fdbb2d'],
        title: 'Drizzle',
        subtitle: 'Drizzle Good Luck'
    },
}

export default function Weather({temp, condition}) {
    return <LinearGradient
          colors={weatherOptions["Haze"].gradient}
          style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={86} name={weatherOptions[condition].iconName || "weather-sunset"} color="white"></MaterialCommunityIcons>
                <Text style={styles.temp}>{temp}</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "ThunderStorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Cloud",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: 'white',
        fontSize: 40,
        fontWeight: '600',
        marginBottom: 10
    },
    subtitle: {
        fontWeight: '600',
        color: 'white',
        fontSize: 24,
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})