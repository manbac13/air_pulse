import instance from ".."

export const getCurrentWeatherData = (params)=>{
    return instance.get(`/data/2.5/weather?lat=${params.lat}&lon=${params.lon}`)
}