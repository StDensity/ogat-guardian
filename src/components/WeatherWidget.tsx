'use client'

import React, { useState, useEffect } from "react";
import { 
  Sun, 
  Snowflake, 
  Cloud, 
  CloudRain, 
  Wind,
  LucideIcon 
} from "lucide-react";

type WeatherCondition = "Sunny" | "Snowy" | "Rainy" | "Windy" | "Cloudy";

interface WeatherData {
  temp: number;
  conditions: WeatherCondition;
  humidity: number;
  windSpeed: string | number;
  windDirection: string;
  icon: LucideIcon;
  forecast: string;
}

type WeatherDataRecord = Record<string, WeatherData>;

const weatherData: WeatherDataRecord = {
    Monday: {
        temp: 35,
        conditions: "Sunny",
        humidity: 80,
        windSpeed: "15",
        windDirection: "NE",
        icon: Sun,
        forecast:
            "Heatwave strikes; local ice cream shops report shortage of flavors as they all melted into 'mystery soup'.",
    },
    Tuesday: {
        temp: -5,
        conditions: "Snowy",
        humidity: 65,
        windSpeed: "25",
        windDirection: "NW",
        icon: Snowflake,
        forecast:
            "Snowmen unionize, demand better carrot benefits and coal pension plans.",
    },
    Wednesday: {
        temp: 28,
        conditions: "Rainy",
        humidity: 90,
        windSpeed: 10,
        windDirection: "SE",
        icon: CloudRain,
        forecast:
            "Rain falls upwards, meteorologists suspect gravity took the day off.",
    },
    Thursday: {
        temp: 0,
        conditions: "Sunny",
        humidity: 45,
        windSpeed: 30,
        windDirection: "S",
        icon: Sun,
        forecast:
            "Sun spotted wearing sunglasses, claims Earth's stare is too intense.",
    },
    Friday: {
        temp: 40,
        conditions: "Windy",
        humidity: 20,
        windSpeed: "50",
        windDirection: "W",
        icon: Wind,
        forecast:
            "Wind reaches record speeds; local toupee shop reports best sales day ever.",
    },
    Saturday: {
        temp: 15,
        conditions: "Cloudy",
        humidity: 70,
        windSpeed: 5,
        windDirection: "E",
        icon: Cloud,
        forecast:
            "Clouds form shapes of various animals, zoologists called in to classify new species.",
    },
    Sunday: {
        temp: -15,
        conditions: "Snowy",
        humidity: 85,
        windSpeed: 20,
        windDirection: "N",
        icon: Snowflake,
        forecast:
            "Blizzard brings beach sand instead of snow, residents confused but not complaining.",
    },
};

const WeatherWidget: React.FC = () => {
    const [currentDay, setCurrentDay] = useState<string>("");
    const [date, setDate] = useState<string>("");

    useEffect(() => {
        const today = new Date();
        setDate(
            today.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            })
        );
        setCurrentDay(today.toLocaleDateString("en-US", { weekday: "long" }));
    }, []);

    const weather = currentDay ? weatherData[currentDay] : null;

    const weekdays: string[] = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const currentDayIndex = weekdays.indexOf(currentDay);
    const nextThreeDays = weekdays.slice(
        currentDayIndex + 1,
        currentDayIndex + 4
    );
    if (nextThreeDays.length < 3) {
        nextThreeDays.push(...weekdays.slice(0, 3 - nextThreeDays.length));
    }

    const IconComponent = weather?.icon;

    return (
        <div className=" p-6 font-serif">
            <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-bold font-serif">
                    River Village
                </h3>

                <p className="text-md">{date}</p>

                {weather && (
                    <>
                        <div className="flex justify-between items-center">
                            <p className="text-5xl font-bold">
                                {weather.temp}°C
                            </p>
                            {IconComponent && <IconComponent size={48} />}
                        </div>

                        <hr className="border-black" />

                        <p className="text-md italic">
                            {weather.forecast}
                        </p>

                        <hr className="border-black" />

                        <div className="flex flex-col space-y-2">
                            <p className="text-md">
                                Humidity: {weather.humidity}%
                            </p>
                            <p className="text-md">
                                Wind: {weather.windSpeed} km/h{" "}
                                {weather.windDirection}
                            </p>
                        </div>

                        <hr className="border-black" />

                        {nextThreeDays.map((day) => {
                            const DayIcon = weatherData[day].icon;
                            return (
                                <div
                                    key={day}
                                    className="flex justify-between items-center"
                                >
                                    <p className="text-sm w-20">
                                        {day}
                                    </p>
                                    <div className="w-10 h-10 flex justify-center items-center">
                                        <DayIcon size={24} />
                                    </div>
                                    <p className="text-sm w-24 text-right">
                                        {weatherData[day].temp}°C |{" "}
                                        {weatherData[day].conditions}
                                    </p>
                                </div>
                            );
                        })}
                    </>
                )}
            </div>
        </div>
    );
};

export default WeatherWidget;