import { useDispatch, useSelector } from "react-redux";
import { getCurrentWeatherData } from "../../Store/Weather";

function useWeather() {
  const dispatch = useDispatch();

  const currentWeather = useSelector((state) => state?.weather?.currentWeather);

  const activeCities = useSelector((state) => state?.weather?.metroCities);

  //actions
  const getCurrentWeatherDataAction = (params) =>
    dispatch(getCurrentWeatherData(params));

  return {
    currentWeather,
    activeCities,

    getCurrentWeatherDataAction,
  };
}

export default useWeather;
