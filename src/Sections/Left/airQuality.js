import { Stack, Typography, useTheme } from "@mui/material";
import useAqi from "../../Hooks/Aqi/useAqi";
import { calculateOverallAQI } from "../../Utils/calculateAqi";
import AQISlider from "../../Components/Aqislider";

const AirQuality = () => {
  const theme = useTheme();
  const { aqiData } = useAqi();

  const RealAqi = aqiData && calculateOverallAQI(aqiData?.list[0]?.components);
  return (
    <>
      <Stack spacing={1} sx={{ marginBottom: 1 }}>
        <Typography
          sx={{
            fontSize: "14px",
            color: theme.palette.grey[700],
            fontWeight: "600",
          }}
        >
          Air Quality
        </Typography>

        <Stack spacing={2}>
          <Stack spacing={1}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              {`${RealAqi?.healthConcern} ${RealAqi?.aqi}`}
            </Typography>
            <Typography
              sx={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
                fontSize: "14px",
                fontWeight: 500,
                color: theme.palette.grey[700],
              }}
            >{`${RealAqi?.message}`}</Typography>
          </Stack>

          <AQISlider value={RealAqi?.aqi} />
        </Stack>
      </Stack>
    </>
  );
};

export default AirQuality;
