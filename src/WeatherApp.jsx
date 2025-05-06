import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp (){
    return (
        <div style={{textAlign: "center"}}>
            <h1>Weather App</h1>
            <SearchBox />
            <InfoBox />
        </div>
    )
}