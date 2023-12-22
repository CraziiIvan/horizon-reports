import Image from "next/image";
import { Button, LoginBtn } from "../ui/Button";
import Link from "next/link";
import SearchBar from "../ui/SearchBar";
import {
  Cloud,
  CloudLightning,
  CloudMoon,
  CloudRain,
  CloudSun,
  List,
  Snowflake,
  Sun,
  Waves,
} from "@phosphor-icons/react/dist/ssr";
import { NavBar } from "./NavBar";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const currentDate = new Date();

const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const day = currentDate.getDay();
const date = currentDate.getDate();

async function getWeatherData() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=16.8409&lon=96.199379&units=metric&appid=28d643b869a136f535aedb13963224cb`,
    {
      next: {
        revalidate: 5,
      },
    }
  );
  const result = await response.json();

  return result;
}

const weatherIcons = {
  "01d": <Sun size={22} />,
  "02d": <CloudSun size={22} />,
  "03d": <Cloud size={22} />,
  "04d": <Cloud size={22} />,
  "09d": <CloudRain size={22} />,
  "10d": <CloudRain size={22} />,
  "11d": <CloudLightning size={22} />,
  "13d": <Snowflake size={22} />,
  "50d": <Waves size={22} />,
  "01n": <Sun weight="duotone" size={22} />,
  "02n": <CloudMoon weight="duotone" size={22} />,
  "03n": <Cloud weight="duotone" size={22} />,
  "04n": <Cloud weight="duotone" size={22} />,
  "09n": <CloudRain weight="duotone" size={22} />,
  "10n": <CloudRain weight="duotone" size={22} />,
  "11n": <CloudLightning weight="duotone" size={22} />,
  "13n": <Snowflake weight="duotone" size={22} />,
  "50n": <Waves weight="duotone" size={22} />,
};

async function Header() {
  const weatherData = await getWeatherData();
  const iconId = weatherData.weather[0].icon;

  return (
    <header>
      <div className="h-12 px-3 border-b border-b-neutral-200 flex items-center justify-between">
        <div className="flex items-center gap-x-5 text-neutral-900 ">
          <span className="cursor-pointer">EN</span>
        </div>
        <div className="flex gap-x-5">
          <LoginBtn />
          <Button>Subscribe</Button>
        </div>
      </div>
      <div className=" grid grid-cols-3 items-center py-8 px-5">
        <div className="justify-self-start">
          <div className=" flex items-center gap-x-2 mb-1">
            {weatherIcons[iconId as keyof typeof weatherIcons]}
            <span>{weatherData.main.temp}°C</span>
            <span className="text-neutral-200">|</span>
            {weatherData.name}
          </div>
          <h5 className=" text-sm text-neutral-500">{`${days[day]}, ${months[month]} ${date}, ${year}`}</h5>
        </div>
        <div className=" justify-self-center">
          <Link href={"/"}>
            <Image
              alt="header_logo"
              src={"/logo.svg"}
              height={80}
              width={254}
            />
          </Link>
        </div>
        <div className=" justify-self-end">
          <SearchBar />
        </div>
      </div>
      <NavBar/>
    </header>
  );
}



export default Header;
