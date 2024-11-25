import {
  WiBarometer,
  WiDust,
  WiHumidity,
  WiStrongWind,
} from "weather-icons-react";
import MainCard from "../../Components/MainCard";
import { Stack, Typography, useTheme } from "@mui/material";

const CurrentConditions = ({ title, value, unit }) => {
  const theme = useTheme();
  const renderIcon = () => {
    switch (title) {
      case "Humidity":
        return <WiHumidity size={22} />;
      case "Pressure":
        return <WiBarometer size={22} />;
      case "Visibility":
        return <WiDust size={22} />;
      case "Wind Speed":
        return <WiStrongWind size={22} />;
      default:
        return "";
    }
  };

  return (
    <>
      <MainCard>
        <Stack direction={"row"} spacing={1} alignItems={"start"}>
          {renderIcon()}
          <Stack spacing={0.2}>
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "10px", md: "12px", lg: "14px" },
                color: theme.palette.grey[700],
                fontWeight: "600",
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "14px", md: "16px", lg: "18px" },
                fontWeight: 700,
              }}
            >
              {`${value} ${unit}`}
            </Typography>
          </Stack>
        </Stack>
      </MainCard>
    </>
  );
};

export default CurrentConditions;
