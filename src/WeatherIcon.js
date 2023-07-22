import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": { icon: "CLEAR_DAY", color: "#FFE263" },
    "01n": { icon: "CLEAR_NIGHT", color: "#FFE263" },
    "02d": { icon: "PARTLY_CLOUDY_DAY", color: "#D4CD4E" },
    "02n": { icon: "PARTLY_CLOUDY_NIGHT", color: "#A3A06A" },
    "03d": { icon: "PARTLY_CLOUDY_DAY", color: "#A3A06A" },
    "03n": { icon: "PARTLY_CLOUDY_DAY", color: "#D4CD4E" },
    "04d": { icon: "CLOUDY", color: "#5B6085" },
    "04n": { icon: "CLOUDY", color: "#5B6085" },
    "09d": { icon: "RAIN", color: "#548CC4" },
    "09n": { icon: "RAIN", color: "#548CC4" },
    "010d": { icon: "RAIN", color: "#548CC4" },
    "010n": { icon: "RAIN", color: "#548CC4" },
    "011d": { icon: "RAIN", color: "#548CC4" },
    "011n": { icon: "RAIN", color: "#548CC4" },
    "013d": { icon: "SNOW", color: "lightblue" },
    "013n": { icon: "SNOW", color: "lightblue" },
    "050d": { icon: "FOG", color: "#858585" },
    "050n": { icon: "FOG", color: "#858585" },
  };

  const weatherInfo = codeMapping[props.code];

  return (
    <ReactAnimatedWeather
      icon={weatherInfo ? weatherInfo.icon : "CLEAR_DAY"}
      color={weatherInfo ? weatherInfo.color : "yellow"}
      size={60}
      animate={true}
    />
  );
}
