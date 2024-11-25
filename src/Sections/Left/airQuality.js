import { Stack, Tooltip, Typography, useTheme } from "@mui/material";
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
            fontSize: { xs: "12px", sm: "14px" },
            color: theme.palette.grey[700],
            fontWeight: "600",
          }}
        >
          Air Quality
        </Typography>

        <Stack spacing={2}>
          <Stack spacing={1}>
            <Tooltip title={`${RealAqi?.healthConcern} ${RealAqi?.aqi}`}>
              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "18px" },
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                {`${RealAqi?.healthConcern} ${RealAqi?.aqi}`}
              </Typography>
            </Tooltip>

            <Tooltip title={`${RealAqi?.message}`}>
              <Typography
                sx={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  fontSize: "14px",
                  fontWeight: {xs:400, sm: 500},
                  color: theme.palette.grey[700],
                }}
              >{`${RealAqi?.message}`}</Typography>
            </Tooltip>
          </Stack>

          <AQISlider value={RealAqi?.aqi} />
        </Stack>
      </Stack>
    </>
  );
};

export default AirQuality;
