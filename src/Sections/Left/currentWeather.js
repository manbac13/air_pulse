import {
  Grid2,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { convertTimeIst, weatherIcon } from "../../Utils/Common";
import useWeather from "../../Hooks/Weather/useWeather";
import { Refresh } from "iconsax-react";
import useAqi from "../../Hooks/Aqi/useAqi";
import useForecast from "../../Hooks/Forecast/useForecast";
import useCities from "../../Hooks/Cities/useCities";
import { useState } from "react";

const CurrentWeather = () => {
  const theme = useTheme();
  const { currentWeather, getCurrentWeatherDataAction } = useWeather();
  const { getAqiAction } = useAqi();
  const { getForecastAction } = useForecast();
  const { location, refreshObject } = useCities();

  const [refreshStatus, setRefreshStatus] = useState(false);

  const handleRefresh = () => {
    getCurrentWeatherDataAction(refreshObject);
    getAqiAction(refreshObject);
    getForecastAction(refreshObject);

    setRefreshStatus(true);

    const enableButtonTimeout = setTimeout(() => {
      setRefreshStatus(false);
    }, 30000);

    return () => {
      clearTimeout(enableButtonTimeout);
    };
  };
  return (
    <>
      <Grid2 container spacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid2 size={12}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Stack>
              <Typography
                sx={{
                  // fontSize: "14px",
                  fontSize: { xs: "12px", sm: "10px", md: "12px", lg: "14px" },
                  color: theme.palette.grey[700],
                  fontWeight: "600",
                }}
              >
                Current Weather
              </Typography>
              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <Typography
                  sx={{
                    // fontSize: "20px",
                    fontSize: {
                      xs: "16px",
                      sm: "14px",
                      md: "16px",
                      lg: "20px",
                    },
                    fontWeight: "600",
                  }}
                >
                  {convertTimeIst(currentWeather?.dt)}
                </Typography>
                <Tooltip
                  arrow
                  placement="right"
                  title="Refresh to get updated data. It takes some time for data to get updated. If it doesn't get updated, then try after some time."
                >
                  <IconButton
                    size="small"
                    onClick={() => handleRefresh()}
                    disabled={refreshStatus}
                  >
                    <Refresh size={16} />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
          </Stack>
        </Grid2>

        <Grid2 size={12}>
          <Stack direction={"row"} spacing={4} alignItems={"center"}>
            <Stack direction={"row"} spacing={2} alignItems={"center"}>
              {weatherIcon(currentWeather?.weather[0]?.main, 60)}
              <Typography
                sx={{
                  fontSize: { xs: "30px", sm: "35px", md: "38px", lg: "40px" },
                  fontWeight: "500",
                }}
              >
                {`${(currentWeather?.main?.temp - 273.15).toFixed(0)}`}&#176;C
              </Typography>
            </Stack>

            <Stack>
              <Typography
                sx={{
                  // fontSize: "14px",
                  fontSize: { xs: "12px", sm: "14px", md: "12px", lg: "14px" },
                  fontWeight: 500,
                  color: theme.palette.grey[700],
                }}
              >
                {currentWeather?.weather[0]?.main}
              </Typography>
              <Typography
                sx={{
                  // fontSize: "14px",
                  fontSize: { xs: "12px", sm: "14px", md: "12px", lg: "14px" },
                  fontWeight: 500,
                  color: theme.palette.grey[700],
                }}
              >
                {`Feels like ${(
                  currentWeather?.main?.feels_like - 273.15
                ).toFixed(0)}`}
                &#176;
              </Typography>
            </Stack>
          </Stack>
        </Grid2>
        <Grid2>
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "14px", md: "16px", lg: "16px" },
            }}
          >
            {`There will be ${
              currentWeather?.weather[0]?.description
            }. The high will be ${(
              currentWeather?.main?.feels_like - 273.15
            ).toFixed(0)}`}
            &#176;
          </Typography>
        </Grid2>
      </Grid2>
    </>
  );
};

export default CurrentWeather;
