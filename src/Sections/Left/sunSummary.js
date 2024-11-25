import { Stack, Typography, useTheme } from "@mui/material";
import { WiSunrise, WiSunset } from "weather-icons-react";
import useWeather from "../../Hooks/Weather/useWeather";
import { convertTimeIst } from "../../Utils/Common";

const SunSummary = () => {
  const theme = useTheme();
  const { currentWeather } = useWeather();
  return (
    <>
      <Stack spacing={1}>
        <Typography
          sx={{
            fontSize: { xs: "12px", md: "14px" },
            color: theme.palette.grey[700],
            fontWeight: "600",
          }}
        >
          Sun Summary
        </Typography>

        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack spacing={1}>
            <WiSunrise size={30} color={theme.palette.warning.light} />
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                color: theme.palette.grey[700],
              }}
            >
              Sunrise
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "20px" },
                fontWeight: "600",
              }}
            >
              {convertTimeIst(currentWeather?.sys?.sunrise)}
            </Typography>
          </Stack>

          <Stack spacing={1}>
            <WiSunset size={30} color={theme.palette.warning.light} />
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                color: theme.palette.grey[700],
              }}
            >
              Sunset
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "20px" },
                fontWeight: "600",
              }}
            >
              {convertTimeIst(currentWeather?.sys?.sunset)}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default SunSummary;
