import { useDispatch, useSelector } from "react-redux";
import { getAqi } from "../../Store/Aqi";

function useAqi() {
  const dispatch = useDispatch();

  const aqiData = useSelector((state) => state?.aqi?.data);

  //action
  const getAqiAction = (params) => dispatch(getAqi(params));
  return {
    aqiData,

    getAqiAction,
  };
}

export default useAqi;
