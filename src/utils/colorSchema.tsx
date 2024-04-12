export interface IWeatherBg {
  Clear: string;
  Clouds: string;
  Rain: string;
  Drizzle: string;
  Snow: string;
  Thunderstorm: string;
}

export const weatherBg: IWeatherBg = {
  "Clear": '180deg, rgba(254,232,142,1) 0%, rgba(241,155,123,0.6) 100%',
  "Clouds": '180deg, rgba(192,246,255,1) 0%, rgba(6,91,214,0.6) 100%',
  "Rain": '180deg, rgba(184,201,253,1) 0%, rgba(57,77,182,0.6) 100%',
  "Drizzle": '180deg, rgba(214,221,234,1) 0%, rgba(100,133,181,0.6) 100%',
  "Snow": '180deg, rgba(145,167,212,1) 0%, rgba(6,40,99,0.6) 100%',
  "Thunderstorm": '180deg, rgba(213,219,233,1) 0%, rgba(156,97,174,0.6) 100%'
}

export const mainWeatherBg: IWeatherBg = {
  "Clear": "url('/clear.jpg')",
  "Clouds": "url('/cloudy.jpg')",
  "Rain": "url('/rainy.jpg')",
  "Drizzle": "url('/drizzle.jpeg')",
  "Snow": "url('/snow.jpeg')",
  "Thunderstorm": "url('/storm.jpeg')"
}
