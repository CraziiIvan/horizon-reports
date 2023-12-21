import Image from "next/image";
import { Button, LoginBtn } from "../ui/Button";
import Link from "next/link";
import SearchBar from "../ui/SearchBar";
import {
  Cloud,
  CloudLightning,
  CloudRain,
  CloudSun,
  List,
  Snowflake,
  Sun,
  Waves,
} from "@phosphor-icons/react/dist/ssr";

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
  "01n": <Sun size={22} />,
  "02n": <CloudSun size={22} />,
  "03n": <Cloud size={22} />,
  "04n": <Cloud size={22} />,
  "09n": <CloudRain size={22} />,
  "10n": <CloudRain size={22} />,
  "11n": <CloudLightning size={22} />,
  "13n": <Snowflake size={22} />,
  "50n": <Waves size={22} />,
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
      <NavBar />
    </header>
  );
}

function NavBar() {
  return (
    <div className="grid grid-cols-3 items-center h-12 px-5 border-t border-t-neutral-200 border-b-2 border-b-neutral-800">
      <button className=" flex items-center gap-x-1 text-neutral-800 hover:text-neutral-900">
        <List size={20} />
        <span className="text-sm">More sections</span>
      </button>
      <nav className=" justify-self-center">
        <ul className=" flex gap-x-10">
          {["News", "Sports", "Politics", "Health", "Tech"].map((item) => {
            return (
              <Link href={"/"}>
                <li className="text-sm text-neutral-500">{item}</li>
              </Link>
            );
          })}
        </ul>
      </nav>
      <button className=" justify-self-end flex items-center gap-x-2 text-neutral-800 hover:text-neutral-900">
        <span className="text-sm">Watch Live</span>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
      </button>
    </div>
  );
}

export default Header;
