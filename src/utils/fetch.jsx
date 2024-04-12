
export const fetchMainData = async(position) => {

  console.log(position)
const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?units=metric&lat=${position.latitude}&lon=${position.longitude}&appid=${process.env.API_KEY}`);
const data = await response.json();
return data;
}
