export interface IWeatherBg {
  Clear: string;
  Clouds: string;
  Rain: string;
  Drizzle: string;
  Snow: string;
  Thunderstorm: string;
}

export const weatherBg: IWeatherBg = {
  "Clear": '360deg, rgba(254,232,142,1) 0%, rgba(241,155,123,0.3) 100%',
  "Clouds": '360deg, rgba(192,246,255,1) 0%, rgba(6,91,214,0.3) 100%',
  "Rain": '360deg, rgba(184,201,253,1) 0%, rgba(57,77,182,0.3) 100%',
  "Drizzle": '360deg, rgba(214,221,234,1) 0%, rgba(100,133,181,0.3) 100%',
  "Snow": '360deg, rgba(145,167,212,1) 0%, rgba(6,40,99,0.3) 100%',
  "Thunderstorm": '180deg, rgba(213,219,233,1) 0%, rgba(156,97,174,0.3) 100%'
}

export const mainWeatherBg: IWeatherBg = {
  "Clear": "url('/clear.jpg')",
  "Clouds": "url('/cloudy.jpg')",
  "Rain": "url('/rainy.jpg')",
  "Drizzle": "url('/drizzle.jpeg')",
  "Snow": "url('/snow.jpeg')",
  "Thunderstorm": "url('/storm.jpeg')"
}
