import { Grid2, Stack, Typography, useTheme } from "@mui/material";
import MainCard from "../../Components/MainCard";
import { useEffect, useState } from "react";
import useWeather from "../../Hooks/Weather/useWeather";
import instance from "../../Api";
import { weatherIcon } from "../../Utils/Common";

const RightSection = () => {
  const theme = useTheme();
  const { activeCities } = useWeather();

  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchweatherDataForActiveCities = async () => {
      const activeCitiesPromis = activeCities
        ?.filter((item) => item.status === "active")
        .map((item) =>
          instance.get(`/data/2.5/weather?lat=${item.lat}&lon=${item.lon}`)
        );
      const results = await Promise.all(activeCitiesPromis);
      setWeatherData(results.map((result) => result.data));
    };
    fetchweatherDataForActiveCities();
  }, [activeCities]);

  console.log("weather data", weatherData);
  return (
    <>
      <Grid2 container spacing={1}>
        {weatherData?.map((item, index) => (
          <Grid2 size={{ lg: 12, md: 3, sm: 6, xs: 12 }} key={index}>
            <MainCard>
              <Stack spacing={1}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: theme.palette.grey[700],
                    fontWeight: "600",
                  }}
                >
                  {item.name}
                </Typography>
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                  <Stack direction={"row"} spacing={1} alignItems={"center"}>
                    {weatherIcon(item?.weather[0]?.main, 30)}
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: "500",
                      }}
                    >
                      {`${(item?.main?.temp - 273.15).toFixed(0)}`}
                      &#176;C
                    </Typography>
                  </Stack>

                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 500,
                      color: theme.palette.grey[700],
                    }}
                  >
                    {item?.weather[0]?.main}
                  </Typography>
                </Stack>
              </Stack>
            </MainCard>
          </Grid2>
        ))}
      </Grid2>
    </>
  );
};

export default RightSection;
