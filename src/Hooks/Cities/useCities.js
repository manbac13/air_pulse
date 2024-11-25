import { useDispatch, useSelector } from "react-redux";
import { clearData, getCities, setLocation } from "../../Store/Cities";

function useCities() {
  const dispatch = useDispatch();

  const cities = useSelector((state) => state?.cities?.data);
  const location = useSelector((state) => state?.cities?.location?.name);
  const refreshObject = useSelector((state) => state?.cities?.location);

  //action
  const getCitiesAction = (params) => dispatch(getCities(params));
  const clearDataAction = () => dispatch(clearData());
  const setLocationAction = (params) => dispatch(setLocation(params));
  return {
    cities,
    location,
    refreshObject,

    getCitiesAction,
    clearDataAction,
    setLocationAction,
  };
}
export default useCities;
