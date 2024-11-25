import { Grid2 } from "@mui/material";
import MainCard from "../../Components/MainCard";
import CurrentConditions from "../../Sections/Left/currentConditions";
import CurrentWeather from "../../Sections/Left/currentWeather";
import useWeather from "../../Hooks/Weather/useWeather";
import AirQuality from "../../Sections/Left/airQuality";
import SunSummary from "../../Sections/Left/sunSummary";

const LeftSection = () => {
  const { currentWeather } = useWeather();
  return (
    <>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12 }}>
          <MainCard>
            <CurrentWeather />
          </MainCard>
        </Grid2>
        {/* current condition cards */}
        <Grid2 size={{ xs: 6, sm: 6, md: 6, lg: 3 }}>
          <CurrentConditions
            title="Humidity"
            value={currentWeather?.main?.humidity}
            unit={"%"}
          />
        </Grid2>
        <Grid2 size={{ xs: 6, sm: 6, md: 6, lg: 3 }}>
          <CurrentConditions
            title="Pressure"
            value={currentWeather?.main?.pressure}
            unit={"hPa"}
          />
        </Grid2>
        <Grid2 size={{ xs: 6, sm: 6, md: 6, lg: 3 }}>
          <CurrentConditions
            title="Visibility"
            value={currentWeather?.visibility}
            unit={"m"}
          />
        </Grid2>
        <Grid2 size={{ xs: 6, sm: 6, md: 6, lg: 3 }}>
          <CurrentConditions
            title="Wind Speed"
            value={currentWeather?.wind?.speed}
            unit={"m/s"}
          />
        </Grid2>
        {/* //------------------------------------ */}

        {/* Air Quality */}
        <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
          <MainCard>
            <AirQuality />
          </MainCard>
        </Grid2>
        {/* -------------------------------------- */}

        {/* Sum Summary */}
        <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
          <MainCard>
            <SunSummary />
          </MainCard>
        </Grid2>
      </Grid2>
    </>
  );
};

export default LeftSection;
