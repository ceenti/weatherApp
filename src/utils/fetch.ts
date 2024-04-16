const base_api_url = "https://api.openweathermap.org"

/* eslint-enable array-callback-return */
export const fetcher = (...args: any[]) => fetch(...args).then(res => res.json())

export const fetchMainData = async(position: { latitude: string, longitude: string}) => {
  try {
    const url = `${base_api_url}/data/2.5/forecast?units=metric&lat=${position.latitude}&lon=${position.longitude}&appid=${process.env.API_KEY}`
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch(_) {
    throw new Error("There was an error retrieving data");
  } 
}

export const searchData = async(query: string) => {
  try {
    const url = `${base_api_url}/data/2.5/find?q=${query}&units=metric&type=like&sort=population&cnt=30&appid=${process.env.API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch(_) {
    throw new Error("There was an error retrieving location");
  } 
}
