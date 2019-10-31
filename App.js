import React from 'react';
import {Alert} from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather'


const API_KEY = 'ef76ef13bcbf5daf467b20a228e048f9';

export default class extends React.Component {
  state = {
    isLoading: true
  }

  getWeather = async(latitude, longitude) => {
    const { data: {
      main: {temp},
      weather
    }} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`
      );
      this.setState({
        isLoading: false,
        condition: weather[0].main,
        temp
      })
  }

  getLocation = async() => {
    try{
      const response = await Location.requestPermissionsAsync();
      const { coords: {latitude, longitude} } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch(error) {
        Alert.alert('너 권한없어', "OK?");
    }
    
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, condition, temp } = this.state;
    return isLoading ? <Loading /> : <Weather temp={temp} condition={condition} />;
  }
}

