import { useDispatch, useSelector } from "react-redux";
import { getForecast } from "../../Store/Forecast";

function useForecast() {
  const dispatch = useDispatch();

  const forecastData = useSelector((state) => state?.forecast?.data?.list);
  const todayForecast = useSelector((state) => state?.forecast?.today);
  const tomorrowForecast = useSelector((state) => state?.forecast?.tomorrow);

  //actions
  const getForecastAction = (params) => dispatch(getForecast(params));

  return {
    forecastData,
    todayForecast,
    tomorrowForecast,
    getForecastAction,
  };
}

export default useForecast;
